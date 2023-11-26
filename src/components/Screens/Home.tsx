import NavBar from '../NavBar/NavBar';
import Search from '../Search';
import TrendingMovies from '../Trending/TrendingMovies';
import { Container } from 'react-bootstrap';

export default function Home() {
  return (
    <div>
        <NavBar/>
        <Container fluid className='d-flex pt-4 align-items-center justify-content-start flex-column' style={{height: "90vh"}}>
            <div className="main-title">
            Witaj <br/>w najlepszej<br/> bazie filmów
            </div>
            <h5 className="mt-3 gradientText uppercase">Szukaj ulubionych</h5>
            <Search/>
        </Container>
        <Container>
            <h2 className="mt-3 gradientText uppercase text-center">trending</h2>
            <TrendingMovies/>
        </Container>
    </div>
  );
}
