import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Navbar.css";

const MyNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="md">
            <Navbar.Brand href="/" className="mx-5">
                My Portfolio
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <NavDropdown title="Phase 1">
                        <NavDropdown.Item href="/week1" className="nav-link">
                            Basic Web Page
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/week2" className="nav-link">
                            Hobby Website
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/week4" className="nav-link">
                            JavaScript Quiz
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/week5" className="nav-link">
                            OOP Adventure Game
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/week7" className="nav-link">
                            Caesar Cipher
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Phase 2">
                        <NavDropdown.Item href="/week9" className="nav-link">
                            Calculator
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/week10" className="nav-link">
                            Noteable
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/week11" className="nav-link">
                            What To Do
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/week12" className="nav-link">
                            Weather Watch
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/week13" className="nav-link">
                            Book List API
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/week14" className="nav-link">
                            Eventful
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MyNavbar;
