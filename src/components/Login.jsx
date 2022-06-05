import React from "react";
import logo from "../IconParqueo.ico";
import "./css-components/login.css";
//import {auth, db} from '../firebase'


const Login = () => {
  const [email, setEmail]= React.useState('')
  const [pass, setPass]= React.useState('')
  const [error, setError] = React.useState(null)

  const procesarDatos = e => {
    e.preventDefault();
    if (!email.trim()) {
      setError('¡Ingresa tu Email!')
      return
    }
    if (!pass.trim()) {
      setError('¡Ingresa tu Password!')
      return
    }
    if (pass.length < 6) {
      setError('Ingresar contraseña con mas de 5 caracteres')
      return
    }
    setError(null)
  }

  return (
    <div className="App-login">
      <div className="sectionLeft">
      <div className="boxOpacity">
        <div className="sectionLogo">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="titleApp">PARQUEO</h1>
          <h2 className="titleInicio">Welcome User!</h2>
        </div>

        <div className="boxLogin">
          <form onSubmit={procesarDatos} class="formLogin">
            {
              error && (
                <div className="alert">
                  {error}
                </div>
              )
            }
            
            <label htmlFor="email" className="titleInputlogin">Email</label>
            <input
              class="inputLogin"
              type="email"
              name="email"
              id="emailAdmin"
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
          
           
             <label htmlFor="pass" className="titleInputlogin">Password</label>
            <input
              class="inputLogin"
              type="password"
              name="pass"
              id="passAdmin"
              onChange={e => setPass(e.target.value)}
              value={pass}
            />
            
            <button class="buttonLogin">Log In</button>
          </form>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Login;
