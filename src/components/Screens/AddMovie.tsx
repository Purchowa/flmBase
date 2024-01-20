import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import { MovieData } from "../Types/MovieDataTypes";
import { homePath } from "../../strings/AppPaths";
import { postMovie } from "../../api/movieDataApi";

export default function AddMovie() {
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();

    const refreshPage = () => {
        navigate(0);
    }

    const handleSubmit = (event: any) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        else {
            const movieData: MovieData = {
                title: event.target.title.value,
                image: event.target.image.value,
                content: event.target.content.value,
                genre: event.target.genre.value,
                productionYear: event.target.productionYear.value,
                rate: event.target.rate.value,
                id: ""
            }

            postMovie(movieData).then(() => {
                navigate(homePath);
                refreshPage();
            })
        }

        event.preventDefault();
        setValidated(true);
    };

    return (
        <div>
            <NavBar />
            <Container className="bg-dark p-2" style={{ maxWidth: "40%", borderRadius: "10px" }}>
                <Row className="m-3 justify-content-center text-light pb-2">
                    <h2 className="text-center">Dodaj film do bazy</h2>
                </Row>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="m-3 justify-content-center">
                        <Col xs='8'>
                            <Form.Label className="text-white h5">Tytuł</Form.Label>
                            <Form.Control required name='title' type="text" />
                        </Col>
                    </Row>
                    <Row className="m-3 justify-content-center">
                        <Col xs='8'>
                            <Form.Label className="text-white h5">Okładka</Form.Label>
                            <Form.Control required name='image' type="text" placeholder="https://exmaple.jpg" />
                        </Col>
                    </Row>
                    <Row className="m-3 justify-content-center">
                        <Col xs='8'>
                            <Form.Label className="text-white h5">Opis</Form.Label>
                            <Form.Control required name='content' as="textarea" rows={3} />
                        </Col>
                    </Row>
                    <Row className="m-3 justify-content-center">
                        <Col xs='8'>
                            <Form.Label className="text-white h5">Gatunek</Form.Label>
                            <Form.Control required name='genre' type="text" placeholder="Horror" />
                        </Col>
                    </Row>
                    <Row className="m-3 justify-content-center">
                        <Col xs='8'>
                            <Form.Label className="text-white h5">Rok produkcji</Form.Label>
                            <Form.Control required name='productionYear' type="text" />
                        </Col>
                    </Row>
                    <Row className="m-3 justify-content-center">
                        <Col xs='8'>
                            <Form.Label className="text-white h5">Ocena</Form.Label>
                            <Form.Control required name='rate' type="text" />
                        </Col>
                    </Row>
                    <Row className="m-3 justify-content-center">
                        <Col xs='auto'>
                            <Button variant="success" type="submit">Dodaj</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div >
    );
}