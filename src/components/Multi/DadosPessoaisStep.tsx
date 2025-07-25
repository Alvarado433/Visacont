"use client";
import React from "react";

interface DadosPessoaisStepProps {
  form: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export default function DadosPessoaisStep({ form, onChange }: DadosPessoaisStepProps) {
  return (
    <>
      <div className="col-md-6">
        <label className="form-label">Nome Completo</label>
        <input type="text" className="form-control" name="nome" value={form.nome} onChange={onChange} required />
      </div>

      <div className="col-md-6">
        <label className="form-label">E-mail</label>
        <input type="email" className="form-control" name="email" value={form.email} onChange={onChange} required />
      </div>

      <div className="col-md-6">
        <label className="form-label">Telefone</label>
        <input
          type="text"
          className="form-control"
          name="telefone"
          value={form.telefone}
          onChange={onChange}
          maxLength={15}
          placeholder="(99) 99999-9999"
          required
        />
      </div>

      <div className="col-md-6">
        <label className="form-label">CPF</label>
        <input
          type="text"
          className="form-control"
          name="cpf"
          value={form.cpf}
          onChange={onChange}
          maxLength={14}
          placeholder="000.000.000-00"
          required
        />
      </div>

      <div className="col-md-6">
        <label className="form-label">Tipo de Empresa</label>
        <select
          className="form-select"
          name="tipoEmpresa"
          value={form.tipoEmpresa}
          onChange={onChange}
          required
        >
          <option value="">Selecione</option>
          <option value="MEI">MEI</option>
          <option value="LTDA">LTDA</option>
          <option value="EI">Empresário Individual</option>
        </select>
      </div>

      <div className="col-md-6">
        <label className="form-label">CNAE Principal</label>
        <input
          type="text"
          className="form-control"
          name="cnae"
          value={form.cnae}
          onChange={onChange}
          placeholder="Ex: 6201-5/01 - Desenvolvimento de software"
          required
        />
      </div>
    </>
  );
}
