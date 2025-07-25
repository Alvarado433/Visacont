"use client";

import projetos from "@/utils/projeto";
import Navbar from "@/components/menu/navbar";
import Footer from "@/components/Footer/footer";
import Image from "next/image";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaUserFriends,
} from "react-icons/fa";
import { JSX, useState, useEffect } from "react";

interface Projeto {
  id: number;
  titulo: string;
  descricao: string;
  imagem: string;
  slug: string;
  imagensExtras: string[];
  dataEvento: string;
  localEvento: string;
  depoimentos: {
    nome: string;
    texto: string;
    foto: string;
  }[];
  contato: {
    telefone: string;
    email: string;
    redesSociais: { nome: string; url: string }[];
  };
  videoUrl: string | null;
}

interface PageProps {
  params: { slug: string | string[] };
}

export default function ProjetoDetalhes({ params }: PageProps) {
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const projeto = projetos.find((p) => p.slug === slug);

  const [depoIndex, setDepoIndex] = useState(0);
  const [imgIndex, setImgIndex] = useState(0);
  const [hoverSide, setHoverSide] = useState<"left" | "right" | null>(null);

  const imagens = [projeto?.imagem || "", ...(projeto?.imagensExtras || [])];

  useEffect(() => {
    if (!projeto) return;
    const interval = setInterval(() => {
      setImgIndex((i) => (i + 1) % imagens.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [imagens.length, projeto]);

  useEffect(() => {
    if (!projeto) return;
    const interval = setInterval(() => {
      setDepoIndex((i) => (i + 1) % projeto.depoimentos.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [projeto]);

  const prevImg = () => {
    setImgIndex((i) => (i === 0 ? imagens.length - 1 : i - 1));
  };
  const nextImg = () => {
    setImgIndex((i) => (i + 1) % imagens.length);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    if (x < rect.width / 2) {
      setHoverSide("left");
    } else {
      setHoverSide("right");
    }
  };
  const handleMouseLeave = () => {
    setHoverSide(null);
  };
  const handleClick = () => {
    if (hoverSide === "left") prevImg();
    else if (hoverSide === "right") nextImg();
  };

  if (!projeto) {
    return (
      <p
        style={{
          padding: "3rem",
          textAlign: "center",
          fontSize: "1.25rem",
          color: "#555",
          fontWeight: "600",
        }}
      >
        Projeto não encontrado.
      </p>
    );
  }

  const redesIconMap: Record<string, JSX.Element> = {
    Facebook: <FaFacebook />,
    Instagram: <FaInstagram />,
    YouTube: <FaYoutube />,
  };

  return (
    <>
      <Navbar />

      {/* Breadcrumb / Migalhas */}
      <nav aria-label="breadcrumb" className="breadcrumb-container">
        <ol className="breadcrumb-list">
          <li>
            <Link href="/">Início</Link>
          </li>
          <li>
            <Link href="/projetos">Projetos Sociais</Link>
          </li>
          <li aria-current="page">{projeto.titulo}</li>
        </ol>
      </nav>

      <main className="container" tabIndex={-1}>
        {/* Carrossel de imagens */}
        <section
          className="carrossel-imagens"
          aria-label="Imagens do projeto"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") prevImg();
            else if (e.key === "ArrowRight") nextImg();
          }}
          role="region"
          aria-roledescription="carrossel"
          aria-live="polite"
        >
          <div
            className={`imagem-principal-wrapper ${
              hoverSide ? `hover-${hoverSide}` : ""
            }`}
            aria-label={`Imagem ${imgIndex + 1} de ${imagens.length}`}
          >
            <Image
              src={imagens[imgIndex]}
              alt={`${projeto.titulo} - imagem ${imgIndex + 1}`}
              width={900}
              height={500}
              className="imagem-principal"
              priority
              draggable={false}
              sizes="(max-width: 768px) 100vw, 900px"
            />
            {hoverSide && (
              <div className={`overlay-hover ${hoverSide}`}>
                {hoverSide === "left" ? "‹" : "›"}
              </div>
            )}
          </div>
        </section>

        {/* Indicadores do carrossel */}
        <div className="indicadores" aria-label="Navegação de imagens">
          {imagens.map((_, i) => (
            <button
              key={i}
              className={`indicador ${i === imgIndex ? "ativo" : ""}`}
              onClick={() => setImgIndex(i)}
              aria-label={`Ir para imagem ${i + 1}`}
              type="button"
            />
          ))}
        </div>

        {/* Info e contato */}
        <section className="info">
          <h1>{projeto.titulo}</h1>
          <p>{projeto.descricao}</p>
          <div className="detalhes-evento">
            <p>
              <strong>Data do Evento: </strong> {projeto.dataEvento}
            </p>
            <p>
              <strong>Local: </strong> {projeto.localEvento}
            </p>
          </div>

          <div className="contato">
            <h3>Contato</h3>
            <p>
              <FaPhoneAlt /> {projeto.contato.telefone}
            </p>
            <p>
              <FaEnvelope /> {projeto.contato.email}
            </p>
            <div className="redes">
              {projeto.contato.redesSociais.map(({ nome, url }) => (
                <a
                  key={nome}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={nome}
                  className="rede-social"
                >
                  {redesIconMap[nome] || <FaUserFriends />}
                </a>
              ))}
            </div>
          </div>

          <button
            className="btn-doar"
            aria-label="Quero doar ou participar do projeto"
          >
            Quero Doar / Participar
          </button>
        </section>

        {/* Depoimentos */}
        <section
          className="depoimentos"
          aria-label="Depoimentos dos participantes"
        >
          <h2>Depoimentos</h2>
          <div className="depoimento-card">
            <img
              src={projeto.depoimentos[depoIndex].foto}
              alt={projeto.depoimentos[depoIndex].nome}
              loading="lazy"
              width={80}
              height={80}
              draggable={false}
            />
            <div>
              <p className="texto">"{projeto.depoimentos[depoIndex].texto}"</p>
              <p className="nome">— {projeto.depoimentos[depoIndex].nome}</p>
            </div>
          </div>
          {projeto.depoimentos.length > 1 && (
            <div className="depo-nav">
              <button
                onClick={() =>
                  setDepoIndex((i) =>
                    i === 0 ? projeto.depoimentos.length - 1 : i - 1
                  )
                }
                aria-label="Depoimento anterior"
                type="button"
              >
                ‹
              </button>
              <button
                onClick={() =>
                  setDepoIndex((i) => (i + 1) % projeto.depoimentos.length)
                }
                aria-label="Próximo depoimento"
                type="button"
              >
                ›
              </button>
            </div>
          )}
        </section>
      </main>

      <Footer />

      <style jsx>{`
        /* Container */
        .container {
          max-width: 960px;
          margin: 3rem auto 5rem;
          padding: 0 1.5rem;
          font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
            sans-serif;
          color: #212529;
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 10px 36px rgb(0 0 0 / 0.06);
          outline-offset: 6px;
        }

        /* Breadcrumb / Migalhas */
        .breadcrumb-container {
          background: #f9fafb;
          padding: 1rem 1.5rem;
          font-size: 1rem;
          color: #495057;
          font-weight: 600;
          border-radius: 8px;
          max-width: 960px;
          margin: 3.5rem auto 1rem; /* Espaço maior topo */
          box-shadow: 0 2px 8px rgb(0 0 0 / 0.08);
          user-select: none;
          position: relative;
          z-index: 10;
        }
        .breadcrumb-list {
          list-style: none;
          display: flex;
          gap: 0.7rem;
          flex-wrap: wrap;
          padding: 0;
          margin: 0;
          align-items: center;
        }
        .breadcrumb-list li {
          display: flex;
          align-items: center;
          color: #495057;
        }
        .breadcrumb-list li + li::before {
          content: "›";
          margin: 0 0.7rem;
          color: #adb5bd;
          font-weight: 700;
        }
        .breadcrumb-list a {
          color: #0d6efd;
          text-decoration: none; /* Remove underline */
          font-weight: 700;
          transition: color 0.25s ease;
        }
        .breadcrumb-list a:hover,
        .breadcrumb-list a:focus {
          color: #084298;
          outline: none;
          text-decoration: underline;
        }

        /* Carrossel */
        .carrossel-imagens {
          position: relative;
          max-width: 900px;
          margin: 0 auto 2.5rem;
          user-select: none;
          cursor: default;
          outline: none;
          border-radius: 16px;
          box-shadow: 0 14px 40px rgb(13 110 253 / 0.12);
          background-color: #f8f9fa;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .imagem-principal-wrapper {
          border-radius: 16px;
          overflow: hidden;
          width: 100%;
          max-width: 900px;
          position: relative;
          transition: box-shadow 0.3s ease;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 500px;
          background: #e9ecef;
        }
        .imagem-principal-wrapper.hover-left {
          cursor: w-resize;
          box-shadow: 0 14px 52px rgb(13 110 253 / 0.35);
        }
        .imagem-principal-wrapper.hover-right {
          cursor: e-resize;
          box-shadow: 0 14px 52px rgb(13 110 253 / 0.35);
        }
        .imagem-principal {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain !important; /* Mostrar imagem inteira */
          user-select: none;
          pointer-events: none;
          transition: transform 0.6s ease;
          will-change: transform;
          border-radius: 16px;
        }
        .overlay-hover {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          font-size: 4.8rem;
          color: rgba(13, 110, 253, 0.75);
          user-select: none;
          pointer-events: none;
          transition: color 0.3s ease;
          font-weight: 900;
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15);
        }
        .overlay-hover.left {
          left: 18px;
        }
        .overlay-hover.right {
          right: 18px;
        }

        /* Indicadores */
        .indicadores {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 3.5rem;
          user-select: none;
        }
        .indicador {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background-color: #dee2e6;
          border: 2px solid transparent;
          cursor: pointer;
          transition: background-color 0.3s ease, border-color 0.3s ease;
        }
        .indicador.ativo {
          background-color: #0d6efd;
          border-color: #084298;
        }
        .indicador:hover,
        .indicador:focus {
          background-color: #084298;
          outline: none;
        }

        /* Info */
        .info {
          margin-bottom: 4.5rem;
          color: #212529;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
          padding: 0 1rem;
        }
        .info h1 {
          font-weight: 800;
          font-size: 3rem;
          margin: 0 0 1.1rem;
          color: #0d3b66;
          line-height: 1.15;
          user-select: text;
        }
        .info p {
          font-size: 1.25rem;
          line-height: 1.75;
          margin: 0.7rem 0;
          color: #495057;
          user-select: text;
        }
        .detalhes-evento {
          display: flex;
          gap: 3rem;
          margin-top: 1.25rem;
          font-weight: 700;
          color: #212529cc;
          font-size: 1.15rem;
          user-select: text;
        }
        @media (max-width: 640px) {
          .detalhes-evento {
            flex-direction: column;
            gap: 0.7rem;
          }
        }

        /* Contato */
        .contato {
          margin-top: 3rem;
        }
        .contato h3 {
          margin-bottom: 1.1rem;
          color: #0d3b66;
          font-weight: 800;
          font-size: 1.6rem;
          user-select: text;
        }
        .contato p {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-weight: 600;
          margin: 0.4rem 0;
          color: #495057;
          font-size: 1.15rem;
          user-select: text;
        }
        .redes {
          margin-top: 1.1rem;
          display: flex;
          gap: 1.6rem;
        }
        .rede-social {
          font-size: 2.3rem;
          color: #0d6efd;
          transition: color 0.35s ease;
          user-select: none;
        }
        .rede-social:hover,
        .rede-social:focus {
          color: #084298;
          outline: none;
        }

        /* Botão Doar */
        .btn-doar {
          margin-top: 3rem;
          padding: 1.05rem 3rem;
          background: #0d6efd;
          border: none;
          border-radius: 50px;
          font-weight: 800;
          color: #fff;
          cursor: pointer;
          box-shadow: 0 12px 30px rgb(13 110 253 / 0.45);
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
          font-size: 1.35rem;
          user-select: none;
          display: inline-block;
        }
        .btn-doar:hover,
        .btn-doar:focus {
          background-color: #084298;
          box-shadow: 0 16px 48px rgb(8 66 152 / 0.6);
          outline: none;
        }

        /* Depoimentos */
        .depoimentos {
          max-width: 720px;
          margin: 0 auto 5rem;
          text-align: center;
          user-select: text;
        }
        .depoimentos h2 {
          color: #0d3b66;
          font-weight: 900;
          font-size: 2.6rem;
          margin-bottom: 2rem;
          user-select: text;
        }
        .depoimento-card {
          background: #f1f3f5;
          padding: 2.2rem 3.2rem;
          border-radius: 24px;
          display: flex;
          align-items: center;
          gap: 2.4rem;
          box-shadow: 0 8px 28px rgb(0 0 0 / 0.1);
          user-select: none;
          transition: box-shadow 0.35s ease;
          max-width: 700px;
          margin: 0 auto;
        }
        .depoimento-card:hover {
          box-shadow: 0 14px 40px rgb(0 0 0 / 0.14);
        }
        .depoimento-card img {
          border-radius: 50%;
          width: 90px;
          height: 90px;
          object-fit: cover;
          flex-shrink: 0;
          user-select: none;
          pointer-events: none;
          box-shadow: 0 3px 10px rgb(0 0 0 / 0.08);
        }
        .texto {
          font-style: italic;
          font-size: 1.2rem;
          color: #495057;
          margin: 0;
          line-height: 1.5;
          user-select: text;
        }
        .nome {
          margin-top: 0.8rem;
          font-weight: 700;
          color: #0d3b66;
          font-size: 1.05rem;
          user-select: text;
        }
        .depo-nav {
          margin-top: 1.8rem;
          user-select: none;
          display: flex;
          justify-content: center;
          gap: 1.6rem;
        }
        .depo-nav button {
          background: none;
          border: 2px solid #0d3b66;
          color: #0d3b66;
          font-size: 1.9rem;
          width: 48px;
          height: 48px;
          margin: 0;
          border-radius: 50%;
          cursor: pointer;
          transition: background-color 0.3s ease, color 0.3s ease;
          user-select: none;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
        }
        .depo-nav button:hover,
        .depo-nav button:focus {
          background-color: #084298;
          color: white;
          box-shadow: 0 8px 20px rgb(8 66 152 / 0.7);
          outline: none;
        }

        /* Responsividade geral */
        @media (max-width: 900px) {
          .container {
            margin: 2rem 1rem 4rem;
            padding: 1rem;
            border-radius: 10px;
          }
          .carrossel-imagens {
            max-width: 100%;
            margin-bottom: 1.5rem;
          }
          .imagem-principal-wrapper {
            border-radius: 12px;
            height: 280px;
          }
          .info {
            max-width: 100%;
            padding: 0;
          }
          .detalhes-evento {
            flex-direction: column;
            gap: 0.6rem;
          }
          .btn-doar {
            width: 100%;
            font-size: 1.3rem;
            padding: 1rem 1.5rem;
          }
          .depoimento-card {
            flex-direction: column;
            text-align: center;
            gap: 1.3rem;
            padding: 1.6rem 1.8rem;
            max-width: 100%;
          }
          .depoimento-card img {
            margin: 0 auto;
          }
          .depo-nav button {
            width: 40px;
            height: 40px;
            font-size: 1.4rem;
          }
          .breadcrumb-container {
            margin: 4.5rem 1rem 1rem;
            padding: 0.75rem 1rem;
            font-size: 0.9rem;
          }
        }
        @media (max-width: 480px) {
          .breadcrumb-list {
            gap: 0.4rem;
          }
          .breadcrumb-list li + li::before {
            margin: 0 0.3rem;
          }
          .detalhes-evento {
            font-size: 1rem;
          }
          .btn-doar {
            font-size: 1.15rem;
            padding: 0.85rem 1.5rem;
          }
        }
      `}</style>
    </>
  );
}
