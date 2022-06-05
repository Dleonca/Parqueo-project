import './App.css';
import React from 'react';
import Login from './components/Login'
import Rutas from './components/Rutas'
import  {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
/* */
    <Router>
      <div className="container">
        <Switch>
          <Route path="/" exact>
            <Login/>
          </Route>
          <Route path="/inicio" >
             <Rutas/>
          </Route>
        
        </Switch>
      </div>
    </Router>

  );
}

export default App;
