import { Container } from "react-bootstrap";
import NavBar from "../NavBar/NavBar";

export default function MovieDetails(){


    return (
        <div>
            <NavBar/>
            <Container className="d-flex bg-dark p-2 flex-row mt-5" style={{maxWidth: "80%", borderRadius: "10px"}}>
                <Container className="d-flex flex-column align-items-center">
                    <h3 className='text-white'>Title</h3>
                    <img src='https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp' width='80%' alt='picture'/>
                    <h5 className="text-white pt-2 align-self-center">Rating <span className="text-danger fw-bolder">9.8</span></h5>
                </Container>
                <Container className="d-flex flex-column justify-content-around">
                    <p className='text-white'>Opis jaki to ten film nie jest fajny Opis jaki to ten film nie jest fajny Opis jaki to ten film nie jest fajny</p>
                    <Container className="d-flex ps-0 pt-5">
                        <ul className="movieDescList">
                            <li>Reżyseria: <span className="text-white">Jakaś</span></li>
                            <li>Scenariusz: <span className="text-white">Fajny</span></li>
                            <li>Gatunek: <span className="text-white">Filmowy</span></li>
                            <li>Premiera: <span className="text-white">1.01.2001</span></li>
                        </ul>
                    </Container>
                </Container>
                
            </Container>
        </div>
    );
}