import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
    return (
        <Navbar expand="lg">
            <Navbar.Brand>環境音</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <LinkContainer to="/" className="navbar-item">
                        <Nav.Link>首頁</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/play" className="navbar-item">
                        <Nav.Link>播放</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/record" className="navbar-item">
                        <Nav.Link>紀錄</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;