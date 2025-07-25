"use client";
import React from "react";

export default function HeroBanner() {
  return (
    <>
      <section className="hero-banner">
        <div className="container">
          <h1>Soluções Contábeis para sua Empresa</h1>
          <p>Confiança, transparência e resultados para seu crescimento.</p>
        </div>

        <style jsx>{`
          .hero-banner {
            background: url("/img/imagem60.jpeg") no-repeat center center;
            background-size: cover;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            position: relative;
            text-align: center;
          }
          .hero-banner::before {
            content: "";
            position: absolute;
            inset: 0;
            background-color: rgba(0, 71, 190, 0.6); /* overlay azul */
            z-index: 1;
          }
          .hero-banner .container {
            position: relative;
            z-index: 2;
            padding: 0 1rem;
          }
          .hero-banner h1 {
            font-size: 3rem;
            font-weight: bold;
            text-shadow: 1px 1px 3px #000;
            margin: 0;
          }
          .hero-banner p {
            font-size: 1.2rem;
            text-shadow: 1px 1px 2px #000;
            margin-top: 0.5rem;
          }

          @media (max-width: 768px) {
            .hero-banner h1 {
              font-size: 2rem;
            }
            .hero-banner p {
              font-size: 1rem;
            }
          }
        `}</style>
      </section>
    </>
  );
}
