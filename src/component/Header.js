import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Header() {
  const listCards = useSelector((store) => store.carts);
  const totalNumber = listCards.length;
  return (
    <Navbar bg="white" expand="lg">
      <Container fluid className="bg-white">
        <Navbar.Brand href="#" className="text-danger fw-bold bg-white">
          <NavLink to="/" className="nav-link bg-white">
            RIKKEI SHOP
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="bg-white">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink to="/" className="nav-link fw-bold bg-white">
              Home
            </NavLink>
          </Nav>
          <div className="d-flex cart ">
            <NavLink to="/cart" className="nav-link bg-white">
              <i className="fa-solid fa-cart-shopping fs-3 bg-white"></i>
            </NavLink>
            <span className="cart-number bg-danger text-white ">
              {totalNumber}
            </span>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
