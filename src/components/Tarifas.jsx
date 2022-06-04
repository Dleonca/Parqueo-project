import React from "react";
import "./css-components/section.css";

const Tarifas = () => {
  return (
    <div className="section">
      <section className="box-izq">
        <h2 className="title-section-izq">Administrador de Tarifas</h2>
        <form action="#" className="form-section">
          <label htmlFor="select-t" className="label-form-section">
            Tipo de Transporte
          </label>
          <select className="select-type" name="select-t">
            <option value="value1">CARRO</option>
            <option value="value2">MOTOCICLETA</option>
            <option value="value3">BISICLETA</option>
          </select>
          <label htmlFor="num-section-form" className="label-form-section">Tarifa por Minuto</label>
        <input className="input-number"type="number" name="num-section-form" id="section" min="1" pattern="^[0-9]+"/>
        <label htmlFor="num-section-form" className="label-form-section">Tarifa por Hora</label>
        <input className="input-number"type="number" name="num-section-form" id="section" min="1" pattern="^[0-9]+"/>
        <button className="btn-section-form" type="submit">Agregar</button>
        </form>
      </section>
      <section className="box-der"></section>
    </div>
  );
};

export default Tarifas;
