import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant='dark' expand="lg" style={{ position: "sticky", top: "0" }}>
                <Container>
                    <Link to="/" style={{ textDecoration: "none" }}><Navbar.Brand href="#home">Contact App</Navbar.Brand></Link>
                </Container>
            </Navbar>
        </>
    )
}

export default Header