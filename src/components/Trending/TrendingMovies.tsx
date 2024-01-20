import { useState, useEffect } from "react";
import { MovieHeaderData } from "../Types/MovieDataTypes";
import Movie from "./Movie";
import { SearchType } from "../Types/SearchTypes";
import filterMovies from "../FilterMovies/filterMovies";
import { getMovieCollection } from "../../api/movieDataApi";

export default function TrendingMovies({ searchType }: { searchType: SearchType }) {
    const [movies, setMovies] = useState<MovieHeaderData[]>([]);
    const [filteredMovies, setFilteredMovies] = useState<MovieHeaderData[]>();

    useEffect(() => {
        getMovieCollection().then((movies) => {
            setMovies(movies);
            setFilteredMovies(movies);
        })
    }, []);

    useEffect(() => {
        filterMovies(searchType, movies)
            .then((value) => {
                setFilteredMovies(value);
            });
    }, [searchType])

    return (
        <div className='movieGroup'>
            {
                filteredMovies ?
                    filteredMovies.map((movieData, index) => <Movie key={index} prop={movieData} />)
                    : null
            }
        </div>
    );
}