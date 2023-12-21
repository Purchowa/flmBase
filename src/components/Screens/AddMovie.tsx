import NavBar from "../NavBar/NavBar";
import { Container, Row, Col, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

export default function AddMovie() {

    return (
        <div>
            <NavBar />
            <Container className="bg-dark p-2" style={{ maxWidth: "40%", borderRadius: "10px" }}>
                <Row className="m-3 justify-content-center text-light pb-2">
                    <h2 className="text-center">Dodaj film do bazy</h2>
                </Row>
                <Form>
                    <Row className="m-3 justify-content-center">
                        <Col xs='8'>
                            <Form.Label className="text-white h5">Tytuł</Form.Label>
                            <Form.Control type="text" />
                        </Col>
                    </Row>
                    <Row className="m-3 justify-content-center">
                        <Col xs='8'>
                            <Form.Label className="text-white h5">Okładka</Form.Label>
                            <Form.Control type="text" placeholder="https://exmaple.jpg" />
                        </Col>
                    </Row>
                    <Row className="m-3 justify-content-center">
                        <Col xs='8'>
                            <Form.Label className="text-white h5">Opis</Form.Label>
                            <Form.Control as="textarea" rows={3} />
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