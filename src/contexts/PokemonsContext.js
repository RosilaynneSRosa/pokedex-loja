import { createContext, useEffect, useState } from "react";

export const PokemonsContext = createContext()
export function PokemonsContextProvider({ children }) {

  const [pokemons, setPokemons] = useState([])

  async function getPokemons() {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/")
    const data = await res.json()
    setPokemons(data.results)
  }

  useEffect(() => {
    getPokemons()
  }, [])

  return (
    <PokemonsContext.Provider value={{ pokemons, setPokemons }}>
      {children}
    </PokemonsContext.Provider>
  )
}
