"use client";
import Footer from "@/components/Footer/footer";
import Navbar from "@/components/menu/navbar";
import { useState } from "react";
import { FaRegClock, FaRegCheckCircle, FaBalanceScale, FaBuilding, FaShieldAlt, FaHeadset } from "react-icons/fa";

export default function AberturaEmpresa() {
  const [formEnviado, setFormEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormEnviado(true);
  };

  return (
    <>
      <Navbar />
      <div className="pagina-servico">
        <section className="conteudo-principal">
          <h1>📂 Abertura de Empresa</h1>
          <p className="intro">
            Tenha seu CNPJ em até <strong>48h</strong> com toda a assessoria contábil e jurídica que sua empresa precisa. Agilidade, segurança e experiência no que fazemos.
          </p>

          <div className="destaques">
            <div className="info-item">
              <FaRegClock size={22} />
              <span>Prazo médio: <strong>48 horas úteis</strong></span>
            </div>
            <div className="info-item">
              <FaRegCheckCircle size={22} />
              <span>Mais de <strong>350 empresas</strong> abertas com sucesso</span>
            </div>
            <div className="info-item">
              <FaShieldAlt size={22} />
              <span><strong>Conformidade garantida</strong> com normas fiscais e jurídicas</span>
            </div>
          </div>

          <hr className="divisor" />

          <div className="cards-servicos">
            <div className="card">
              <FaBuilding size={28} />
              <h3>Definição do Tipo Empresarial</h3>
              <p>Ajuda na escolha entre MEI, LTDA, EI ou outro modelo ideal para seu negócio.</p>
            </div>
            <div className="card">
              <FaBalanceScale size={28} />
              <h3>Planejamento Tributário</h3>
              <p>Simulação e escolha do melhor regime: Simples Nacional, Lucro Presumido, etc.</p>
            </div>
            <div className="card">
              <FaHeadset size={28} />
              <h3>Suporte Personalizado</h3>
              <p>Atendimento humanizado e acompanhamento do processo até a emissão final do CNPJ.</p>
            </div>
          </div>
        </section>

        <aside className="formulario-lateral">
          <h2>📨 Solicite um Orçamento</h2>
          <p className="selo-confiança">🔒 Atendimento 100% seguro e sigiloso</p>

          {formEnviado ? (
            <p className="confirmacao">✅ Obrigado! Retornaremos em breve no seu contato.</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <input type="text" name="nome" placeholder="Seu nome completo" required />
              <input type="email" name="email" placeholder="Seu e-mail" required />
              <input type="tel" name="telefone" placeholder="WhatsApp" required />
              <textarea name="mensagem" placeholder="Descreva sua necessidade" rows={4} required />
              <button type="submit">Solicitar Orçamento</button>
            </form>
          )}
        </aside>
      </div>
      <Footer />

      <style jsx>{`
        .pagina-servico {
          display: flex;
          flex-wrap: wrap;
          gap: 40px;
          padding: 40px 30px 80px;
          padding-top: 110px; /* Espaço extra para navbar (ajuste conforme altura real do navbar) */
          background: #f3f5f9;
          font-family: "Segoe UI", sans-serif;
          min-height: calc(100vh - 140px);
          box-sizing: border-box;
        }

        .conteudo-principal {
          flex: 1 1 600px;
        }

        h1 {
          font-size: 2.6rem;
          color: #2c3e50;
          margin-bottom: 15px;
        }

        .intro {
          font-size: 1.15rem;
          color: #444;
          line-height: 1.6;
          margin-bottom: 25px;
        }

        .destaques {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 25px;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1rem;
          color: #2c3e50;
        }

        .divisor {
          border: none;
          height: 3px;
          background: #3498db;
          width: 80px;
          margin: 30px 0 20px;
        }

        .cards-servicos {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 25px;
        }

        .card {
          background: #ffffff;
          padding: 25px;
          border-radius: 12px;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.06);
          transition: 0.3s;
        }

        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 8px 28px rgba(0, 0, 0, 0.08);
        }

        .card h3 {
          margin-top: 15px;
          color: #34495e;
          font-size: 1.1rem;
        }

        .card p {
          margin-top: 5px;
          color: #666;
          font-size: 0.95rem;
        }

        .formulario-lateral {
          background: #ffffff;
          padding: 30px;
          border-left: 5px solid #3498db;
          border-radius: 12px;
          flex: 0 0 340px;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.07);
          height: fit-content;
          position: sticky;
          top: 20px;
          align-self: start;
        }

        .formulario-lateral h2 {
          font-size: 1.6rem;
          margin-bottom: 8px;
          color: #2c3e50;
        }

        .selo-confiança {
          font-size: 0.9rem;
          color: #2c3e50;
          margin-bottom: 20px;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        input,
        textarea {
          padding: 12px;
          border: 1px solid #ccc;
          border-radius: 6px;
          font-size: 1rem;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        input:focus,
        textarea:focus {
          outline: none;
          border-color: #3498db;
          box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.15);
        }

        button {
          background: #3498db;
          color: white;
          border: none;
          padding: 14px;
          font-size: 1rem;
          font-weight: bold;
          border-radius: 6px;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        button:hover {
          background: #2980b9;
        }

        .confirmacao {
          color: green;
          font-weight: bold;
          font-size: 1.1rem;
        }

        @media (max-width: 768px) {
          .pagina-servico {
            flex-direction: column;
            padding: 100px 20px 50px; /* padding-top ajustado também para mobile */
            min-height: auto;
          }

          .formulario-lateral {
            width: 100%;
            margin-top: 30px;
            position: relative;
            border-left: none;
            border-top: 5px solid #3498db;
            padding-top: 20px;
            padding-left: 20px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          }
        }
      `}</style>
    </>
  );
}
