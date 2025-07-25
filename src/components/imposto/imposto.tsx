"use client";
import React, { useState, useEffect, useRef } from "react";

interface FalarComEspecialistaProps {
  numeroWhatsapp: string; // Ex: "5511999999999"
  mensagemPadrao?: string;
}

function FalarComEspecialista({
  numeroWhatsapp,
  mensagemPadrao = "Olá! Tenho interesse nos serviços de Imposto de Renda.",
}: FalarComEspecialistaProps) {
  const [toastVisivel, setToastVisivel] = useState(false);
  const toastRef = useRef<HTMLDivElement>(null);

  const abrirWhatsApp = () => {
    if (toastVisivel) return; // evita múltiplos clicks rápidos

    setToastVisivel(true);
    const textoUrl = encodeURIComponent(mensagemPadrao);
    const url = `https://wa.me/${numeroWhatsapp}?text=${textoUrl}`;

    setTimeout(() => {
      window.open(url, "_blank", "noopener,noreferrer");
    }, 800);
  };

  // Auto foco no toast para acessibilidade
  useEffect(() => {
    if (toastVisivel && toastRef.current) {
      toastRef.current.focus();
      const timer = setTimeout(() => setToastVisivel(false), 3500);
      return () => clearTimeout(timer);
    }
  }, [toastVisivel]);

  return (
    <>
      <button
        onClick={abrirWhatsApp}
        className="btn-whatsapp"
        aria-describedby="toastMsg"
        aria-haspopup="dialog"
        type="button"
      >
        <i className="bi bi-whatsapp"></i>
        <span>Falar com especialista</span>
      </button>

      {toastVisivel && (
        <div
          role="alert"
          aria-live="assertive"
          tabIndex={-1}
          ref={toastRef}
          id="toastMsg"
          className="toast-container"
        >
          <i className="bi bi-whatsapp pulse-icon" aria-hidden="true"></i>
          <span>Abrindo WhatsApp...</span>
          <div className="toast-progress" aria-hidden="true"></div>
        </div>
      )}

      <style jsx>{`
        .btn-whatsapp {
          background-color: #25d366;
          color: white;
          border: none;
          padding: 14px 32px;
          font-size: 1.15rem;
          font-weight: 700;
          border-radius: 35px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 14px;
          box-shadow: 0 6px 15px rgba(37, 211, 102, 0.6);
          transition:
            background-color 0.3s ease,
            box-shadow 0.3s ease,
            transform 0.2s ease;
          user-select: none;
        }
        .btn-whatsapp i {
          font-size: 1.5rem;
        }
        .btn-whatsapp:hover,
        .btn-whatsapp:focus {
          background-color: #128c7e;
          box-shadow: 0 10px 25px rgba(18, 140, 126, 0.8);
          outline: none;
          transform: scale(1.08);
        }
        .btn-whatsapp:active {
          transform: scale(0.98);
          box-shadow: 0 4px 12px rgba(18, 140, 126, 0.7);
        }

        /* Toast */
        .toast-container {
          position: fixed;
          bottom: 30px;
          right: 30px;
          background-color: #25d366;
          color: white;
          padding: 14px 28px;
          border-radius: 40px;
          font-weight: 700;
          font-size: 1.1rem;
          box-shadow: 0 8px 22px rgba(37, 211, 102, 0.85);
          display: flex;
          align-items: center;
          gap: 12px;
          animation: fadeInUp 0.35s ease forwards;
          z-index: 1600;
          user-select: none;
          outline-offset: 3px;
        }
        .toast-container:focus {
          outline: 3px solid #128c7e;
        }
        .toast-container i {
          font-size: 1.8rem;
        }
        .pulse-icon {
          animation: pulse 1.5s infinite ease-in-out;
        }

        /* Progress bar */
        .toast-progress {
          position: absolute;
          bottom: 4px;
          left: 6px;
          height: 4px;
          background-color: rgba(255, 255, 255, 0.7);
          border-radius: 10px;
          animation: progressBar 3.5s linear forwards;
          width: calc(100% - 12px);
          opacity: 0.8;
        }

        /* Keyframes */
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.15);
            opacity: 0.7;
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes progressBar {
          from {
            width: 100%;
          }
          to {
            width: 0%;
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}

export default function ImpostoRenda() {
  return (
    <>
      <section className="imposto-renda py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* Texto */}
            <div className="col-lg-6 texto-imposto">
              <h2 className="fw-bold mb-3">
                Declaração de Imposto de Renda Pessoa Física e MEI
              </h2>
              <p className="mb-4 text-muted">
                A <strong>Visacont</strong> realiza sua declaração de Imposto de Renda com segurança, rapidez e total conformidade com a Receita Federal.
                Atendemos tanto pessoas físicas quanto microempreendedores individuais (MEIs).
              </p>
              <ul className="list-unstyled mb-4">
                <li>
                  <i className="bi bi-check2-circle text-success me-2"></i>
                  Análise da situação financeira pessoal e empresarial (MEI)
                </li>
                <li>
                  <i className="bi bi-check2-circle text-success me-2"></i>
                  Orientações sobre deduções legais e separação de rendimentos
                </li>
                <li>
                  <i className="bi bi-check2-circle text-success me-2"></i>
                  Envio da declaração do IRPF e DASN-SIMEI
                </li>
                <li>
                  <i className="bi bi-check2-circle text-success me-2"></i>
                  Suporte para retificações, atrasos ou pendências
                </li>
              </ul>

              {/* Botão dinâmico */}
              <FalarComEspecialista
                numeroWhatsapp="5511999999999"
                mensagemPadrao="Olá! Tenho interesse nos serviços de Imposto de Renda."
              />
            </div>

            {/* Imagem */}
            <div className="col-lg-6 text-center">
              <img
                src="/img/imposto-de-renda-leao.webp"
                alt="Declaração Imposto de Renda"
                className="img-fluid rounded shadow imagem-imposto"
              />
            </div>
          </div>
        </div>

        <style jsx>{`
          .texto-imposto h2 {
            color: #0d6efd;
            font-size: 2.25rem;
            margin-bottom: 1rem;
          }
          .texto-imposto p {
            font-size: 1.125rem;
            line-height: 1.6;
          }
          .texto-imposto ul li {
            font-size: 1rem;
            margin-bottom: 0.6rem;
          }

          .imagem-imposto {
            max-width: 100%;
            max-height: 350px;
            object-fit: contain;
          }

          @media (max-width: 767.98px) {
            .texto-imposto h2 {
              font-size: 1.75rem;
            }
            .texto-imposto p {
              font-size: 1rem;
            }
            .imagem-imposto {
              max-height: 250px;
            }
          }
        `}</style>
      </section>
    </>
  );
}
