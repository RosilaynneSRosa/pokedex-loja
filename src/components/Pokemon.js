import { useEffect, useState } from 'react';
import { HandleAdd } from './HandleAdd';

export default function Pokemon({ url }) {

  const [pokemon, setPokemon] = useState({})
  useEffect(() => {
    async function getPokemon() {
      const res = await fetch(url)
      const data = await res.json()
      setPokemon(data)
    }
    getPokemon()
  }, [url])

  return (
    <div className="pokemon-container">
      <div className='pokemon-card'>
        <img className="cart-img" src={pokemon?.sprites?.other?.home?.front_default || './egg.png'} alt={`Imagem de ${pokemon?.name}`} />
        <h3>{pokemon?.name?.toUpperCase()}</h3>
        <h6 className="valor-antigo">R${pokemon?.base_experience *12},00</h6>
        <h4 className="valor-atual">R${pokemon?.base_experience *10},00</h4>
        <HandleAdd newPokemon={pokemon} />
      </div>
    </div>
  );
}
