import styles from "./Navbar.module.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../CartWidget/CartWidget";
import { Outlet, Link } from "react-router-dom";
//import logoIcon from "../../assets/images/logo.png";
//src={logoIcon}

const NavbarMain = () => {
  return (
    <div>
      <Navbar expand="lg" className="navbar-dark" id={styles.colorNavbar}>
        <Container fluid>
          <Navbar.Brand href="#home">
            <Link to="/" className={styles.underlineNone}>
              <img
                src="https://res.cloudinary.com/dszdytbbc/image/upload/v1681154855/logo_umum2d.png"
                width="120"
                height="120"
                className="d-inline-block align-top"
                alt="HT ECommerce logo"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to="/" className={styles.underlineNone}>
                <Nav.Link href="/">Inicio</Nav.Link>
              </Link>
              <NavDropdown title="Categorias" id="navbarScrollingDropdown">
                <Link
                  to="/Categoria/Perifericos"
                  className={styles.underlineNone}
                >
                  <NavDropdown.Item href="#action3">
                    Informatica-Perifericos
                  </NavDropdown.Item>
                </Link>
                <NavDropdown.Item href="#action4">Software</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Oficina</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#action2">Contacto</Nav.Link>
              <Nav.Link href="#">Garantia</Nav.Link>
            </Nav>
            <CartWidget href="/cart" />
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Buscar..."
                className="me-2"
                aria-label="search"
              />
              <Button variant="outline-success">Confirmar</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default NavbarMain;
