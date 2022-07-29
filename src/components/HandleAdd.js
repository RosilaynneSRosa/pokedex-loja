import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"

export function HandleAdd({newPokemon}) { 
  const {cart, setCart} = useContext(CartContext)
  function addPokemon() {
    setCart([...cart].concat(newPokemon))
  }
  return (
    <div>
      <button className="adicionar" onClick={addPokemon}>Adicionar</button>
    </div>
  )
}
