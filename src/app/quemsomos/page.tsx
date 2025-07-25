"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Import Navbar conforme seu projeto
import Navbar from "@/components/menu/navbar";
import Footer from "@/components/Footer/footer";
import routes from "@/utils/imagens";



export default function QuemSomos() {
  return (
    <>
      <Navbar />

      <main className="quem-somos-container container">
        {/* Topo: imagem e texto lado a lado */}
        <section className="quem-somos-topo">
          <img
            src={routes.logo}
            alt="Visacont Contabilidade"
            className="quem-somos-img"
          />

          <div className="quem-somos-texto">
            <h2 className="quem-somos-title">Quem Somos</h2>
            <p className="quem-somos-desc">
              A <strong>Visacont</strong> é uma empresa contábil com anos de
              experiência, oferecendo soluções seguras, modernas e personalizadas para empresas de todos os tamanhos.
              Nosso foco é garantir clareza fiscal, suporte constante e crescimento sustentável do seu negócio.
            </p>
            <ul className="quem-somos-list">
              <li>Contabilidade especializada</li>
              <li>Equipe experiente e atualizada</li>
              <li>Atendimento humanizado e ágil</li>
            </ul>
          </div>
        </section>

        {/* Seção cards */}
        <section className="quem-somos-cards mt-5">
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card shadow-sm border-0 h-100">
                <img
                  src={routes.profissionalismo}
                  className="card-img-top card-img-custom"
                  alt="Profissionalismo"
                />
                <div className="card-body text-center">
                  <h5 className="card-title text-primary fw-bold">Profissionalismo</h5>
                  <p className="card-text text-secondary">
                    Contadores altamente qualificados e prontos para atender com excelência.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card shadow-sm border-0 h-100">
                <img
                  src={routes.confianca}
                  className="card-img-top card-img-custom"
                  alt="Confiança"
                />
                <div className="card-body text-center">
                  <h5 className="card-title text-primary fw-bold">Confiança</h5>
                  <p className="card-text text-secondary">
                    Relacionamento transparente com clientes e comprometimento com resultados.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card shadow-sm border-0 h-100">
                <img
                  src={routes.tecnologia}
                  className="card-img-top card-img-custom"
                  alt="Tecnologia"
                />
                <div className="card-body text-center">
                  <h5 className="card-title text-primary fw-bold">Tecnologia</h5>
                  <p className="card-text text-secondary">
                    Utilizamos ferramentas modernas para entregar agilidade e precisão contábil.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card shadow-sm border-0 h-100">
                <img
                  src={routes.atendimento}
                  className="card-img-top card-img-custom"
                  alt="Atendimento Personalizado"
                />
                <div className="card-body text-center">
                  <h5 className="card-title text-primary fw-bold">Atendimento Personalizado</h5>
                  <p className="card-text text-secondary">
                    Entendemos as necessidades de cada cliente para entregar soluções sob medida.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
