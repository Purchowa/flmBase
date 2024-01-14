import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { MovieData } from "../Types/MovieDataTypes";
import { useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import axios from "axios";

export function MovieDetails() {
    const [movieData, setMovieData] = useState<MovieData>();
    const { movieID } = useParams();

    useEffect(() => {
        axios({
            method: 'get',
            url: `https://at.usermd.net/api/movies/${movieID}`
        }).then(
            (response) => {
                setMovieData(response.data)
            }
        ).catch(
            (e) => {
                console.log(e);
            }
        );
    });

    return (
        <>
            <NavBar/>
            {movieData ? <Container className="d-flex bg-dark p-2 flex-row mt-5" style={{ maxWidth: "80%", borderRadius: "10px" }}>
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
                : null}

        </>
    );
}