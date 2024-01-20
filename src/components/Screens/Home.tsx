import { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import Search from '../FilterMovies/Search';
import TrendingMovies from '../Trending/TrendingMovies';
import { Container } from 'react-bootstrap';
import { SearchType, SearchVariant } from '../Types/SearchTypes';

export default function Home() {
  const [searchType, setSearchType] = useState<SearchType>({ searchCriteria: "", searchVariant: SearchVariant.Title });

  return (
    <div>
      <NavBar />
      <Container fluid className='d-flex pt-4 align-items-center justify-content-start flex-column' style={{ height: "70vh" }}>
            <div className="main-title">
          Witaj<br />w najlepszej<br />bazie filmów
            </div>
            <h5 className="mt-3 gradientText uppercase">Szukaj ulubionych</h5>
        <Search setSearchType={(type: SearchType) => { setSearchType(type); }} />
        </Container>
      <Container>
        <h2 className="mt-3 mb-2 gradientText uppercase text-center">dostępne pozycje</h2>
        <TrendingMovies searchType={searchType} />
        </Container>
    </div>
  );
}
