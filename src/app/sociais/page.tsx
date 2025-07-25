"use client";

import Footer from "@/components/Footer/footer";
import Navbar from "@/components/menu/navbar";
import projetos from "@/utils/projeto";
import { FaShareAlt, FaDonate, FaInfoCircle } from "react-icons/fa";
import Link from "next/link";

export default function ProjetosSociais() {
  return (
    <>
      <Navbar />
      <div>
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
                  <img src={projeto.imagem} alt={projeto.titulo} />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{projeto.titulo}</h5>
                    <p className="card-text">{projeto.descricao}</p>
                    <div className="card-icons mt-auto">
                      <Link
                        href={`/projeto/${projeto.slug}`}
                        title="Saiba mais"
                        className="icon-link icon-saiba-mais"
                      >
                        <FaInfoCircle />
                      </Link>
                      <a
                        href="#"
                        title="Compartilhar"
                        className="icon-link icon-compartilhar"
                      >
                        <FaShareAlt />
                      </a>
                      <a
                        href="#"
                        title="Doar"
                        className="icon-link icon-doar"
                      >
                        <FaDonate />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

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
          }

          .card-project:hover {
            transform: translateY(-8px);
            box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);
          }

          .card-project img {
            width: 100%;
            height: 220px;
            object-fit: cover;
          }

          .card-body {
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            height: 100%;
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
          }

          .icon-saiba-mais {
            background-color: #003a9b;
          }

          .icon-saiba-mais:hover {
            background-color: #002a75;
          }

          .icon-compartilhar {
            background-color: #20c997;
          }

          .icon-compartilhar:hover {
            background-color: #159f7f;
          }

          .icon-doar {
            background-color: #ffc107;
            color: #212529;
          }

          .icon-doar:hover {
            background-color: #e0a800;
          }

          @media (max-width: 767px) {
            .card-project img {
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
      </div>
      <Footer />
    </>
  );
}
