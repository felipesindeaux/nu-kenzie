import { useState } from "react";
import "./index.css";

const Form = ({
  formValues,
  setFormValues,
  setRenderList,
  descValue,
  setDescValue,
  valorValue,
  setValorValue,
  tipoValue,
  setTipoValue,
}) => {
  const submit = (descValue, valorValue, tipoValue) => {
    const currentSubmit = {
      descValue: descValue,
      valorValue: valorValue,
      tipoValue: tipoValue,
    };
    setFormValues([...formValues, currentSubmit]);
  };

  return (
    <form
      onSubmit={(evt) => {
        evt.preventDefault();
        submit(descValue, valorValue, tipoValue);
      }}
    >
      <label>Descrição</label>
      <div className="exemplo">
        <input
          type="text"
          name="descricao"
          placeholder="Digite aqui sua descrição"
          onChange={(evt) => setDescValue(evt.target.value)}
        ></input>
        <span>Ex: Compra de roupas</span>
      </div>

      <div className="flex__inputs">
        <div className="div__valor">
          <label>Valor</label>
          <input
            name="valor"
            placeholder="R$"
            onChange={(evt) => setValorValue(evt.target.value)}
          ></input>
        </div>

        <div className="div__select">
          <label>Tipo de valor</label>
          <select
            defaultValue="Não especificado"
            name="tipo"
            onChange={(evt) => setTipoValue(evt.target.value)}
          >
            <option value="Não especificado">Escolha</option>
            <option value="Entrada">Entrada</option>
            <option value="Despesa">Despesa</option>
          </select>
        </div>
      </div>

      <button>Inserir valor</button>
    </form>
  );
};

export default Form;
