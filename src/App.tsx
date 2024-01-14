import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/theme.css';
import './styles/style.css';
import { Container } from 'react-bootstrap';
import {
  createBrowserRouter,
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { isExpired } from 'react-jwt';
import Home from './components/Screens/Home';
import SignIn from './components/Screens/SignIn';
import { MovieDetails } from './components/Screens/MovieDetails';
import SignUp from './components/Screens/SignUp';
import AddMovie from './components/Screens/AddMovie';
import getUserToken from './utils/getUserToken';
import { addMoviePath, signInPath, registerPath, movieDetailsPath, homePath } from './strings/AppPaths';

function App() {

  return (
    <Container fluid className='background p-0 m-0 min-vh-100'>
      <BrowserRouter>
        <Routes>
          <Route path={homePath} element={<Home />} />
          <Route path={addMoviePath} element={isExpired(getUserToken()) ? <Navigate replace to={homePath} /> : <AddMovie />} />
          <Route path={signInPath} element={<SignIn />} />
          <Route path={registerPath} element={<SignUp />} />
          <Route path={movieDetailsPath} element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
