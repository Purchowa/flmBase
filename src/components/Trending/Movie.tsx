import { Link } from "react-router-dom";
import { MovieHeaderData } from "../Types/MovieDataTypes";

export default function Movie({ prop }: { prop: MovieHeaderData }) {
    return(
        <Link to={`/${prop.id}`} className="bg-image movie text-decoration-none">
            <img className='img-fluid' src={prop.image} alt='picture' />
            <h4 className='movieTitle'>{prop.title}</h4>
        </Link>
    );
}