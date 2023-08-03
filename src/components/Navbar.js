import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import BootstrapNavbar from "react-bootstrap/Navbar";
import BurgerLogo from "../assets/burgerlogo.png"

export const Navbar = () => {
  return (
    <div>
      <BootstrapNavbar expand="lg">
        <Container>
          <BootstrapNavbar.Brand href="#home">
            <img src={BurgerLogo} alt=""/>
          
          </BootstrapNavbar.Brand>
          <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
          <BootstrapNavbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Anasayfa</Nav.Link>
              <Nav.Link href="/menu">Menu</Nav.Link>
              <Nav.Link href="/about">Hakkımızda</Nav.Link>
              <Nav.Link href="/contact">İletişim</Nav.Link>
            </Nav>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>
    </div>
  );
};
