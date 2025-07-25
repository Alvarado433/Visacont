"use client";

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "@/components/menu/navbar";
import Footer from "@/components/Footer/footer";
import routes from "@/utils/imagens";
import Image from "next/image";

export default function QuemSomos() {
  return (
    <>
      <Navbar />

      <main className="quem-somos-container container py-5">
        {/* Topo: imagem e texto lado a lado */}
        <section className="row align-items-center g-5 mb-5">
          <div className="col-lg-6 text-center">
            <Image
              src={routes.logo}
              alt="Visacont Contabilidade"
              width={400}
              height={400}
              className="img-fluid rounded"
              priority
            />
          </div>
          <div className="col-lg-6">
            <h2 className="fw-bold text-primary">Quem Somos</h2>
            <p className="lead text-secondary mt-3">
              A <strong>Visacont</strong> é uma empresa contábil com anos de
              experiência, oferecendo soluções seguras, modernas e personalizadas
              para empresas de todos os tamanhos.
            </p>
            <p className="text-secondary">
              Nosso foco é garantir clareza fiscal, suporte constante e crescimento sustentável do seu negócio.
            </p>
            <ul className="list-unstyled mt-3">
              <li>✔️ Contabilidade especializada</li>
              <li>✔️ Equipe experiente e atualizada</li>
              <li>✔️ Atendimento humanizado e ágil</li>
            </ul>
          </div>
        </section>

        {/* Seção de valores / cards */}
        <section className="mb-5">
          <div className="row g-4">
            {[
              {
                title: "Profissionalismo",
                img: routes.profissionalismo,
                text: "Contadores altamente qualificados e prontos para atender com excelência.",
              },
              {
                title: "Confiança",
                img: routes.confianca,
                text: "Relacionamento transparente com clientes e comprometimento com resultados.",
              },
              {
                title: "Tecnologia",
                img: routes.tecnologia,
                text: "Utilizamos ferramentas modernas para entregar agilidade e precisão contábil.",
              },
              {
                title: "Atendimento Personalizado",
                img: routes.atendimento,
                text: "Entendemos as necessidades de cada cliente para entregar soluções sob medida.",
              },
            ].map((card, index) => (
              <div className="col-md-6 col-lg-3" key={index}>
                <div className="card shadow-sm border-0 h-100">
                  <Image
                    src={card.img}
                    alt={card.title}
                    width={500}
                    height={300}
                    className="card-img-top"
                    style={{ objectFit: "cover", height: "200px" }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title text-primary fw-bold">
                      {card.title}
                    </h5>
                    <p className="card-text text-secondary">{card.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
