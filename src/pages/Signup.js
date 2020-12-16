import React, { Component } from "react";
import logo from "../assets/img/logo-blanja.svg";
import axios from "axios";

import "./login.css";
import { LoginP } from "../components/styled/Login-styled";

export default class Signup extends Component {
  handleSubmit = (e) => {
    const data = {
      user_name: this.name,
      email: this.email,
      phone_num: this.phoneNumber,
      store_name: this.storeName,
      user_password: this.password,
      level_id: 2,
    };
    axios
      .post("http://localhost:8000/auth/signup", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    this.props.history.push("/login");

    console.log(data);
  };
  render() {
    return (
      <div className="login-body">
        <main className="login-main">
          <div className="login-logo">
            <img src={logo} alt="" />
            <LoginP id="login-logo-p" className=".login-logo-p">
              Blanja
            </LoginP>
          </div>
          <p className="login-p">Please sign up with your account</p>
          <div className="login-button-wrap">
            <button type="button" className="button-login button-customer">
              Custommer
            </button>
            <button type="button" className="button-login button-seller">
              Seller
            </button>
          </div>
          <form action="#" className="login-form" onSubmit={this.handleSubmit}>
            <input
              className="login-input"
              type="text"
              id="input-email"
              placeholder="Name"
              onChange={(e) => (this.name = e.target.value)}
            />
            <input
              className="login-input"
              type="email"
              placeholder="Email"
              onChange={(e) => (this.email = e.target.value)}
            />
            <input
              className="login-input"
              type="text"
              //pattern="[0-9]"
              placeholder="Phone number"
              onChange={(e) => (this.phoneNumber = e.target.value)}
            />
            <input
              className="login-input"
              type="text"
              placeholder="store name"
              onChange={(e) => (this.storeName = e.target.value)}
            />
            <input
              className="login-input"
              type="password"
              placeholder="Password"
              onChange={(e) => (this.password = e.target.value)}
            />
            <a href="resetpassword" id="link">
              Forgot Password?
            </a>
            <button className="button-login login-button-primary">
              PRIMARY
            </button>
            <p id="form-p">
              Already have a Tokopedia account?
              <a id="link" href="login">
                {" "}
                Login
              </a>
            </p>
          </form>
        </main>
      </div>
    );
  }
}

// {
//   /* <a className="login-button-primary-a" href="/">
// PRIMARY
// </a> */
// }
