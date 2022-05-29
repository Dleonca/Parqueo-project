import React from "react";
import logo from "../IconParqueo.ico";
import "./css-components/login.css";
const login = () => {
  return (
    <div className="App">
      <div className="boxOpacity">
        <div className="sectionLogo">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="titleApp">PARQUEO</h1>
        </div>

        <div className="boxLogin">
          <form action="#" class="formLogin">
            <h2 className="titleInicio">Log In</h2>
            <input
              class="inputLogin"
              type="email"
              name="email"
              id="emailAdmin"
              placeholder="Email"
            />
            <input
              class="inputLogin"
              type="password"
              name="pass"
              id="passAdmin"
              placeholder="Password"
            />
            <button class="buttonLogin">Log In</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default login;
