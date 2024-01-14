import { useState, useEffect } from "react";
import axios from "axios";
import { MovieHeaderData } from "../Types/MovieDataTypes";
import Movie from "./Movie";


export default function TrendingMovies(){
    const [movies, setMovies] = useState<MovieHeaderData[]>();

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://at.usermd.net/api/movies',
        }).then(
            (response) => {
                setMovies(response.data)
            }
        ).catch(
            (e) => {
                console.log(e);
            }
        );
    });

    return (
        <div className='movieGroup'>
            {
                movies ?
                    movies.map((movieData, index) => <Movie key={index} prop={movieData} />)
                    : null
            }
        </div>
    );
}