import { useState } from 'react'
import './App.css'

const products = [
  { id: 1, name: 'Item A', price: 10 },
  { id: 2, name: 'Item B', price: 15 },
  { id: 3, name: 'Item C', price: 20 }
]

function App() {
  const [cart, setCart] = useState([])

  const addToCart = product => {
    setCart([...cart, product])
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="shop-container">
      <header>
        <h1>Simple Shop</h1>
      </header>
      <main>
        <section id="products">
          {products.map(p => (
            <div key={p.id} className="product">
              <h3>{p.name}</h3>
              <p>${p.price}</p>
              <button onClick={() => addToCart(p)}>Add to Cart</button>
            </div>
          ))}
        </section>
        <aside id="cart">
          <h2>Cart</h2>
          <ul>
            {cart.map((item, idx) => (
              <li key={idx}>{item.name} - ${item.price}</li>
            ))}
          </ul>
          {cart.length > 0 && <p className="total">Total: ${total}</p>}
        </aside>
      </main>
    </div>
  )
}

export default App
