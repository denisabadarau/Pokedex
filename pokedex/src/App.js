import './App.css';
import Grid from '@material-ui/core/Grid';
import Data from './data.json';
import PokemonCard from './components/PokemonCard/PokemonCard';
import {useState} from 'react';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const pokemons = Data;

  return (
    <div className="App">
      <div className="appContainer">
        <div className="appHeader">
          <h1>Pokedex</h1>
          <SearchBar 
            placeholder="Search pokemon name..."
            handleChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
        <div className="pokedexContainer">
          <Grid container>
            {pokemons.filter((val) => {
              if(searchTerm === "") {
                return val;
              } else if(val.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                return val;
              }
            }).map((pokemon) => (
              <Grid item key={pokemon.id} xs={12} md={6} lg={4}>
                <PokemonCard pokemon={pokemon} />
              </Grid>
              ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default App;
