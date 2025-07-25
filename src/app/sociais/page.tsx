"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaShareAlt, FaDonate, FaInfoCircle } from "react-icons/fa";
import projetos from "@/utils/projeto"; // Seu array de projetos

export default function ProjetosSociais() {
  return (
    <>
      {/* Você pode importar Navbar e Footer de seus componentes */}
      {/* <Navbar /> */}

      <header className="page-header">
        <h1>Projetos Sociais</h1>
        <p>
          Conheça as iniciativas que transformam vidas com o apoio da nossa
          contabilidade.
        </p>
      </header>

      <section className="container py-5">
        <h2 className="section-title text-center mb-5">Nossos Projetos</h2>
        <div className="row g-4">
          {projetos.map((projeto) => (
            <div key={projeto.id} className="col-12 col-sm-6 col-lg-4">
              <div className="card-project h-100 d-flex flex-column">
                <div className="image-wrapper">
                  <Image
                    src={projeto.imagem}
                    alt={projeto.titulo}
                    width={400}
                    height={220}
                    style={{ objectFit: "cover", width: "100%", height: "auto" }}
                    priority={false}
                  />
                </div>

                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{projeto.titulo}</h5>
                  <p className="card-text">{projeto.descricao}</p>

                  <div className="card-icons mt-auto">
                    <Link href={`/projeto/${projeto.slug}`} passHref>
                      <a
                        title="Saiba mais"
                        className="icon-link icon-saiba-mais"
                        aria-label={`Saiba mais sobre ${projeto.titulo}`}
                      >
                        <FaInfoCircle />
                      </a>
                    </Link>

                    <a href="#" title="Compartilhar" className="icon-link icon-compartilhar" aria-label={`Compartilhar ${projeto.titulo}`}>
                      <FaShareAlt />
                    </a>

                    <a href="#" title="Doar" className="icon-link icon-doar" aria-label={`Doar para ${projeto.titulo}`}>
                      <FaDonate />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* <Footer /> */}

      <style jsx>{`
        .page-header {
          background: linear-gradient(135deg, #003a9b, #007bff);
          color: white;
          padding: 80px 20px;
          text-align: center;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }

        .section-title {
          color: #003a9b;
          font-weight: 800;
          font-size: 2.2rem;
        }

        .card-project {
          background: #ffffff;
          border-radius: 20px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 6px 24px rgba(0, 0, 0, 0.07);
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .card-project:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);
        }

        .image-wrapper {
          position: relative;
          width: 100%;
          height: 220px;
        }

        /* O next/image usa position absolute para ajustar, precisa do wrapper com height */

        .card-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .card-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: #003a9b;
          margin-bottom: 0.75rem;
        }

        .card-text {
          color: #444;
          font-size: 0.95rem;
          flex-grow: 1;
        }

        .card-icons {
          display: flex;
          justify-content: space-between;
          margin-top: 1rem;
        }

        .icon-link {
          font-size: 1.25rem;
          padding: 10px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.2s ease;
          color: white;
          cursor: pointer;
          user-select: none;
        }

        .icon-saiba-mais {
          background-color: #003a9b;
        }

        .icon-saiba-mais:hover,
        .icon-saiba-mais:focus {
          background-color: #002a75;
          outline: none;
        }

        .icon-compartilhar {
          background-color: #20c997;
        }

        .icon-compartilhar:hover,
        .icon-compartilhar:focus {
          background-color: #159f7f;
          outline: none;
        }

        .icon-doar {
          background-color: #ffc107;
          color: #212529;
        }

        .icon-doar:hover,
        .icon-doar:focus {
          background-color: #e0a800;
          outline: none;
        }

        @media (max-width: 767px) {
          .image-wrapper {
            height: 180px;
          }

          .card-title {
            font-size: 1.1rem;
          }

          .card-icons {
            justify-content: center;
            gap: 1rem;
          }

          .icon-link {
            font-size: 1.1rem;
            padding: 8px;
          }
        }
      `}</style>
    </>
  );
}
