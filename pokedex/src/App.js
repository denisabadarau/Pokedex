import './App.css';
import Grid from '@material-ui/core/Grid';
import Data from './data.json';
import PokemonCard from './components/PokemonCard';
import {useState} from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className="App">
      <div className="appContainer">
        <div className="appHeader">
          <h1>Pokedex</h1>
          <input 
            className="searchBar" 
            placeholder="Search pokemon name..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
        <div className="pokedexContainer">
          <Grid container>
          {Data.filter((val) => {
            if(searchTerm == "") {
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
