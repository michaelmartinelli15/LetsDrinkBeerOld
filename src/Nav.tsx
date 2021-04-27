import React from "react";
import "./App.css";
import { Navbar, Nav } from "react-bootstrap";

interface NavProps {
    degeneracyLevel: string;
    beerCount: number;
}

const Navigation = ({ degeneracyLevel, beerCount }: NavProps): JSX.Element => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/#/beerTable">Lets Drink Beer</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/#/">Home</Nav.Link>
                    <Nav.Link href="/#/sendIt">Send It</Nav.Link>
                    <Nav.Link href="/#/degeneracyLevel">Degeneracy Level</Nav.Link>
                </Nav>
                <Navbar.Text id="degeneracy-text">
                    Degeneracy Level: {degeneracyLevel} | Lifetime Beer Count: {beerCount}
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;
