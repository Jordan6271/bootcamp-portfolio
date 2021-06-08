import React, { Fragment } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

const MyNavbar = () => {
    return (
        <Fragment>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/" className="mx-5">
                    My Portfolio
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
                <Nav>
                    <NavDropdown title="Phase 1">
                        <NavDropdown.Item href="/week1">
                            Basic Web Page
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/week2">
                            Hobby Website
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/week4">
                            JavaScript Quiz
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/week5">
                            OOP Adventure Game
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/week7">
                            Caesar Cipher
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Phase 2">
                        <NavDropdown.Item href="/week9">
                            Calculator
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/week10">
                            Noteable
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/week11">
                            What To Do
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/week12">
                            Weather Watch
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/week13">
                            Book List API
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/week14">
                            Eventful
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/group-project">Group Project</Nav.Link>
                </Nav>
            </Navbar>
        </Fragment>
    );
};

export default MyNavbar;
