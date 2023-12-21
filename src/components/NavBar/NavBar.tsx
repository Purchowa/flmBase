import { Navbar, Nav } from 'react-bootstrap'
import { NavbarBrand, NavLink } from "react-bootstrap/esm";
import { NavLink as RouterNavLink } from 'react-router-dom';
import { useState } from 'react';

export default function NavBar() {
    const [isValidUser, setIsValidUser] = useState(true);

    return (
        <Navbar sticky="top" expand="lg" className="sticky p-2 justify-content-between background">
            <NavbarBrand className="ps-5" href="/">
                <img src="assets/film.png" alt="film" width="64" height="64" />
            </NavbarBrand>
            <Nav className="p-1" variant="pills" activeKey="1">
                <Nav.Item>
                    <NavLink eventKey="3" disabled={!isValidUser}>
                        <RouterNavLink className={`fs-5 fw-bolder align-items-baseline ${!isValidUser ? 'disabledText' : ''} text-decoration-none`} to='/add_movie'>Dodaj film</RouterNavLink>
                    </NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink eventKey="2">
                        <RouterNavLink className='fs-5 text-decoration-none fw-bolder align-items-baseline text-white' to='/sign_in'>Zaloguj</RouterNavLink>
                    </NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink eventKey="1" className="bg-warning fs-5 fw-bolder">
                        <RouterNavLink className="text-black text-decoration-none" to='/sign_up'>Dołącz</RouterNavLink>
                    </NavLink>
                </Nav.Item>
            </Nav>
        </Navbar>
    );
}