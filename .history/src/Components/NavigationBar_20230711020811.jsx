import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import { useContext } from "react";
import { GlobalContext } from "../Context/context";

function NavigationBar() {
  const { state, dispatch } = useContext(GlobalContext);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link className="navbar-brand " to="/">
          2HR.
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/AboutUs">
              About Us
            </Link>
            <Link className="nav-link" to="/ContactUs">
              Contact
            </Link>
            <Link className="nav-link" to="/products">
              Product
            </Link>
          </Nav>
        </Navbar.Collapse>

        <Link className=" me-4 nav-link" to="/SignUp">
          Sign Up
        </Link>
        <Link className="me-4 btn btn-dark" to="/Login">
          Login
        </Link>
        <Cart />
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
