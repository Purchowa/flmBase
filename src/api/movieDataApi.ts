import axios from "axios";
import getUserToken from "../utils/getUserToken";
import { MovieData, MovieHeaderData } from "../components/Types/MovieDataTypes";

export async function getMovie(movieID: string | undefined) {
    let responseData = {} as MovieData;

    try {
        const respone = await axios({
            method: 'get',
            url: `https://at.usermd.net/api/movies/${movieID}`
        });
        responseData = respone.data;
    }
    catch (error) {
        console.error(error);
    }
    finally {
        return responseData;
    }
}

export async function getMovieCollection() {
    let responseData: MovieHeaderData[] = [];

    try {
        const respone = await axios({
            method: 'get',
            url: 'https://at.usermd.net/api/movies',
        });
        responseData = respone.data;
    }
    catch (error) {
        console.error(error);
    }
    finally {
        return responseData;
    }
}

export async function postMovie(movie: MovieData) {
    try {
        await axios({
            method: 'post',
            url: 'https://at.usermd.net/api/movies',
            data: movie
        });
    }
    catch (error) {
        console.error(error);
    }
}

export async function deleteMovie(movieID: string | undefined) {
    try {
        await axios({
            method: 'delete',
            headers: {
                Authorization: `Bearer ${getUserToken()}`
            },
            url: `https://at.usermd.net/api/movie/${movieID}`
        });
    }
    catch (error) {
        console.error(error);
    }
}