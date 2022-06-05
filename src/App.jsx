import './App.css';
import React from 'react';
import Login from './components/Login'
import Rutas from './components/Rutas'
import  {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {auth} from './firebase'

function App() {
  const[firebaseUser, setFirebaseUser] = React.useState(false)

  React.useEffect( () => {
    auth.onAuthStateChanged(user =>{
      console.log(user)
      if (user) {
        setFirebaseUser(user)   
      } else {
          setFirebaseUser(null)
      }

    })
  });
  return firebaseUser !== false ? (
/* */
    <Router>
      <div className="container">
        <Switch>
          <Route path="/" exact>
            <Login/>
          </Route>
          <Route path="/inicio" >
             <Rutas firebaseUser ={firebaseUser} />
          </Route>
        
        </Switch>
      </div>
    </Router>

  ): (
    <p>Cargando...</p>
  )
}

export default App;
