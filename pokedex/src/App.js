import './App.css';
import Home from './pages/Home/Home';
import Pokemon from './pages/Pokemon/Pokemon';
import Error from './pages/Error/Error';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact path="/"
          element={<Home />}
        />
        <Route
          path="/pokemon"
          element={<Home />}
        />
        <Route
          path="/pokemon/:pokemonId"
          element={<Pokemon />}
        />
        <Route
          path="*"
          element={<Error />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
