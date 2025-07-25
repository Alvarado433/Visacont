"use client";
import routes from "@/utils/routes";
import React from "react";

export default function ServicesSection() {
  return (
    <>
      <section className="services-section py-5 bg-light">
        <div className="container">
          <h2 className="section-title text-center mb-4">Nossos Serviços</h2>
          <hr
            className="mx-auto mb-5"
            style={{ width: "80px", height: "3px", backgroundColor: "#0d6efd", border: "none" }}
          />

          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-lg-3 col-md-6">
              <article className="service-card text-center p-4 bg-white rounded shadow-sm h-100" tabIndex={0}>
                <i className="bi bi-building fs-1 text-primary mb-3 service-icon" aria-hidden="true"></i>
                <h5 className="service-title mb-2">Abertura de Empresa</h5>
                <p className="service-desc small mb-3">
                  Assessoria completa para abertura e legalização da sua empresa, sem burocracia.
                </p>
                <ul className="text-start small mb-3 list-unstyled service-points">
                  <li>Documentação rápida</li>
                  <li>Consultoria personalizada</li>
                  <li>Suporte total</li>
                </ul>
                <a href={routes.abertura} className="btn btn-outline-primary btn-sm">
                  Saiba Mais
                </a>
              </article>
            </div>

            {/* Card 2 */}
            <div className="col-lg-3 col-md-6">
              <article className="service-card text-center p-4 bg-white rounded shadow-sm h-100" tabIndex={0}>
                <i className="bi bi-calculator fs-1 text-primary mb-3 service-icon" aria-hidden="true"></i>
                <h5 className="service-title mb-2">Contabilidade</h5>
                <p className="service-desc small mb-3">
                  Gestão contábil precisa para manter seu negócio em conformidade e lucrativo.
                </p>
                <ul className="text-start small mb-3 list-unstyled service-points">
                  <li>Análises detalhadas</li>
                  <li>Relatórios periódicos</li>
                  <li>Planejamento tributário</li>
                </ul>
                <a href={routes.contabilidade} className="btn btn-outline-primary btn-sm">
                  Saiba Mais
                </a>
              </article>
            </div>

            {/* Card 3 */}
            <div className="col-lg-3 col-md-6">
              <article className="service-card text-center p-4 bg-white rounded shadow-sm h-100" tabIndex={0}>
                <i className="bi bi-people fs-1 text-primary mb-3 service-icon" aria-hidden="true"></i>
                <h5 className="service-title mb-2">Folha de Pagamento</h5>
                <p className="service-desc small mb-3">
                  Processamento seguro da folha, com total conformidade com a legislação.
                </p>
                <ul className="text-start small mb-3 list-unstyled service-points">
                  <li>Cálculos corretos</li>
                  <li>Gestão de benefícios</li>
                  <li>Suporte aos funcionários</li>
                </ul>
                <a href="/servicos/folha.php" className="btn btn-outline-primary btn-sm">
                  Saiba Mais
                </a>
              </article>
            </div>

            {/* Card 4 */}
            <div className="col-lg-3 col-md-6">
              <article className="service-card text-center p-4 bg-white rounded shadow-sm h-100" tabIndex={0}>
                <i className="bi bi-file-earmark-text fs-1 text-primary mb-3 service-icon" aria-hidden="true"></i>
                <h5 className="service-title mb-2">Departamento Fiscal</h5>
                <p className="service-desc small mb-3">
                  Controle total das obrigações fiscais com segurança e organização.
                </p>
                <ul className="text-start small mb-3 list-unstyled service-points">
                  <li>Apuração de impostos</li>
                  <li>Declarações fiscais</li>
                  <li>Orientação tributária</li>
                </ul>
                <a href="/servicos/fiscal.php" className="btn btn-outline-primary btn-sm">
                  Saiba Mais
                </a>
              </article>
            </div>
          </div>
        </div>

        <style jsx>{`
          .services-section {
            background-color: #f9fbfd;
            padding-top: 5rem !important;
            padding-bottom: 6rem !important;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }

          .service-card {
            background: #fff;
            border-radius: 14px;
            box-shadow: 0 8px 25px rgb(0 0 0 / 0.07);
            transition: box-shadow 0.35s ease, transform 0.35s ease;
            cursor: default;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            padding: 2.5rem 2rem;
            opacity: 0;
            transform: translateY(30px);
            animation: fadeInUp 0.6s forwards;
            outline: none;
          }

          .service-card:focus-visible {
            box-shadow: 0 0 0 4px #0ea5e9;
          }

          .service-card:hover,
          .service-card:focus-within {
            box-shadow: 0 20px 50px rgb(14 165 233 / 0.35);
            transform: translateY(-10px);
          }

          .service-icon {
            color: #0047be;
            font-size: 3.2rem;
            transition: color 0.35s ease;
            margin-bottom: 1.25rem;
          }

          .service-card:hover .service-icon,
          .service-card:focus-within .service-icon {
            color: #0ea5e9;
          }

          .service-title {
            font-weight: 700;
            color: #003580;
            font-size: 1.7rem;
            margin-bottom: 1rem;
          }

          .service-desc {
            color: #444;
            font-size: 1.05rem;
            line-height: 1.65;
            margin-bottom: 1rem;
            min-height: 90px;
          }

          .service-points {
            padding-left: 1.2rem;
            color: #555;
            font-weight: 600;
            font-size: 1rem;
            margin-bottom: 1.6rem;
          }

          .service-points li {
            margin-bottom: 0.5rem;
            position: relative;
            padding-left: 1.2rem;
          }

          .service-points li::before {
            content: "✔";
            position: absolute;
            left: 0;
            color: #0ea5e9;
            font-weight: 900;
            font-size: 1.1rem;
            top: 0;
            line-height: 1;
          }

          .btn-sm {
            font-size: 0.9rem;
            padding: 0.5rem 1.4rem;
            border-radius: 30px;
            font-weight: 700;
            transition: background-color 0.35s ease, box-shadow 0.35s ease;
            letter-spacing: 0.04em;
            text-transform: uppercase;
            box-shadow: 0 4px 12px rgb(0 71 190 / 0.2);
          }

          .btn-outline-primary {
            border-color: #0047be;
            color: #0047be;
          }

          .btn-outline-primary:hover,
          .btn-outline-primary:focus {
            background-color: #0ea5e9;
            border-color: #0ea5e9;
            color: white;
            box-shadow: 0 6px 20px rgb(14 165 233 / 0.6);
          }

          @keyframes fadeInUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @media (max-width: 768px) {
            .section-title {
              font-size: 2.2rem;
              margin-bottom: 2.5rem;
            }

            .service-card {
              padding: 3rem 1.5rem;
            }

            .service-title {
              font-size: 1.4rem;
            }

            .service-desc,
            .service-points {
              font-size: 0.95rem;
            }
          }
        `}</style>
      </section>
    </>
  );
}
