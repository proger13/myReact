import React, { Component } from "react";
import { Navbar, Nav, FormControl, Container, Form, Button } from "react-bootstrap";
import logo from './logo192.png';
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contacts from "../Pages/Contacts";
import Blog from "../Pages/Blog";

export const Header = () => {
    const navigate = useNavigate()
    const goTo = (url) => {
        navigate(url)
    }

    return (
        <>
            <Navbar fixed="top" CollapseOnSelect expand="md" bg="dark" variant="dark" >
                <Container>
                    <Navbar.Brand href="/" >
                        <img
                            src={logo}
                            height="30"
                            width="30"
                            className="d-inline-bloc aline-top"
                            alt="logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle arie-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="mr-auto">
                            <Nav.Link onClick={() => goTo('/home')}> Home </Nav.Link>
                            <Nav.Link onClick={() => goTo('/about')}> About us </Nav.Link>
                            <Nav.Link onClick={() => goTo('/contacts')}> Contact </Nav.Link>
                            <Nav.Link onClick={() => goTo('/blog')}> Blog </Nav.Link>
                        </Nav>
                        <Form inline >
                            style={"margin-left: auto"}
                            <FormControl
                                type="text"
                                placeholder="Search"
                                className="mr-sm-2"
                            />
                            <Button margin-left="auto" variant="outline-info">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div style={{ marginTop: 110 }}>
                <Routes>
                    <Route exact path="/home" element={<Home />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/contacts" element={<Contacts />} />
                    <Route exact path="/blog" element={<Blog />} />
                </Routes>
            </div>
        </>
    )
}
