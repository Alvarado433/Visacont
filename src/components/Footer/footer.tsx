"use client";
import React, { useEffect, useState } from "react";
import routes from "@/utils/imagens";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaHome,
  FaInfoCircle,
  FaBriefcase,
  FaUsers,
  FaEnvelope,
  FaShieldAlt,
} from "react-icons/fa";

export default function Footer() {
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setShowScrollBtn(window.scrollY > 200);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="footer">
      <div className="footer-main container">
        {/* Logo */}
        <div className="footer-logo">
          <img src={routes.logo} alt="Visacont Logo" className="logo-img" />
        </div>

        {/* Menus */}
        <nav className="footer-menus">
          <ul className="footer-menu">
            <li><a href="#"><FaHome /> Início</a></li>
            <li><a href="#"><FaInfoCircle /> Sobre</a></li>
            <li><a href="#"><FaBriefcase /> Serviços</a></li>
          </ul>
          <ul className="footer-menu">
            <li><a href="#"><FaUsers /> Equipe</a></li>
            <li><a href="#"><FaEnvelope /> Contato</a></li>
            <li><a href="#"><FaShieldAlt /> Políticas</a></li>
          </ul>
        </nav>

        {/* Ícones sociais */}
        <div className="footer-social">
          <a href="#" className="social-icon" aria-label="Facebook" title="Facebook" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="#" className="social-icon" aria-label="Instagram" title="Instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="#" className="social-icon" aria-label="LinkedIn" title="LinkedIn" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
        </div>
      </div>

      {/* Rodapé inferior */}
      <div className="footer-bottom">
        <small>© 2025 Visacont Contabilidade. Todos os direitos reservados.</small>
      </div>

      {/* Botão voltar ao topo */}
      {showScrollBtn && (
        <button
          onClick={scrollToTop}
          aria-label="Voltar ao topo"
          title="Voltar ao topo"
          className="scrollTopBtn"
        >
          ↑
        </button>
      )}

      <style jsx>{`
        .footer {
          background: linear-gradient(135deg, #0a1f44, #04253a);
          color: #d1d5db;
          box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.3);
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          font-size: 1rem;
          padding: 3rem 1rem 2rem;
          position: relative;
        }

        .footer-main {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 3rem;
          flex-wrap: wrap;
        }

        /* Logo */
        .footer-logo {
          flex: 0 0 180px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .logo-img {
          max-height: 60px;
          width: auto;
          border-radius: 6px;
          filter: brightness(0) invert(1);
          cursor: pointer;
          transition: filter 0.3s ease;
          object-fit: contain;
        }
        .logo-img:hover {
          filter: brightness(0) invert(0.7);
        }

        /* Menus */
        .footer-menus {
          flex: 1 1 400px;
          display: flex;
          gap: 4rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .footer-menu {
          list-style: none;
          padding: 0;
          margin: 0;
          min-width: 120px;
        }

        .footer-menu li {
          margin-bottom: 1rem;
        }

        .footer-menu a {
          color: #d1d5db;
          font-weight: 500;
          text-decoration: none;
          font-size: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: color 0.3s ease, transform 0.2s ease;
          position: relative;
        }
        .footer-menu a::after {
          content: "";
          position: absolute;
          width: 0%;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: #0ea5e9;
          transition: width 0.3s ease;
        }
        .footer-menu a:hover,
        .footer-menu a:focus {
          color: #0ea5e9;
          transform: translateY(-2px);
        }
        .footer-menu a:hover::after,
        .footer-menu a:focus::after {
          width: 100%;
        }

        /* Social */
        .footer-social {
          flex: 0 0 150px;
          display: flex;
          gap: 1.5rem;
          justify-content: flex-end;
          align-items: center;
        }
        .social-icon {
          font-size: 1.8rem;
          color: #d1d5db;
          border: 2px solid transparent;
          border-radius: 50%;
          padding: 8px;
          transition: color 0.3s ease, border-color 0.3s ease,
            box-shadow 0.3s ease, transform 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          user-select: none;
        }
        .social-icon:hover,
        .social-icon:focus {
          color: #0ea5e9;
          border-color: #0ea5e9;
          box-shadow: 0 0 8px #0ea5e9;
          transform: scale(1.2);
          text-decoration: none;
        }

        /* Rodapé inferior */
        .footer-bottom {
          font-size: 0.875rem;
          color: #9ca3af;
          margin-top: 2rem;
          text-align: center;
        }

        /* Botão voltar ao topo */
        .scrollTopBtn {
          position: fixed;
          bottom: 30px;
          right: 30px;
          background-color: #0ea5e9;
          border: none;
          color: #fff;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          font-size: 1.6rem;
          cursor: pointer;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
          z-index: 9999;
          user-select: none;
          transition: background-color 0.3s ease;
        }
        .scrollTopBtn:hover {
          background-color: #0284c7;
        }

        /* Responsividade */
        @media (max-width: 992px) {
          .footer-main {
            justify-content: center;
            gap: 2rem;
          }
          .footer-logo {
            flex: 0 0 auto;
          }
          .footer-menus {
            gap: 3rem;
          }
          .footer-social {
            flex: 0 0 auto;
            justify-content: center;
          }
        }

        @media (max-width: 576px) {
          .footer-main {
            flex-direction: column;
            align-items: center;
            gap: 2rem;
          }
          .footer-logo {
            margin-bottom: 1rem;
          }
          .footer-menus {
            flex-direction: column;
            gap: 1.5rem;
          }
          .footer-menu {
            min-width: auto;
            text-align: center;
          }
          .footer-social {
            justify-content: center;
            gap: 1rem;
          }
        }
      `}</style>
    </footer>
  );
}
