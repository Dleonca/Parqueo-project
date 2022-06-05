import React from 'react'
import '../App.css';
import Header from './Header'
import Inicio from './Inicio'
import Section from './Section'
import Tarifas from './Tarifas'
import RegistroIngreso from './RegistroIngreso'
import Configuracion from './Configuracion'
import  {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function Rutas() {
  return (
    <Router>
    <div className="container">
      <Header/>
      <Switch>
        <Route path="/inicio"exact>
          <Inicio/>
        </Route>
        <Route path="/section" >
           <Section/>
        </Route>
        <Route path="/tarifas" >
           <Tarifas/>
        </Route>
        <Route path="/registro" >
           <RegistroIngreso/>
        </Route>
        <Route path="/configuracion" >
           <Configuracion/>
        </Route>
      </Switch>
    </div>
  </Router>
  )
}

export default Rutas;