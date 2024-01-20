import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import NavBar from "../NavBar/NavBar";
import { LoginForm } from '../Types/UserDataTypes';
import { homePath, registerPath } from '../../strings/AppPaths';
import { authorizeUser } from '../../api/userDataApi';

export default function SignIn() {
    const [validated, setValidated] = useState(false);
    const [falseCredintials, setFalseCredintials] = useState(false);
    const [loginErrorMsg, setLoginErrorMsg] = useState('');
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
            const loginData: LoginForm = {
                login: event.target.login.value,
                password: event.target.password.value
            };

            authorizeUser(loginData).then(() => {
                navigate(homePath);
                refreshPage();
            }).catch((error: Error) => {
                setLoginErrorMsg(error.message);
                setFalseCredintials(true);
            })
        }

        event.preventDefault();
        setValidated(true);
    };

    return (
    <div>
        <NavBar/>
        <Container className="bg-dark p-2" style={{maxWidth: "40%", borderRadius: "10px"}}>
            <Row className="m-3 justify-content-center text-light pb-2">
                <h3 className="text-center">Zaloguj do <span className="gradientText uppercase">Flm|Base</span></h3>
            </Row>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="m-3 justify-content-center">
                    <Col xs='7'>
                            <Form.Control required type="text" placeholder="Login" name='login' />
                            <Form.Control.Feedback type='invalid'>Login jest wymagany!</Form.Control.Feedback>
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
                            <p className='text-danger'>{loginErrorMsg}</p>
                        </Col>
                    </Row> : null}

                <Row className="m-3 justify-content-center">
                    <Col xs='auto'>
                            <Button variant="warning" type="submit">Dołącz</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
        <Row className="m-3 justify-content-center text-light text-center">
                <p>Nie masz konta? <Link to={registerPath} className="clickableLink">Załóż</Link></p>
            </Row>
    </div>
            
    );
}