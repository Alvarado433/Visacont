"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import routes from "@/utils/routes";

export default function Navbar() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }
  }, []);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark shadow fixed-top"
        style={{ backgroundColor: "#0047be" }}
      >
        <div className="container">
          <Link href={routes.home} legacyBehavior>
            <a className="navbar-brand d-flex align-items-center gap-2">
              <i className="bi bi-building"></i> Visacont
            </a>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNav"
            aria-controls="offcanvasNav"
            aria-label="Abrir menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse d-none d-lg-flex" id="navMenu">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
              <li className="nav-item">
                <Link href={routes.home} legacyBehavior>
                  <a className="nav-link d-flex align-items-center gap-1">
                    <i className="bi bi-house-door-fill"></i> Início
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href={routes.quemSomos} legacyBehavior>
                  <a className="nav-link d-flex align-items-center gap-1">
                    <i className="bi bi-info-circle"></i> Quem Somos
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href={routes.projetosSociais} legacyBehavior>
                  <a className="nav-link d-flex align-items-center gap-1">
                    <i className="bi bi-heart-fill"></i> Projetos Sociais
                  </a>
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle d-flex align-items-center gap-1"
                  id="servicosDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-briefcase-fill"></i> Serviços
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="servicosDropdown"
                  style={{
                    backgroundColor: "#0047be",
                    border: "none",
                    minWidth: "220px",
                    borderRadius: "8px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  <li>
                    <Link href={routes.abrirEmpresa} legacyBehavior>
                      <a className="dropdown-item" style={{ color: "#cce0ff", paddingLeft: "25px" }}>
                        Abertura de Empresa
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href={routes.contabilidade} legacyBehavior>
                      <a className="dropdown-item" style={{ color: "#cce0ff", paddingLeft: "25px" }}>
                        Contabilidade Empresarial
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" legacyBehavior>
                      <a className="dropdown-item" style={{ color: "#cce0ff", paddingLeft: "25px" }}>
                        Folha de Pagamento
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" legacyBehavior>
                      <a className="dropdown-item" style={{ color: "#cce0ff", paddingLeft: "25px" }}>
                        Consultoria Fiscal
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" legacyBehavior>
                      <a className="dropdown-item" style={{ color: "#cce0ff", paddingLeft: "25px" }}>
                        Planejamento Tributário
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" legacyBehavior>
                      <a className="dropdown-item" style={{ color: "#cce0ff", paddingLeft: "25px" }}>
                        Declaração de Imposto de Renda
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link href="#" legacyBehavior>
                  <a className="nav-link d-flex align-items-center gap-1">
                    <i className="bi bi-people-fill"></i> Clientes
                  </a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href={routes.contato} legacyBehavior>
                  <a className="nav-link d-flex align-items-center gap-1">
                    <i className="bi bi-envelope-fill"></i> Contato
                  </a>
                </Link>
              </li>

              <li className="nav-item ms-3">
                <a
                  href="#"
                  className="btn btn-orcamento"
                  role="button"
                  aria-label="Solicitar Orçamento"
                >
                  <i className="bi bi-envelope-paper"></i> Solicitar Orçamento
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Offcanvas para mobile */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex={-1}
        id="offcanvasNav"
        aria-labelledby="offcanvasNavLabel"
        style={{ backgroundColor: "#0047be", color: "white" }}
      >
        <div
          className="offcanvas-header"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.3)" }}
        >
          <h5
            className="offcanvas-title"
            id="offcanvasNavLabel"
            style={{ fontWeight: "bold" }}
          >
            <i className="bi bi-list"></i> Menu
          </h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Fechar"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href={routes.home} legacyBehavior>
                <a
                  className="nav-link"
                  style={{
                    color: "white",
                    fontSize: "1.1rem",
                    marginBottom: "8px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    paddingLeft: "10px",
                  }}
                >
                  <i className="bi bi-house-door-fill"></i> Início
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={routes.quemSomos} legacyBehavior>
                <a
                  className="nav-link"
                  style={{
                    color: "white",
                    fontSize: "1.1rem",
                    marginBottom: "8px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    paddingLeft: "10px",
                  }}
                >
                  <i className="bi bi-info-circle"></i> Quem Somos
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={routes.projetosSociais} legacyBehavior>
                <a
                  className="nav-link"
                  style={{
                    color: "white",
                    fontSize: "1.1rem",
                    marginBottom: "8px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    paddingLeft: "10px",
                  }}
                >
                  <i className="bi bi-heart-fill"></i> Projetos Sociais
                </a>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                id="offcanvasServicos"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{
                  color: "white",
                  fontSize: "1.1rem",
                  marginBottom: "8px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  paddingLeft: "10px",
                }}
              >
                <i className="bi bi-briefcase-fill"></i> Serviços
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="offcanvasServicos"
                style={{
                  backgroundColor: "#003a99",
                  border: "none",
                  marginLeft: "15px",
                  marginTop: "5px",
                  borderRadius: "6px",
                  boxShadow: "none",
                }}
              >
                <li>
                  <Link href={routes.abrirEmpresa} legacyBehavior>
                    <a className="dropdown-item" style={{ color: "#cce0ff", paddingLeft: "25px" }}>
                      Abertura de Empresa
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={routes.contabilidade} legacyBehavior>
                    <a className="dropdown-item" style={{ color: "#cce0ff", paddingLeft: "25px" }}>
                      Contabilidade Empresarial
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#" legacyBehavior>
                    <a className="dropdown-item" style={{ color: "#cce0ff", paddingLeft: "25px" }}>
                      Folha de Pagamento
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#" legacyBehavior>
                    <a className="dropdown-item" style={{ color: "#cce0ff", paddingLeft: "25px" }}>
                      Consultoria Fiscal
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#" legacyBehavior>
                    <a className="dropdown-item" style={{ color: "#cce0ff", paddingLeft: "25px" }}>
                      Planejamento Tributário
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#" legacyBehavior>
                    <a className="dropdown-item" style={{ color: "#cce0ff", paddingLeft: "25px" }}>
                      Declaração de Imposto de Renda
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link href="#" legacyBehavior>
                <a
                  className="nav-link"
                  style={{
                    color: "white",
                    fontSize: "1.1rem",
                    marginBottom: "8px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    paddingLeft: "10px",
                  }}
                >
                  <i className="bi bi-people-fill"></i> Clientes
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={routes.contato} legacyBehavior>
                <a
                  className="nav-link"
                  style={{
                    color: "white",
                    fontSize: "1.1rem",
                    marginBottom: "8px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    paddingLeft: "10px",
                  }}
                >
                  <i className="bi bi-envelope-fill"></i> Contato
                </a>
              </Link>
            </li>
            <li className="nav-item mt-3">
              <a
                href="#"
                className="btn btn-orcamento-offcanvas"
                role="button"
                aria-label="Solicitar Orçamento"
                style={{
                  backgroundColor: "#28a745",
                  color: "#e6f4ea",
                  fontWeight: "700",
                  borderRadius: "30px",
                  padding: "12px 0",
                  border: "none",
                  width: "100%",
                  textAlign: "center",
                  transition:
                    "background-color 0.4s ease, box-shadow 0.4s ease, color 0.4s ease",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  userSelect: "none",
                  cursor: "pointer",
                  textShadow: "0 1px 2px rgba(0,0,0,0.25)",
                }}
              >
                <i
                  className="bi bi-envelope-paper"
                  style={{ fontSize: "1.3rem", transform: "translateY(1px)" }}
                ></i>
                Solicitar Orçamento
              </a>
            </li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        /* Estilos globais do navbar */
        .navbar-brand,
        .nav-link,
        .dropdown-item {
          color: #ffffff !important;
        }
        .nav-link:hover,
        .dropdown-item:hover {
          color: #cce0ff !important;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 5px;
        }

        /* Dropdown itens */
        .dropdown-menu .dropdown-item {
          color: #ffffff;
          padding: 10px 20px;
        }
        .dropdown-menu .dropdown-item:hover {
          background-color: #003a99;
          color: #cce0ff;
        }

        /* Offcanvas scroll */
        .offcanvas-body {
          overflow-y: auto;
        }
        /* Remove sombra padrão do offcanvas para ficar limpa */
        .offcanvas {
          box-shadow: none;
        }
      `}</style>
    </>
  );
}
