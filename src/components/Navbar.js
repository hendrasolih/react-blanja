import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { AiFillFileAdd } from "react-icons/ai";
import axios from "axios";

import { connect } from "react-redux";

import {
  Navbar,
  Form,
  FormControl,
  Button,
  Image,
  Modal,
} from "react-bootstrap";
import logo from "../assets/img/logo-blanja.svg";
import iconFunnel from "../assets/img/icon-funnel.svg";
import iconSearch from "../assets/img/icon-search.svg";
import iconCart from "../assets/img/icon-cart.svg";
import "./navbar.css";
import {
  ColorWhite,
  ColorBlack,
  ColorThree,
  ColorFour,
  ColorFive,
  ColorSix,
  Size,
  SizePicked,
  Category,
  CategoryPicked,
  ModalButton,
  ModalButtonPicked,
} from "../components/styled/Modal";

const urlLogout = "http://localhost:8000/auth/logout";

function NavbarPage(props) {
  const [show, setShow] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { dispatch } = props;

  const logout = () => {
    const config = {
      headers: {
        "x-access-token": "Bearer " + localStorage.getItem("token"),
      },
    };
    const data = "";
    axios
      .post(urlLogout, data, config)
      .then((res) => {
        console.log(res);
        dispatch({ type: "LOGOUT" });
        localStorage.setItem("token", "");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Navbar bg="white" expand="sm" sticky="top" className="navbar">
        <Navbar.Brand href="/">
          <Link to="/">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
          </Link>
          Blanja
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" expand="lg" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form inline className="form">
            <div className="control">
              <FormControl
                type="search"
                placeholder={props.placeholder}
                onChange={props.handleChange}
                className="w-100"
              />
              <Image src={iconSearch} className="iconSearch" />
            </div>
            <Button
              onClick={handleShow}
              variant="outline-white"
              className="mr-auto"
            >
              <Image src={iconFunnel} className="funnel" />
            </Button>
            <Button variant="outline-white" className="btn-cart mr-3">
              <Link to="/mybag">
                <Image src={iconCart} className="cart" />
              </Link>
            </Button>
            {props.auth.isLogin ? (
              <Button
                variant="outline-success"
                className="btn-login mr-3 ml-2"
                onClick={logout}
              >
                <Link style={{ color: "white" }} to="/login">
                  Logout
                </Link>
              </Button>
            ) : (
              <>
                <Button
                  variant="outline-success"
                  className="btn-login mr-3 ml-2"
                >
                  <Link style={{ color: "white" }} to="/login">
                    Login
                  </Link>
                </Button>
                <Button variant="outline-success" className="btn-login">
                  <Link style={{ color: "white" }} to="/signup">
                    Signup
                  </Link>
                </Button>
              </>
            )}
          </Form>
        </Navbar.Collapse>
      </Navbar>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Filter</Modal.Title>
        </Modal.Header>
        <Modal.Header>
          <Modal.Title className="ml-6">Color</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex">
            <ColorBlack className="mr-3"></ColorBlack>
            <ColorWhite className="mr-3"></ColorWhite>
            <ColorThree className="mr-3"></ColorThree>
            <ColorFour className="mr-3 "></ColorFour>
            <ColorFive className="mr-3 "></ColorFive>
            <ColorSix className="mr-3 "></ColorSix>
          </div>
        </Modal.Body>
        <Modal.Header>
          <Modal.Title className="ml-6">Size</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex">
            <Size className="mr-3">X</Size>
            <SizePicked className="mr-3">S</SizePicked>
            <SizePicked className="mr-3">M</SizePicked>
            <Size className="mr-3">L</Size>
            <Size className="mr-3">XL</Size>
          </div>
        </Modal.Body>
        <Modal.Header>
          <Modal.Title className="ml-6">Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex">
            <CategoryPicked className="mr-3">All</CategoryPicked>
            <Category className="mr-3">Women</Category>
            <Category className="mr-3">Men</Category>
          </div>
          <div className="d-flex">
            <Category className="mr-3 mt-2">Boys</Category>
            <Category className="mr-3 mt-2">Girls</Category>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex justify-content-center">
            <ModalButton className="discard mr-3" onClick={handleClose}>
              discard
            </ModalButton>
            <ModalButtonPicked className="discard mr-4" onClick={handleClose}>
              apply
            </ModalButtonPicked>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  };
};

export default connect(mapStateToProps)(NavbarPage);
