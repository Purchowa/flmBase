import { Navbar, Nav } from 'react-bootstrap'
import { NavbarBrand, NavLink } from "react-bootstrap/esm";
import { NavLink as RouterNavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { isExpired } from "react-jwt";
import { homePath, signInPath, registerPath, addMoviePath } from '../../strings/AppPaths';
import getUserToken from '../../utils/getUserToken';

export default function NavBar() {
    const [isUserValid, setIsUserValid] = useState<boolean>();

    useEffect(() => {
        if (isExpired(getUserToken())) {
            setIsUserValid(false);
        }
        else {
            setIsUserValid(true);
        }
    }, []);

    const handleLogout = () => {
        setIsUserValid(false);
        localStorage.removeItem('token');
    };

    const HandleFirstRender = () => {
        if (isUserValid === undefined) {
            return (<></>);
        }
        else if (isUserValid) {
            return (
                <Nav.Item>
                    <NavLink >
                        <RouterNavLink className='fs-5 text-decoration-none fw-bolder align-items-baseline text-white' to={homePath} onClick={handleLogout}>Wyloguj</RouterNavLink>
                    </NavLink>
                </Nav.Item>);
        }
        else {
            return (
                <>
                    <Nav.Item>
                        <NavLink >
                            <RouterNavLink className='fs-5 text-decoration-none fw-bolder align-items-baseline text-white' to={signInPath}>Zaloguj</RouterNavLink>
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink className="bg-warning fs-5 fw-bolder">
                            <RouterNavLink className="text-black text-decoration-none" to={registerPath}>Dołącz</RouterNavLink>
                        </NavLink>
                    </Nav.Item>
                </>
            );
        }
    }

    return (
        <Navbar sticky="top" expand="lg" className="sticky p-2 justify-content-between background">
            <NavbarBrand className="ps-5" href={homePath}>
                <img src="assets/film.png" alt="film" width="64" height="64" />
            </NavbarBrand>
            <Nav className="p-1" variant="pills" activeKey="1">
                <Nav.Item>
                    <NavLink disabled={!isUserValid}>
                        <RouterNavLink className={`fs-5 fw-bolder align-items-baseline ${!isUserValid ? 'disabledText' : ''} text-decoration-none`} to={addMoviePath}>Dodaj film</RouterNavLink>
                    </NavLink>
                </Nav.Item>
                <HandleFirstRender />
            </Nav>
        </Navbar>
    );
}