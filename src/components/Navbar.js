import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import {Navbar, Form, FormControl, Button, Image, Modal} from 'react-bootstrap';
import logo from '../assets/img/logo-blanja.svg';
import iconFunnel from '../assets/img/icon-funnel.svg';
import iconSearch from '../assets/img/icon-search.svg';
import iconCart from '../assets/img/icon-cart.svg';
import './navbar.css';
import {ColorWhite, ColorBlack, ColorThree, ColorFour, ColorFive, ColorSix,
  Size, SizePicked, Category, CategoryPicked, ModalButton, ModalButtonPicked} from '../components/styled/Modal';

export default function NavbarPage() {
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
  return (
    <>
      <Navbar bg="white" expand="sm" sticky="top" className="navbar">
        <Navbar.Brand href="#home">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        Blanja
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" expand="md" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form inline className="form">
            <div className="control">
              <FormControl type="text" placeholder="Search" className="w-100"/>
              <Image src={iconSearch} className="iconSearch"/>
            </div>
            <Button onClick={handleShow} variant="outline-white" className="mr-auto">
              <Image src={iconFunnel} className="funnel"/>
            </Button>

            <Button variant="outline-white" className="btn-cart mr-3">
              <Image src={iconCart}  className="cart"/>
            </Button>

            <Button variant="outline-success" className="btn-login mr-3 ml-2">Login</Button>
            <Button variant="outline-success" className="btn-signup">Signup</Button>
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
