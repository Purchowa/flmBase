import NavBar from "../NavBar/NavBar";
import { Container, Row, Col, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";

export default function SignIn() {

    return (
    <div>
        <NavBar/>
        <Container className="bg-dark p-2" style={{maxWidth: "40%", borderRadius: "10px"}}>
            <Row className="m-3 justify-content-center text-light pb-2">
                <h3 className="text-center">Zaloguj do <span className="gradientText uppercase">Flm|Base</span></h3>
            </Row>
            <Form>
                <Row className="m-3 justify-content-center">
                    <Col xs='7'>
                            <Form.Control type="text" placeholder="Login" />
                    </Col>
                </Row>
                <Row className="m-3 justify-content-center">
                    <Col xs='7'>
                            <Form.Control type="password" placeholder="Hasło" />
                    </Col>
                </Row>
                <Row className="m-3 justify-content-center">
                    <Col xs='auto'>
                            <Button variant="warning" type="submit">Dołącz</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
        <Row className="m-3 justify-content-center text-light text-center">
                <p>Nie masz konta? <Link to="/sign_up" className="clickableLink">Załóż</Link></p>
            </Row>
    </div>
            
    );
}