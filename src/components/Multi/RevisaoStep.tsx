"use client";
import React, { useState } from "react";

interface RevisaoStepProps {
  form: any;
  aceitoTermos: boolean;
  setAceitoTermos: (aceito: boolean) => void;
}

export default function RevisaoStep({ form, aceitoTermos, setAceitoTermos }: RevisaoStepProps) {
  const [showDetails, setShowDetails] = useState(true);

  return (
    <div className="col-12">
      <h4 className="mb-3">Revisão final</h4>
      <p>Confira os dados preenchidos antes de enviar sua solicitação.</p>

      <button
        type="button"
        className="btn btn-sm btn-outline-primary mb-3"
        onClick={() => setShowDetails(!showDetails)}
        aria-expanded={showDetails}
        aria-controls="detalhes-revisao"
      >
        {showDetails ? "Ocultar detalhes" : "Mostrar detalhes"}
      </button>

      {showDetails && (
        <div
          id="detalhes-revisao"
          className="bg-white border rounded p-3 mb-4 shadow-sm"
          style={{ maxHeight: "320px", overflowY: "auto" }}
        >
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>Nome:</strong> {form.nome || "-"}
            </li>
            <li className="list-group-item">
              <strong>Email:</strong> {form.email || "-"}
            </li>
            <li className="list-group-item">
              <strong>Telefone:</strong> {form.telefone || "-"}
            </li>
            <li className="list-group-item">
              <strong>CPF:</strong> {form.cpf || "-"}
            </li>
            <li className="list-group-item">
              <strong>Tipo de Empresa:</strong> {form.tipoEmpresa || "-"}
            </li>
            <li className="list-group-item">
              <strong>CNAE:</strong> {form.cnae || "-"}
            </li>
            <li className="list-group-item">
              <strong>CEP:</strong> {form.cep || "-"}
            </li>
            <li className="list-group-item">
              <strong>Logradouro:</strong> {form.logradouro || "-"}, {form.numero || "-"} {form.complemento || ""}
            </li>
            <li className="list-group-item">
              <strong>Bairro:</strong> {form.bairro || "-"}
            </li>
            <li className="list-group-item">
              <strong>Cidade:</strong> {form.cidade || "-"}
            </li>
            <li className="list-group-item">
              <strong>Estado:</strong> {form.estado || "-"}
            </li>
            <li className="list-group-item">
              <strong>Referência:</strong> {form.referencia || "Nenhuma"}
            </li>
          </ul>
        </div>
      )}

      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="aceitoTermos"
          checked={aceitoTermos}
          onChange={(e) => setAceitoTermos(e.target.checked)}
          required
        />
        <label className="form-check-label" htmlFor="aceitoTermos" style={{ userSelect: "none" }}>
          Aceito os{" "}
          <a href="/termos" target="_blank" rel="noopener noreferrer" className="text-decoration-underline">
            Termos e Condições
          </a>{" "}
          e a{" "}
          <a href="/privacidade" target="_blank" rel="noopener noreferrer" className="text-decoration-underline">
            Política de Privacidade
          </a>
          .
        </label>
      </div>
    </div>
  );
}
