import { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { isExpired } from 'react-jwt';
import { MovieData } from "../Types/MovieDataTypes";
import NavBar from "../NavBar/NavBar";
import getUserToken from "../../utils/getUserToken";
import { homePath } from "../../strings/AppPaths";
import { getMovie, deleteMovie } from "../../api/movieDataApi";

export function MovieDetails() {
    const [movieData, setMovieData] = useState<MovieData>();
    const { movieID } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getMovie(movieID).then((value) => {
            setMovieData(value);
        })
    }, []);

    const handleDelete = () => {
        deleteMovie(movieID).then(() => {
            navigate(homePath);
        });
    }

    return (
        <>
            <NavBar/>
            {movieData ?
                <Container className="d-flex bg-dark p-2 flex-column mt-5" style={{ maxWidth: "80%", borderRadius: "10px" }}>
                    <Container className="d-flex flex-row">
                        <Container className="d-flex flex-column align-items-center p-3">
                            <img src={movieData.image} width='80%' alt='picture' />
                        </Container>
                        <Container className="d-flex flex-column justify-content-around">
                            <h3 className='text-white text-center'>{movieData.title}</h3>
                            <p className='text-white'>{movieData.content}</p>
                            <Container className="d-flex ps-0 pt-2">
                                <ul className="movieDescList">
                                    <li>Gatunek: <span className="text-white">{movieData.genre}</span></li>
                                    <li>Premiera: <span className="text-white">{movieData.productionYear}</span></li>
                                </ul>
                            </Container>
                            <h5 className="text-white pt-2 align-self-center">Rating: <span className="text-danger fw-bolder">{movieData.rate}</span></h5>
                        </Container>
                    </Container>
                    {
                        !isExpired(getUserToken()) ?
                            <Container className="d-flex justify-content-center flex-shrink-1">
                                <Button variant="danger" onClick={handleDelete}>Usuń film</Button>
                            </Container>
                            : null
                    }

                </Container>
                : null}

        </>
    );
}