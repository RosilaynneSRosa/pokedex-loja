import { useContext, useState } from 'react';
import './App.css';
import Cart from './components/Cart';
import Pokemon from './components/Pokemon';
import { CartContextProvider } from './contexts/CartContext';
import { PokemonsContext } from './contexts/PokemonsContext';
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";

function App() {
  const { pokemons } = useContext(PokemonsContext)
  const [search, setSearch] = useState('')
  const filteredPokemons = pokemons
    .filter((pokemon) => pokemon.name.startsWith(search))

  return (
    <CartContextProvider>
    <div>
      <div className='nav-container'>
      <Navbar />
      <Searchbar search={search} setSearch={setSearch} />
      </div>
      <div className="App">
        <div className='pokemon-sale-container'>
          {
            filteredPokemons?.map((pokemon, index) => {
              return (
                <Pokemon key={index} url={pokemon.url} />
              )
            })
          }
        </div>
        <Cart />
      </div>
    </div>
    </CartContextProvider>
  );
}

export default App;
