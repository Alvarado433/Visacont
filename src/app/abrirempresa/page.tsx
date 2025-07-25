"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import { toast, ToastContainer } from "react-toastify";

import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";

import DadosPessoaisStep from "@/components/Multi/DadosPessoaisStep";
import EnderecoStep from "@/components/Multi/EnderecoStep";
import RevisaoStep from "@/components/Multi/RevisaoStep";
import Navbar from "@/components/menu/navbar";
import Footer from "@/components/Footer/footer";

export default function AbrirEmpresa() {
  const [step, setStep] = useState(1);
  const [aceitoTermos, setAceitoTermos] = useState(false);

  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    cpf: "",
    cep: "",
    logradouro: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
    referencia: "",
    tipoEmpresa: "",
    cnae: "",
  });

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const maskValue = (name: string, value: string) => {
    if (name === "telefone") {
      return value
        .replace(/\D/g, "")
        .replace(/^(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3")
        .substring(0, 15);
    }
    if (name === "cpf") {
      return value
        .replace(/\D/g, "")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2")
        .substring(0, 14);
    }
    if (name === "cep") {
      return value
        .replace(/\D/g, "")
        .replace(/^(\d{5})(\d)/, "$1-$2")
        .substring(0, 9);
    }
    return value;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const maskedValue = maskValue(name, value);
    setForm((prev) => ({ ...prev, [name]: maskedValue }));
  };

  const buscarEnderecoPorCep = async (cep: string) => {
    try {
      const cepLimpo = cep.replace(/\D/g, "");
      if (cepLimpo.length !== 8) {
        toast.warn("CEP inválido.");
        return;
      }
      const response = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
      const data = await response.json();
      if (data.erro) {
        toast.error("CEP não encontrado.");
        return;
      }
      setForm((prev) => ({
        ...prev,
        cidade: data.localidade,
        estado: data.uf,
        logradouro: data.logradouro || "",
        bairro: data.bairro || "",
      }));
      toast.success("Endereço carregado com sucesso!");
    } catch {
      toast.error("Erro ao buscar CEP.");
    }
  };

  const handleCepBlur = () => {
    buscarEnderecoPorCep(form.cep);
  };

  const validateStep1 = () => {
    if (!form.nome.trim()) {
      toast.error("Por favor, preencha o Nome Completo.");
      return false;
    }
    if (!form.email.trim()) {
      toast.error("Por favor, preencha o E-mail.");
      return false;
    }
    if (!form.telefone.trim() || form.telefone.length < 14) {
      toast.error("Por favor, preencha o Telefone corretamente.");
      return false;
    }
    if (!form.cpf.trim() || form.cpf.length < 14) {
      toast.error("Por favor, preencha o CPF corretamente.");
      return false;
    }
    if (!form.tipoEmpresa) {
      toast.error("Selecione o Tipo de Empresa.");
      return false;
    }
    if (!form.cnae.trim()) {
      toast.error("Por favor, preencha o CNAE Principal.");
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    if (!form.cep.trim() || form.cep.length < 9) {
      toast.error("Por favor, preencha o CEP corretamente.");
      return false;
    }
    if (!form.logradouro.trim()) {
      toast.error("Por favor, preencha o Logradouro.");
      return false;
    }
    if (!form.numero.trim()) {
      toast.error("Por favor, preencha o Número.");
      return false;
    }
    if (!form.bairro.trim()) {
      toast.error("Por favor, preencha o Bairro.");
      return false;
    }
    if (!form.cidade.trim()) {
      toast.error("Cidade inválida. Verifique o CEP.");
      return false;
    }
    if (!form.estado.trim()) {
      toast.error("Estado inválido. Verifique o CEP.");
      return false;
    }
    return true;
  };

  const validateStep3 = () => {
    if (!aceitoTermos) {
      toast.error("Você deve aceitar os Termos e Condições para continuar.");
      return false;
    }
    return true;
  };

  const handleNextStep = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    } else if (step === 2 && validateStep2()) {
      setStep(3);
    } else if (step === 3 && validateStep3()) {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    // Envio de dados para API aqui
    toast.success("Formulário enviado com sucesso!");
    // Aqui você pode resetar ou redirecionar o usuário
  };

  const handleBackStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <>
      <Navbar />

      <main
        className="abrir-empresa d-flex flex-column flex-grow-1 bg-light"
        style={{
          minHeight: "calc(100vh - 130px)", // Ajuste de altura total menos Navbar + Footer
          paddingTop: "70px", // Espaço para Navbar (ajuste se necessário)
          paddingBottom: "60px", // Espaço para Footer (ajuste se necessário)
        }}
      >
        <ToastContainer />
        <div className="container">
          {/* Banner explicativo */}
          <div
            className="bg-primary text-white rounded p-4 mb-5 shadow"
            data-aos="fade-right"
            style={{ borderLeft: "6px solid #ffc107" }}
          >
            <h1 className="fw-bold mb-2">VisaCont - Sua Empresa Formalizada</h1>
            <p className="mb-0 fs-5">
              Facilite a abertura da sua empresa com nosso processo simplificado em 3 passos. <br />
              Preencha seus dados, endereço e revise antes de enviar. <br />
              Conte com nosso suporte para tirar suas dúvidas.
            </p>
          </div>

          <h2 className="text-center text-primary fw-bold mb-5" data-aos="fade-down">
            Abra sua empresa em poucos passos
          </h2>

          {/* Indicador de etapas */}
          <div className="d-flex justify-content-center mb-4" style={{ gap: "1rem" }}>
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className={`rounded-circle d-flex align-items-center justify-content-center ${
                  step === num ? "bg-primary text-white" : "bg-light text-secondary"
                }`}
                style={{
                  width: "45px",
                  height: "45px",
                  fontWeight: "700",
                  cursor: num < step ? "pointer" : "default",
                  border: "3px solid #0d6efd",
                  userSelect: "none",
                  transition: "all 0.3s ease",
                }}
                onClick={() => {
                  if (num < step) setStep(num);
                }}
                title={`Etapa ${num}`}
              >
                {num}
              </div>
            ))}
          </div>

          <form
            className="row g-4 bg-white p-5 rounded shadow-lg"
            data-aos="fade-up"
            onSubmit={(e) => e.preventDefault()}
            style={{ maxWidth: "800px", margin: "0 auto" }}
          >
            {step === 1 && <DadosPessoaisStep form={form} onChange={handleChange} />}
            {step === 2 && (
              <EnderecoStep
                cep={form.cep}
                cidade={form.cidade}
                estado={form.estado}
                logradouro={form.logradouro}
                numero={form.numero}
                complemento={form.complemento}
                bairro={form.bairro}
                referencia={form.referencia}
                onChange={handleChange}
                onCepBlur={handleCepBlur}
              />
            )}
            {step === 3 && (
              <RevisaoStep form={form} aceitoTermos={aceitoTermos} setAceitoTermos={setAceitoTermos} />
            )}

            <div className="col-12 d-flex justify-content-between mt-4">
              {step > 1 ? (
                <button type="button" className="btn btn-outline-secondary" onClick={handleBackStep}>
                  ← Voltar
                </button>
              ) : (
                <div />
              )}
              <button type="button" className="btn btn-primary fw-semibold px-4" onClick={handleNextStep}>
                {step < 3 ? "Próximo" : "Enviar"}
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />

      <style jsx>{`
        h2 {
          font-size: 2.5rem;
        }
        .form-label {
          font-weight: 600;
        }
        input,
        select {
          border-radius: 0.5rem;
          box-shadow: none !important;
        }
        .btn:hover {
          background-color: #084298 !important;
          color: white !important;
        }
        main {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }
      `}</style>
    </>
  );
}
