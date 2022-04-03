import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PokemonsStoreProvider } from './store/pokemonsStore';
import { ChakraProvider, Spinner } from '@chakra-ui/react';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./pages/Home/Home'));
const Pokemon = lazy(() => import('./pages/Pokemon/Pokemon'));
const Error = lazy(() => import('./pages/Error/Error'));

function App() {
  return (
    <PokemonsStoreProvider>
      <BrowserRouter>
        <ChakraProvider>
          <Suspense fallback={<Spinner size="xl" />}>
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
          </Suspense>
        </ChakraProvider>
      </BrowserRouter>
    </PokemonsStoreProvider>
  );
}

export default App;
