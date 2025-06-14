import { useState } from 'react'
import './App.css'

const products = [
  {
    id: 1,
    name: 'Stylish Jacket',
    price: 49,
    image:
      'https://images.unsplash.com/photo-1526312426976-f4d754fa9bd6?auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 2,
    name: 'Comfy Sneakers',
    price: 79,
    image:
      'https://images.unsplash.com/photo-1582738416697-f89e43931d0e?auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 3,
    name: 'Classic Watch',
    price: 120,
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=60',
  },
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
              <img src={p.image} alt={p.name} />
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
          {cart.length > 0 && (
            <button className="checkout" onClick={() => setCart([])}>
              Checkout
            </button>
          )}
        </aside>
      </main>
    </div>
  )
}

export default App
