"use client";

import { useState } from "react";
import Navbar from "@/components/menu/navbar";
import Footer from "@/components/Footer/footer";
import { cardsTodos } from "@/utils/cardsContabilidade";

const cardsPrincipais = cardsTodos.slice(0, 4);

export default function Contabilidade() {
  const [modalAberto, setModalAberto] = useState(false);

  return (
    <>
      <Navbar />
      <main className="container-pagina" role="main">
        <h1>📊 Serviços de Contabilidade</h1>
        <p className="intro">
          Soluções completas para o sucesso financeiro e legal da sua empresa, com transparência e segurança.
        </p>

        <section className="grid-cards" aria-label="Principais serviços">
          {cardsPrincipais.map(({ icon, titulo, descricao }, i) => (
            <article key={i} className="card">
              <div className="icon">{icon}</div>
              <h3>{titulo}</h3>
              <p>{descricao}</p>
            </article>
          ))}
        </section>

        <button
          className="btn-ver-todos"
          onClick={() => setModalAberto(true)}
          aria-haspopup="dialog"
          aria-expanded={modalAberto}
          aria-controls="modalTodosServicos"
        >
          Ver todos os serviços
        </button>
      </main>

      {modalAberto && (
        <div
          className="modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modalTitulo"
          id="modalTodosServicos"
          tabIndex={-1}
          onClick={() => setModalAberto(false)}
          onKeyDown={(e) => {
            if (e.key === "Escape") setModalAberto(false);
          }}
        >
          <div className="modal-conteudo" onClick={(e) => e.stopPropagation()}>
            <header>
              <h2 id="modalTitulo">Todos os Serviços de Contabilidade</h2>
              <button
                aria-label="Fechar modal"
                className="btn-fechar"
                onClick={() => setModalAberto(false)}
              >
                ×
              </button>
            </header>

            <section className="grid-modal-cards" aria-label="Lista completa dos serviços">
              {cardsTodos.map(({ icon, titulo, descricao, pontos }, i) => (
                <article key={i} className="card-modal">
                  <div className="icon">{icon}</div>
                  <h3>{titulo}</h3>
                  <p>{descricao}</p>
                  <ul>
                    {pontos.map((ponto, idx) => (
                      <li key={idx}>{ponto}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </section>
          </div>
        </div>
      )}

      <Footer />

      <style jsx>{`
        .container-pagina {
          max-width: 1100px;
          margin: 90px auto 60px;
          padding: 0 20px;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          color: #2c3e50;
        }

        h1 {
          font-size: 2.6rem;
          margin-bottom: 12px;
          text-align: center;
          font-weight: 700;
        }

        .intro {
          text-align: center;
          font-size: 1.15rem;
          margin-bottom: 40px;
          color: #555;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }

        .grid-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 25px;
          margin-bottom: 35px;
        }

        .card {
          background: #fff;
          padding: 25px;
          border-radius: 12px;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.07);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: default;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
        }

        .icon {
          margin-bottom: 15px;
        }

        .card h3 {
          font-size: 1.2rem;
          margin-bottom: 10px;
          color: #2c3e50;
        }

        .card p {
          font-size: 1rem;
          color: #555;
          line-height: 1.5;
        }

        .btn-ver-todos {
          display: block;
          margin: 0 auto 60px;
          padding: 14px 36px;
          font-size: 1.1rem;
          font-weight: 700;
          color: #fff;
          background-color: #3498db;
          border: none;
          border-radius: 30px;
          cursor: pointer;
          box-shadow: 0 6px 15px rgba(52, 152, 219, 0.5);
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
        }

        .btn-ver-todos:hover,
        .btn-ver-todos:focus {
          background-color: #2980b9;
          box-shadow: 0 8px 20px rgba(41, 128, 185, 0.7);
          outline: none;
        }

        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.65);
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 30px;
          z-index: 1100;
          overflow-y: auto;
        }

        .modal-conteudo {
          background: #fff;
          max-width: 960px;
          width: 100%;
          max-height: 85vh;
          border-radius: 12px;
          padding: 30px 40px 40px;
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
          position: relative;
          overflow-y: auto;
        }

        .modal-conteudo header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }

        .modal-conteudo h2 {
          font-size: 1.9rem;
          margin: 0;
          color: #2c3e50;
        }

        .btn-fechar {
          background: transparent;
          border: none;
          font-size: 2.6rem;
          line-height: 1;
          cursor: pointer;
          color: #3498db;
          transition: color 0.3s ease;
        }

        .btn-fechar:hover,
        .btn-fechar:focus {
          color: #2980b9;
          outline: none;
        }

        .grid-modal-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 28px;
        }

        .card-modal {
          background: #f9fbfd;
          padding: 22px 20px 28px;
          border-radius: 10px;
          box-shadow: 0 3px 12px rgba(0, 0, 0, 0.06);
          color: #34495e;
          display: flex;
          flex-direction: column;
        }

        .card-modal .icon {
          margin-bottom: 18px;
        }

        .card-modal h3 {
          margin-bottom: 12px;
          font-size: 1.25rem;
        }

        .card-modal p {
          flex-grow: 1;
          margin-bottom: 12px;
          font-size: 1rem;
          color: #555;
          line-height: 1.5;
        }

        .card-modal ul {
          list-style: inside disc;
          color: #666;
          font-size: 0.95rem;
          padding-left: 12px;
          margin: 0;
        }

        .card-modal ul li {
          margin-bottom: 6px;
        }

        /* Responsividade */
        @media (max-width: 768px) {
          .container-pagina {
            margin: 100px 15px 60px;
          }

          .grid-cards {
            grid-template-columns: 1fr 1fr;
            gap: 20px;
          }

          .grid-modal-cards {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .grid-cards {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
