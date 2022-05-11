import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../features/user/userSlice";
import { useNavigate } from "react-router";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedUser = useSelector((state) => state.user.loggedUser);
  const HandleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <i className="bi bi-bank"></i> mericBANK
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              {loggedUser ? (
                <NavDropdown title={loggedUser.email} id="nav-dropdown">
                  <NavDropdown.Item
                    href={`/user/${loggedUser.id}`}
                    eventKey="4.1"
                  >
                    <i className="bi bi-person"></i> Profil
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/transfer" eventKey="4.2">
                    <i className="bi bi-arrow-left-right"></i> Havale
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/deposit" eventKey="4.2">
                    <i className="bi bi-cash"></i> Para Yatır
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/withdraw" eventKey="4.2">
                    <i className="bi bi-cash"></i> Para Çek
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={HandleLogout} eventKey="4.3">
                    <i className="bi bi-box-arrow-right"></i> Çıkış
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <div className="row">
                  <div className="col">
                    <Nav.Link href="/login">Giriş</Nav.Link>
                  </div>
                  <div className="col">
                    <Nav.Link href="/signup">Kaydol</Nav.Link>
                  </div>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};
export default Header;
