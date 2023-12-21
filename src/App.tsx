import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/theme.css';
import './styles/style.css';
import { Container } from 'react-bootstrap';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Screens/Home';
import SignIn from './components/Screens/SignIn';
import MovieDetails from './components/Screens/MovieDetails';
import SignUp from './components/Screens/SignUp';
import AddMovie from './components/Screens/AddMovie';

function App() {

  return (
    <Container fluid className='background p-0 m-0 min-vh-100'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add_movie' element={<AddMovie />} />
          <Route path='/sign_in' element={<SignIn />} />
          <Route path='/sign_up' element={<SignUp />} />
          <Route path='/movie_details' element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
