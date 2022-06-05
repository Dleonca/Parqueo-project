import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../IconParqueo.ico";
import "./css-components/header.css";
import {auth} from '../firebase'
import {withRouter} from 'react-router-dom'

const Header = (props) => {
  const cerrarSesion = () => {
    auth.signOut()
    .then( () =>{
      props.history.push('/')
    })

  }

  return (
    <header className="headPrincipal">
      <div className="TitleHead">
        <img src={logo} className="logoPrincipal" alt="logo" />
        <Link className="titlePrincipal" to="/rutas/Inicio">
          PARQUEO
        </Link>
      </div>
      <div className="navPrincipal">
        <li className="listHead">
          <ul className="list-item">
            <NavLink className="item-nav" to="/rutas/Inicio" exact>
              Inicio
            </NavLink>
          </ul>
          
          <ul className="list-item">
            <NavLink className="item-nav" to="/section">
              Seccion
            </NavLink>
          </ul>
          <ul className="list-item">
            <NavLink className="item-nav" to="/tarifas">
              Tarifa
            </NavLink>
          </ul>
          <ul className="list-item">
            <NavLink className="item-nav" to="/registro">
              Registro
            </NavLink>
          </ul>
          <ul className="list-item">
            <NavLink className="item-nav" to="/configuracion">
              Config
            </NavLink>
          </ul>
          <ul className="list-item">
            {
              props.firebaseUser !== null ? (
                <button className="item-nav" onClick= { () => cerrarSesion() } >
                  Log Out
                </button>
              ):(
                <NavLink to="/">
                  Login
                </NavLink>
              )
            }
          
          </ul>
        </li>
      </div>
      
    </header>
  );
};

export default withRouter(Header);
