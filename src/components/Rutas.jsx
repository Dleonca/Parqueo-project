import React from 'react'
import '../App.css';
import Header from './Header'
import Inicio from './Inicio'
import Section from './Section'
import Tarifas from './Tarifas'
import RegistroIngreso from './RegistroIngreso'
import  {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom'
import {auth} from '../firebase'
import {withRouter} from 'react-router-dom'

function Rutas(props) {
    const [user, setUser] = React.useState(null)

    React.useEffect(() =>{
        if (auth.currentUser) {
            console.log('existe usuario')
            setUser(auth.currentUser)
        }else{
            console('no existe usuario')
            props.history.push('/login')
        }
    }, [props.history])


  return (
    <Router>
    <div className="container">
      <Header firebaseUser = {props.firebaseUser} />
      <Switch>
        <Route path="/inicio"exact>
          <Inicio />
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
      </Switch>
    </div>
  </Router>
  )
}

export default withRouter(Rutas);