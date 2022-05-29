import React from 'react'
import logo from "../IconParqueo.ico";
import "./css-components/header.css";

const Header = () => {

  return (
      <header className="headPrincipal">
         <div className="TitleHead">
           <img src={logo} className="logoPrincipal" alt="logo" />
           <a href="" className="titlePrincipal">PARQUEO</a>
         </div>
         <div className="navPrincipal">
             <li className="listHead">
                 <ul className='list-item'><a href="#" className="item-nav"> Inicio</a></ul>
                 <ul className='list-item'><a href="#" className="item-nav"> Seccion</a></ul>
                 <ul className='list-item'><a href="#" className="item-nav"> Tarifa</a></ul>
                 <ul className='list-item'><a href="#" className="item-nav"> Registro</a></ul>
                 <ul className='list-item'><a href="#" className="item-nav"> config</a></ul>
             </li>
         </div>
         <div className="optionReg">
             <li className="listReg">
                 <ul></ul>
             </li>
         </div>
      </header>
  )
}

export default Header