import { useState } from 'react'
import NavBar from "../NavBar/NavBar";
import { Container, Row, Col, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from '../../api/userDataApi';
import { RegisterForm } from '../Types/UserDataTypes';
import { signInPath } from '../../strings/AppPaths';


export default function SignUp() {
    const [validated, setValidated] = useState(false);
    const [falseCredintials, setFalseCredintials] = useState(false);
    const [registerErrorMsg, setRegisterErrorMsg] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (event: any) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }

        const registerData: RegisterForm = {
            name: event.target.name.value,
            email: event.target.email.value,
            password: event.target.password.value
        };

        registerUser(registerData).then(() => {
            navigate(signInPath);
        }).catch((error: Error) => {
            setFalseCredintials(true);
            setRegisterErrorMsg(error.message);
        })

        event.preventDefault();
        setValidated(true);
    };

    return (
        <div>
            <NavBar />
            <Container className="bg-dark p-2" style={{ maxWidth: "40%", borderRadius: "10px" }}>
                <Row className="m-3 justify-content-center text-light pb-2">
                    <h3 className="text-center">Zarejestruj do <span className="gradientText uppercase">Flm|Base</span></h3>
                </Row>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="m-3 justify-content-center">
                        <Col xs='7'>
                            <Form.Control required type="text" placeholder="Login" name='name' />
                            <Form.Control.Feedback type='invalid'>Login jest wymagany!</Form.Control.Feedback>
                        </Col>
                    </Row>
                    <Row className="m-3 justify-content-center">
                        <Col xs='7'>
                            <Form.Control required type="email" placeholder="Email" name='email' />
                            <Form.Control.Feedback type='invalid'>Email jest wymagany!</Form.Control.Feedback>
                        </Col>
                    </Row>
                    <Row className="m-3 justify-content-center">
                        <Col xs='7'>
                            <Form.Control required type="password" placeholder="Hasło" name='password' />
                            <Form.Control.Feedback type='invalid'>Hasło jest wymagane!</Form.Control.Feedback>
                        </Col>
                    </Row>
                    {falseCredintials ? <Row className="m-3 justify-content-center">
                        <Col xs='auto'>
                            <p className='text-danger'>{registerErrorMsg}</p>
                        </Col>
                    </Row> : null}
                    <Row className="m-3 justify-content-center">
                        <Col xs='auto'>
                            <Button variant="warning" type="submit">Zarejestruj</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
            <Row className="m-3 justify-content-center text-light text-center">
                <p>Posiadasz konto? <Link to={signInPath} className="clickableLink">Zaloguj</Link></p>
            </Row>
        </div>
    );
}