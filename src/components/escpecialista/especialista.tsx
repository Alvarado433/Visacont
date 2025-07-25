"use client";
import React from "react";
import Link from "next/link";
import routes from "@/utils/routes";

export default function VisacontConvite() {
  return (
    <>
      <section className="visacont-convite py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* Texto à esquerda */}
            <div className="col-lg-6 text-lg-start text-center">
              <h2 className="fw-bold border-bottom pb-2 mb-3">
                Fale com um especialista para abrir seu CNPJ
              </h2>
              <p className="mb-4 text-muted fs-5">
                Na <strong>Visacont</strong>, nosso time está pronto para orientar você na abertura do seu CNPJ de forma simples e 100% digital. Tire suas dúvidas e receba atendimento personalizado agora mesmo.
              </p>
              <div className="d-flex flex-wrap justify-content-lg-start justify-content-center gap-3">
                <Link href={routes.abrirEmpresa} legacyBehavior>
                  <a className="btn btn-primary px-4 py-2 shadow-sm btn-abrir-empresa">
                    Abrir minha empresa
                  </a>
                </Link>

                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-success px-4 py-2 shadow-sm btn-falar-especialista"
                >
                  Falar com Especialista
                </a>
              </div>
            </div>

            {/* Imagem com destaque */}
            <div className="col-lg-6 text-center">
              <div className="position-relative d-inline-block">
                <img
                  src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=280&q=80"
                  alt="Consultora Visacont"
                  className="rounded-circle shadow"
                  style={{ width: 280, height: 280, objectFit: "cover" }}
                />
                <div className="name-tag bg-white rounded px-3 py-2 shadow-sm position-absolute bottom-0 start-50 translate-middle-x">
                  <span className="fw-semibold">Juliana Fernandes</span>
                  <br />
                  <small className="text-muted">Especialista Contábil</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .visacont-convite h2 {
            font-size: 2rem;
            border-color: #0d6efd;
          }

          .visacont-convite p {
            max-width: 520px;
            margin-left: auto;
            margin-right: auto;
            color: #495057;
          }

          .btn-abrir-empresa {
            background-color: #0d6efd;
            border: none;
            font-weight: 600;
            transition: background-color 0.3s ease, box-shadow 0.3s ease;
            user-select: none;
          }
          .btn-abrir-empresa:hover,
          .btn-abrir-empresa:focus {
            background-color: #0b5ed7;
            box-shadow: 0 8px 16px rgba(13, 110, 253, 0.5);
            outline: none;
          }

          .btn-falar-especialista {
            border-color: #198754;
            color: #198754;
            font-weight: 600;
            transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
          }
          .btn-falar-especialista:hover,
          .btn-falar-especialista:focus {
            background-color: #198754;
            color: #fff;
            box-shadow: 0 8px 16px rgba(25, 135, 84, 0.5);
            outline: none;
          }

          .name-tag {
            margin-bottom: -20px;
            white-space: nowrap;
            padding: 10px 20px;
            font-size: 1rem;
            user-select: none;
          }

          @media (max-width: 768px) {
            .visacont-convite h2 {
              font-size: 1.75rem;
            }
            .visacont-convite img {
              width: 220px !important;
              height: 220px !important;
            }
            .visacont-convite p {
              max-width: 100%;
            }
          }
        `}</style>
      </section>
    </>
  );
}
