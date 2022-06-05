import React from "react";
import "./css-components/registro.css";

const RegistroIngreso = () => {
 

  return (
    <div className="sectionRegistro">
      <form action="#" className="formRegistro">
        <div className="rowForm">
          <div className="colForm">
            <label htmlFor="select-t" className="labelRegistro">
              Tipo Transporte
            </label>
            <select className="inputRegistro" name="select-t">
              <option value="value1">CARRO</option>
              <option value="value2">MOTOCICLETA</option>
              <option value="value3">BISICLETA</option>
            </select>
          </div>
          <div className="colForm">
            <label htmlFor="placa-id" className="labelRegistro">
              Placa
            </label>
            <input
              name="placa-id"
              className="inputRegistro"
              type="text"
              pattern="[A-Z][0-9]"
            />
          </div>
        </div>
        <div className="rowForm">
          <div className="colForm">
            <label htmlFor="select-letra-seccion" className="labelRegistro">
              Letra Seccion
            </label>
            <select
              className="inputRegistro"
              name="select-letra-seccion"
            ></select>
          </div>
          <div className="colForm">
            <label htmlFor="select-num-seccion" className="labelRegistro">
              Numero Seccion
            </label>
            <select
              className="inputRegistro"
              name="select-num-seccion"
            ></select>
          </div>
        </div>
        <div className="rowForm">
          <div className="colForm">
            <label htmlFor="nit-propietario" className="labelRegistro">
              NIT Propietario
            </label>
            <input
              name="nit-propietario"
              className="inputRegistro"
              type="number"
              min="1"
              pattern="^[0-9]+"
            />
          </div>
          <div className="colForm">
            <label htmlFor="nombres" className="labelRegistro">
              Nombres
            </label>
            <input name="apellidos" className="inputRegistro" type="text" />
          </div>
        </div>
        <div className="rowForm">
          <div className="colForm">
            <label htmlFor="placa-id" className="labelRegistro">
              Apellidos
            </label>
            <input name="apellidos" className="inputRegistro" type="text" />
          </div>
          <div className="colForm">
            <label htmlFor="celular" className="labelRegistro">
              Celular
            </label>
            <input
              name="celular"
              className="inputRegistro"
              type="number"
              min="1"
              pattern="^[0-9]+"
            />
          </div>
        </div>
        <div className="rowForm">
          <div className="colForm">
            <label htmlFor="date-ingreso" className="labelRegistro">
              Fecha Ingreso
            </label>
            <input
              className="inputRegistro"
              type="date"
              name="date-ingreso"
              id="date-ingreso"
            />
          </div>
          <div className="colForm">
            <label htmlFor="time-ingreso" className="labelRegistro">
              Hora Ingreso
            </label>
            <input
              className="inputRegistro"
              type="time"
              name="time-ingreso"
              id="time-ingreso"
            />
          </div>
        </div>
        <div className="rowForm">
          <div className="colForm">
            <button className="btn-registro-form">Registrar Ingreso</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegistroIngreso;
