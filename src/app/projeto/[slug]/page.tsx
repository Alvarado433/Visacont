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
import { useState, useEffect, JSX } from "react";

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

  const handleMouseLeave = () => setHoverSide(null);
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

          <button className="btn-doar" aria-label="Quero doar ou participar do projeto">
            Quero Doar / Participar
          </button>
        </section>

        {/* Depoimentos */}
        <section className="depoimentos" aria-label="Depoimentos dos participantes">
          <h2>Depoimentos</h2>
          <div className="depoimento-card">
            <Image
              src={projeto.depoimentos[depoIndex].foto}
              alt={projeto.depoimentos[depoIndex].nome}
              width={80}
              height={80}
              className="img-depoimento"
              draggable={false}
              loading="lazy"
            />
            <div>
              <p className="texto">
                &quot;{projeto.depoimentos[depoIndex].texto}&quot;
              </p>
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
    </>
  );
}
