import './App.css';
import React from 'react';
import Login from './components/Login'
/*
import Header from './components/Header'
import Inicio from './components/Inicio'
import Section from './components/Section'
import Tarifas from './components/Tarifas'
import RegistroIngreso from './components/RegistroIngreso'
import Configuracion from './components/Configuracion'
import  {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
*/
function App() {
  return (
  /*
    <Router>
      <div className="container">
        <Header/>
        <Switch>
          <Route path="/" exact>
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
  */
 
   <>
   <Login/>
   </>
  
  );
}

export default App;
