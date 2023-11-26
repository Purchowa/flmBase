import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/theme.css';
import './styles/style.css';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import Home from './components/Screens/Home';
import SignIn from './components/Screens/SignIn';
import MovieDetails from './components/Screens/MovieDetails';

function App() {
  enum AppState{
    Guest,
    User,
    SignIn,
    SignUp,
    MovieDetails
  }

  const [appState, setAppState] = useState(AppState.MovieDetails);

  let component: JSX.Element;
  switch (appState){
    case AppState.Guest:{
      component = <Home/>;
      break;
    }
    case AppState.SignIn:{
      component = <SignIn/>;
      break;
    }
    case AppState.SignUp:{
      component = <SignIn/>;
      break;
    }
    case AppState.MovieDetails:{
      component = <MovieDetails/>
      break;
    }
    default:{
      component = <Home/>;
    }
  }

  return (
    <Container fluid className='background p-0 m-0 min-vh-100'>
      {component}
    </Container>
  );
}

export default App;
