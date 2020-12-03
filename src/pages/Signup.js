import React from 'react';
import logo from '../assets/img/logo-blanja.svg';

import './login.css';
import { LoginP } from "../components/styled/Login-styled";

export default function Signup() {
  return (
    <body className="login-body">
      <main className="login-main">
        <div className="login-logo">
          <img src={logo} alt=""/><LoginP id="login-logo-p" className=".login-logo-p">Blanja</LoginP>
        </div>
        <p className="login-p">Please sign up with your account</p>
        <div className="login-button-wrap">
          <button type="button" className="button-login button-customer">Custommer</button>
          <button type="button" className="button-login button-seller">Seller</button>
        </div>
        <form action="#" className="login-form">
          <input className="login-input" type="text" id="input-email" placeholder="Name"/>
          <input className="login-input" type="email" placeholder="Email"/>
          <input className="login-input" type="text" pattern="[0-9]" placeholder="Phone number"/>
          <input className="login-input" type="password" placeholder="store name"/>
          <input className="login-input" type="password" placeholder="Password"/>
          <a href="resetpassword" id="link">Forgot Password?</a>
          <button type="button" className="button-login login-button-primary"><a className="login-button-primary-a" href="/">PRIMARY</a></button>
          <p id="form-p">Already have a Tokopedia account?<a id="link"  href="login"> Login</a></p>
        </form>
      </main>
    </body>

  )
}