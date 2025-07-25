"use client";
import React from "react";

interface EnderecoStepProps {
  cep: string;
  cidade: string;
  estado: string;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  referencia: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCepBlur: () => void;
}

export default function EnderecoStep({
  cep,
  cidade,
  estado,
  logradouro,
  numero,
  complemento,
  bairro,
  referencia,
  onChange,
  onCepBlur,
}: EnderecoStepProps) {
  return (
    <>
      <div className="col-md-4">
        <label className="form-label">CEP</label>
        <input
          type="text"
          name="cep"
          className="form-control"
          value={cep}
          onChange={onChange}
          onBlur={onCepBlur}
          placeholder="00000-000"
          required
          maxLength={9}
        />
      </div>

      <div className="col-md-4">
        <label className="form-label">Logradouro (Rua, Av, etc.)</label>
        <input
          type="text"
          name="logradouro"
          className="form-control"
          value={logradouro}
          onChange={onChange}
          required
        />
      </div>

      <div className="col-md-2">
        <label className="form-label">Número</label>
        <input
          type="text"
          name="numero"
          className="form-control"
          value={numero}
          onChange={onChange}
          required
        />
      </div>

      <div className="col-md-2">
        <label className="form-label">Complemento</label>
        <input
          type="text"
          name="complemento"
          className="form-control"
          value={complemento}
          onChange={onChange}
          placeholder="Opcional"
        />
      </div>

      <div className="col-md-4">
        <label className="form-label">Bairro</label>
        <input
          type="text"
          name="bairro"
          className="form-control"
          value={bairro}
          onChange={onChange}
          required
        />
      </div>

      <div className="col-md-4">
        <label className="form-label">Cidade</label>
        <input type="text" name="cidade" className="form-control" value={cidade} readOnly />
      </div>

      <div className="col-md-4">
        <label className="form-label">Estado (UF)</label>
        <input type="text" name="estado" className="form-control" value={estado} readOnly />
      </div>

      <div className="col-md-12">
        <label className="form-label">Referência</label>
        <input
          type="text"
          name="referencia"
          className="form-control"
          value={referencia}
          onChange={onChange}
          placeholder="Ponto de referência (ex: próximo ao mercado)"
        />
      </div>
    </>
  );
}
