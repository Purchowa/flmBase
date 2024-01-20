import { useState } from 'react';
import { Button, InputGroup, Form, Container, DropdownButton, Dropdown, Row, Col, ButtonGroup } from 'react-bootstrap';
import { SearchVariant, SearchType } from '../Types/SearchTypes';

export default function Search({ setSearchType }: { setSearchType: (type: SearchType) => void }) {
    const [searchVariant, setSearchVariant] = useState<SearchVariant>(SearchVariant.Title);

    const mapStrinToSearchVariant = new Map([["0", SearchVariant.Title], ["1", SearchVariant.Genre], ["2", SearchVariant.Rate], ["3", SearchVariant.ProductionYear]]);

    const onSelectSearchVariant = (eventKey: any) => {
        if (eventKey !== undefined) {
            const variant = mapStrinToSearchVariant.get(eventKey);
            if (variant !== undefined)
                setSearchVariant(variant);
        }
    }

    const onFilterMovies = (event: any) => {
        const searchCriteria: string = event.target.searchCriteria.value;
        setSearchType({ searchCriteria: searchCriteria, searchVariant: searchVariant });
        event.preventDefault();
    }

    return (
        <Form className='mt-0' onSubmit={onFilterMovies}>
            <InputGroup>
                <Container fluid>
                    <Row>
                        <Col className="p-0">
                            <Form.Control style={{ borderEndEndRadius: "0", borderStartEndRadius: "0" }} name="searchCriteria" placeholder="Nazwa" />
                        </Col>
                        <Col className="p-0" xs={4}>
                            <ButtonGroup data-bs-theme="dark">
                                <Button variant='warning' style={{ borderEndStartRadius: "0", borderStartStartRadius: "0" }} type="submit" >Znajdź</Button>
                                <DropdownButton variant="warning" title="Filtruj" onSelect={onSelectSearchVariant}>
                                    <Dropdown.Item eventKey={SearchVariant.Title} active={searchVariant === SearchVariant.Title}>Tytuł</Dropdown.Item>
                                    <Dropdown.Item eventKey={SearchVariant.Genre} active={searchVariant === SearchVariant.Genre}>Gatunek</Dropdown.Item>
                                    <Dropdown.Item eventKey={SearchVariant.Rate} active={searchVariant === SearchVariant.Rate}>Ocena</Dropdown.Item>
                                    <Dropdown.Item eventKey={SearchVariant.ProductionYear} active={searchVariant === SearchVariant.ProductionYear}>Rok produkcji</Dropdown.Item>
                                </DropdownButton>
                            </ButtonGroup>
                        </Col>
                    </Row>
                </Container>
            </InputGroup>
        </Form>
    );
}