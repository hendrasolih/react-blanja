import React, { Component } from "react";
import logo from "../assets/img/logo-blanja.svg";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "./login.css";
import { LoginP } from "../components/styled/Login-styled";

class Login extends Component {
  handleSubmit = (e) => {
    const { dispatch, auth } = this.props;
    const data = {
      user_name: this.name,
      //userSeller_email: this.email,
      //userSeller_phone: this.phoneNumber,
      //userSeller_storeName: this.storeName,
      user_password: this.password,
    };
    //console.log(this.props);
    axios
      .post("http://localhost:8000/auth/login", data)
      .then((res) => {
        localStorage.setItem("token", res.data.data);
        res.headers["x-access-token"] = res.data.data;
        dispatch({ type: "LOGIN" });
        console.log(auth.isLogin);
        console.log(this.props.auth);
        console.log(res);
        console.log(res.headers);
      })
      .catch((err) => {
        console.log(err);
      });

    //console.log(data);
  };
  render() {
    const { auth } = this.props;
    return (
      <div className="login-body">
        {auth.isLogin && <Redirect to="/" />}
        <main className="login-main">
          <div className="login-logo">
            <img src={logo} alt="" />
            <LoginP className=".login-logo-p">Blanja</LoginP>
          </div>
          <p className="login-p">Please login with your account</p>
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
              placeholder="Email"
              onChange={(e) => (this.name = e.target.value)}
            />
            <input
              className="login-input"
              type="password"
              id="input-password"
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
              Don't have a Tokopedia account?{" "}
              <a id="link" href="signup">
                Register
              </a>
            </p>
          </form>
        </main>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  };
};

export default connect(mapStateToProps)(Login);
