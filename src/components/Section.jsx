import React from "react";
import "./css-components/section.css";
const Section = () => {
  return (
    <div className="section">
     <section className="box-izq"> <h2 className="title-section-izq">Administrador de Secciones de Parqueadero</h2><form action="#" className="form-section">
       <label htmlFor="select-t" className="label-form-section">Tipo de Transporte</label>
        <select className="select-type" name="select-t" >
          <option value="value1">CARRO</option>
          <option value="value2">MOTOCICLETA</option>
          <option value="value3">BISICLETA</option>
        </select>
        <label htmlFor="select-ts" className="label-form-section">Seccion por letra</label>
        <select className="select-type-section" name="select-ts">
          <option value="tipo-a">A</option>
          <option value="tipo-b">B</option>
          <option value="tipo-c">C</option>
          <option value="tipo-d">D</option>
          <option value="tipo-e">E</option>
          <option value="tipo-f">F</option>
          <option value="tipo-g">G</option>
          <option value="tipo-h">H</option>
          <option value="tipo-i">I</option>
          <option value="tipo-j">J</option>
          <option value="tipo-k">K</option>
          <option value="tipo-l">L</option>
          <option value="tipo-m">M</option>
          <option value="tipo-n">N</option>
          <option value="tipo-o">O</option>
          <option value="tipo-p">P</option>
          <option value="tipo-q">Q</option>
          <option value="tipo-r">R</option>
          <option value="tipo-s">S</option>
          <option value="tipo-t">T</option>
          <option value="tipo-u">U</option>
          <option value="tipo-v">V</option>
          <option value="tipo-w">W</option>
          <option value="tipo-x">X</option>
          <option value="tipo-y">Y</option>
          <option value="tipo-z">Z</option>
        </select>
        <label htmlFor="num-section-form" className="label-form-section">Numero de secciones por letra</label>
        <input className="input-number"type="number" name="num-section-form" id="section" min="1" pattern="^[0-9]+"/>
        <button className="btn-section-form" type="submit">Agregar</button>
      </form></section>
     <section className="box-der">
       <h2 className="contenido">Contenido</h2>
     </section>
     
    </div>
  );
};

export default Section;
