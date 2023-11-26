import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";
import NavLink from "react-bootstrap/esm/NavLink";

import Icon from "./Icon";
import AddMovie from './AddMovie';

export default function NavBar() {

    return (
        <Navbar sticky="top" expand="lg" className="sticky p-2 justify-content-between background">
            <NavbarBrand className="ps-5" href="#">
                <Icon/>
            </NavbarBrand>
            <Nav className="p-1" variant="pills" activeKey="1">
                <Nav.Item>
                    <AddMovie/>
                </Nav.Item>
                <Nav.Item>
                    <NavLink eventKey="2" className="fs-5 fw-bolder align-items-baseline text-white">Zaloguj</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink eventKey="1" className="bg-warning fs-5 fw-bolder">Dołącz</NavLink>
                </Nav.Item>
            </Nav>
        </Navbar>
    );
}