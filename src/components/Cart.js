import { useContext, useEffect, useState } from "react"
import { CartContext } from "../contexts/CartContext"

export default function Cart() {

  const { cart, setCart } = useContext(CartContext)
  const [pokemons, setPokemons] = useState([])
  const [messagePay, setMessagePay] = useState('')
  const handleDelete = (indexControll) => {
    setCart(prev => prev.filter((pokemon, index) => indexControll !== index))
  }
  
  const handlePayment = () => {
    setCart([])
    setMessagePay('Compra realizada com sucesso!') 

  }

  useEffect(() => {
    setPokemons(cart)
  }, [cart])
  let total = 0
  return (
    <div className="cart-container">
      <h2 className="cart-pokemon">Cart Pokemon</h2>
      {cart.length <= 0 && <h3 className="text">{messagePay}</h3>}
      {
        pokemons.length > 0 && pokemons?.map((pokemon, index) => {
          total += pokemon?.base_experience * 10
          return (
            <div key={index} className="cart-product">
              <div>
                <img className="cart-img" src={pokemon?.sprites?.other?.home?.front_default || './egg.png'} alt={pokemon?.name} />
              </div>
              <div className="cart-desc">
                <h3 className="text">{pokemon?.name}</h3>
                <h6 className="valor-antigo">R$ {pokemon?.base_experience * 12},00</h6>
                <h4 className="valor-atual">R$ {pokemon?.base_experience * 10},00</h4>
              </div>
              <div className="cart-buttons">
                <button onClick={() => handleDelete(index)} className="cart-btn-delete">X</button>
              </div>
            </div>
          )
        })
      }
      {total > 0 && <h3 className="total">Total: R$ {total},00</h3>}
      {cart.length > 0 && <button className="finalizar" onClick={() => handlePayment()}>Finalizar Compra</button>}
    </div>
  )
}