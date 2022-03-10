import './App.css';
import Grid from '@material-ui/core/Grid';
import Data from './data.json';
import PokemonCard from './components/PokemonCard';

function App() {
  return (
    <div className="App">
      <div className="appContainer">
        <div className='appHeader'>
          <h1>Pokedex</h1>
        </div>
        <div className='pokedexContainer'>
          <Grid container>
          {Data.map((pokemon) => (
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
