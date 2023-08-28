import { useState } from "react";

import Button from "./Button";

import "./ImcCalc.css";

const ImcCalc = ({ action }) => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const clearForm = (e) => {
    e.preventDefault();
    setHeight("");
    setWeight("");
  };

  const validDigits = (text) => {
    return text.replace(/[^0-9,]/g, "");
  };

  const handleHeightChange = (e) => {
    const updateValidDigits = validDigits(e.target.value);
    setHeight(updateValidDigits);
  };

  const handleWeightChange = (e) => {
    const updateValidDigits = validDigits(e.target.value);
    setWeight(updateValidDigits);
  };

  return (
    <div>
      <div id="calc-container">
        <h2>Calculador IMC</h2>
        <form id="imc-form">
          <div className="form-control">
            <label htmlFor="height">Altura:</label>
            <input
              type="text"
              name="height"
              id="height"
              placeholder="Exemplo: 1,75"
              onChange={(e) => handleHeightChange(e)}
              value={height}
              autoFocus
            />
          </div>
          <div className="form-control">
            <label htmlFor="weight">Peso:</label>
            <input
              type="text"
              name="weight"
              id="weight"
              placeholder="Exemplo: 70,5"
              onChange={(e) => handleWeightChange(e)}
              value={weight}
            />
          </div>
          <div className="action-control">
            <Button
              id="calc-btn"
              text="Calcular"
              action={(e) => action(e, height, weight)}
            />
            <Button id="clear-btn" text="Limpar" action={clearForm} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ImcCalc;
