import { Link } from "react-router-dom";

export default function Movie(){

    
    return(
        <Link to="/movie_details" className="bg-image movie">
            <img className='img-fluid' src='https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp' alt='picture'/>
            <h4 className='movieTitle'>Title</h4>
        </Link>
    );
}