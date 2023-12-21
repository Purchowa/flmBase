import NavBar from "../NavBar/NavBar";
import { Container, Row, Col, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";

export default function SignUp() {
    return (
        <div>
            <NavBar />
            <Container className="bg-dark p-2" style={{ maxWidth: "40%", borderRadius: "10px" }}>
                <Row className="m-3 justify-content-center text-light pb-2">
                    <h3 className="text-center">Zarejestruj do <span className="gradientText uppercase">Flm|Base</span></h3>
                </Row>
                <Form>
                    <Row className="m-3 justify-content-center">
                        <Col xs='7'>
                            <Form.Control type="text" placeholder="Login" />
                        </Col>
                    </Row>
                    <Row className="m-3 justify-content-center">
                        <Col xs='7'>
                            <Form.Control type="text" placeholder="Nazwa" />
                        </Col>
                    </Row>
                    <Row className="m-3 justify-content-center">
                        <Col xs='7'>
                            <Form.Control type="email" placeholder="Email" />
                        </Col>
                    </Row>
                    <Row className="m-3 justify-content-center">
                        <Col xs='7'>
                            <Form.Control type="password" placeholder="Hasło" />
                        </Col>
                    </Row>
                    <Row className="m-3 justify-content-center">
                        <Col xs='auto'>
                            <Button variant="warning" type="submit">Zarejestruj</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
            <Row className="m-3 justify-content-center text-light text-center">
                <p>Posiadasz konto? <Link to="/sign_in" className="clickableLink">Zaloguj</Link></p>
            </Row>
        </div>
    );
}