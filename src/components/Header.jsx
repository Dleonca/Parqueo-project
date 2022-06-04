import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../IconParqueo.ico";
import "./css-components/header.css";

const Header = () => {
  return (
    <header className="headPrincipal">
      <div className="TitleHead">
        <img src={logo} className="logoPrincipal" alt="logo" />
        <a className="titlePrincipal" href="/">
          PARQUEO
        </a>
      </div>
      <div className="navPrincipal">
        <li className="listHead">
          <ul className="list-item">
            <a className="item-nav" href="/">
              Inicio
            </a>
          </ul>
          
          <ul className="list-item">
            <a className="item-nav" href="/">
              Seccion
            </a>
          </ul>
          <ul className="list-item">
            <a className="item-nav" href="/">
              Tarifa
            </a>
          </ul>
          <ul className="list-item">
            <a className="item-nav" href="/">
              Registro
            </a>
          </ul>
          <ul className="list-item">
            <a className="item-nav" href="/">
              Config
            </a>
          </ul>
        </li>
      </div>
      
    </header>
  );
};

export default Header;
