import NavLink from "react-bootstrap/esm/NavLink";

export default function AddMovie(){

    return(
        <NavLink eventKey="3" className="fs-5 fw-bolder align-items-baseline disabledText" disabled>
          Dodaj film
        </NavLink>
    );
}