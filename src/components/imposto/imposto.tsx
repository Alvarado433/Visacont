"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/menu/navbar";
import Footer from "@/components/Footer/footer";

export default function ImpostoRenda() {
  return (
    <>
      <Navbar />

      <main className="container py-5">
        <section className="row align-items-center mb-5">
          <div className="col-lg-6 mb-4 mb-lg-0 text-center">
            <Image
              src="/img/imposto-de-renda-leao.webp"
              alt="Declaração Imposto de Renda"
              width={600}
              height={350}
              className="rounded shadow"
              style={{ objectFit: "contain", maxWidth: "100%", height: "auto" }}
              priority
            />
          </div>
          <div className="col-lg-6">
            <h2 className="fw-bold text-primary mb-3">Declaração de Imposto de Renda</h2>
            <p className="lead text-secondary">
              Com a <strong>Visacont Contabilidade</strong>, sua declaração de Imposto de Renda é feita com segurança, agilidade e total conformidade com a legislação.
            </p>
            <ul className="mt-3 text-secondary">
              <li>✔️ Atendimento personalizado</li>
              <li>✔️ Equipe atualizada com as normas da Receita</li>
              <li>✔️ Evite multas e pendências fiscais</li>
            </ul>
          </div>
        </section>

        <section className="text-center">
          <h4 className="fw-semibold text-success">Agende sua declaração conosco!</h4>
          <p className="text-secondary">
            Entre em contato e tenha o suporte de especialistas para garantir tranquilidade com seu IRPF.
          </p>
          <a href="/contato" className="btn btn-primary mt-3 px-4 py-2 fw-semibold">
            Fale com um contador
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
}
