import React from "react";
import logo from "../IconParqueo.ico";
import "./css-components/login.css";
const login = () => {
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
          <form action="#" class="formLogin">
            <div>
            <label htmlFor="email" className="titleInputlogin">Email</label>
            <input
              class="inputLogin"
              type="email"
              name="email"
              id="emailAdmin"
            />
            </div>
            <div>
             <label htmlFor="pass" className="titleInputlogin">Password</label>
            <input
              class="inputLogin"
              type="password"
              name="pass"
              id="passAdmin"
            />
            </div>
            <button class="buttonLogin">Log In</button>
          </form>
        </div>
      </div>
      </div>
    </div>
  );
};

export default login;
