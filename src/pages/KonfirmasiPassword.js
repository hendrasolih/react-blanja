import React from 'react';
import logo from '../assets/img/logo-blanja.svg';

import './login.css';
import { LoginP } from "../components/styled/Login-styled";

export default function Login() {
  return (
    <body className="login-body">
      <main className="login-main">
        <div className="login-logo">
          <img src={logo} alt=""/><LoginP className=".login-logo-p">Blanja</LoginP>
        </div>
        <p className="login-p">Reset password</p>
        <p className="konfirmasi-pass-parf">You need to change your password to activate your account</p>
        <form action="#" className="login-form">
          <input className="login-input" type="password" id="input-email" placeholder="Password"/>
          <input className="login-input" type="password" id="input-email" placeholder="Confirmation New Password"/>
          <button type="button" className="button-login login-button-primary"><a className="login-button-primary-a" href="../index.html">PRIMARY</a></button>
          <p id="form-p">Don't have a Tokopedia account? <a id="link"  href="signup">Register</a></p>
        </form>
      </main>
    </body>

  )
}