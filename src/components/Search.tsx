import {Row, Col, ButtonGroup} from 'react-bootstrap/esm';
import { Button, InputGroup, Form, Container, DropdownButton, Dropdown } from 'react-bootstrap';

export default function Search() {

    return (
        <Form className='mt-0'>
            <InputGroup>
                <Container fluid>
                    <Row>
                        <Col className="p-0">
                            <Form.Control  style={{borderEndEndRadius: "0", borderStartEndRadius: "0"}} placeholder='Nazwa'/>
                        </Col>
                        <Col className="p-0" xs={4}>
                            <ButtonGroup data-bs-theme="dark">
                                <Button variant='warning' style={{borderEndStartRadius: "0", borderStartStartRadius: "0"}} type="submit">Znajdź</Button>
                                <DropdownButton variant="warning" id="btnGroupDrop1"className="" as={ButtonGroup} title="Filtruj">
                                    <Dropdown.Item eventKey="1" active>Nazwa</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">Gatunek</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">...</Dropdown.Item>
                                </DropdownButton>
                            </ButtonGroup>
                        </Col>
                    </Row>
                </Container>
            </InputGroup>
        </Form>
    );
}