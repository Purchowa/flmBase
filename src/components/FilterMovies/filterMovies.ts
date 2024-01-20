import { MovieHeaderData } from "../Types/MovieDataTypes";
import { MovieData } from "../Types/MovieDataTypes";
import { SearchType, SearchVariant } from "../Types/SearchTypes";
import { getMovie } from "../../api/movieDataApi";

export default async function filterMovies(type: SearchType, movies: MovieHeaderData[]): Promise<MovieHeaderData[]> {
    const movieDetails: MovieData[] = [];

    if (type.searchVariant !== SearchVariant.Title) {
        for (const movieHeader of movies) {
            movieDetails.push(await getMovie(movieHeader.id));
        }
    }
    const regExAnyMatchingCharacter = new RegExp(`${type.searchCriteria}.+$|^${type.searchCriteria}$`, 'i');

    switch (type.searchVariant) {
        case SearchVariant.Title: {
            return movies.filter((value) => value.title.match(regExAnyMatchingCharacter));
        }
        case SearchVariant.Genre: {
            return movieDetails.filter((value) => value.genre.match(regExAnyMatchingCharacter));
        }
        case SearchVariant.Rate: {
            return movieDetails.filter((value) => value.rate.toString().match(regExAnyMatchingCharacter));
        }
        case SearchVariant.ProductionYear: {
            return movieDetails.filter((value) => value.productionYear.toString().match(regExAnyMatchingCharacter));
        }
        default: {
            console.log('No search variant found');
            return movies;
        }
    }
}