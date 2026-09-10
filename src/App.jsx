import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Home from './pages/Home'
import OrderSuccess from './pages/OrderSuccess'
import ProductDetails from './pages/ProductDetails'
import Products from './pages/Products'

function App() {
  const [cart, setCart] = useState([])
  const [order, setOrder] = useState(null)
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0)
  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)

  function addToCart(product, requestedQuantity = 1) {
    setCart((currentCart) => {
      const existingItem = currentCart.find((item) => item.id === product.id)
      const currentQuantity = existingItem ? existingItem.quantity : 0
      const quantityToAdd = Math.min(requestedQuantity, product.stock - currentQuantity)
      if (quantityToAdd <= 0) return currentCart
      if (existingItem) return currentCart.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + quantityToAdd } : item)
      return [...currentCart, { ...product, quantity: quantityToAdd }]
    })
  }

  function updateQuantity(productId, nextQuantity) {
    setCart((currentCart) => currentCart.map((item) => item.id === productId ? { ...item, quantity: Math.max(1, Math.min(nextQuantity, item.stock)) } : item))
  }

  function removeFromCart(productId) { setCart((currentCart) => currentCart.filter((item) => item.id !== productId)) }
  function placeOrder(customer) { setOrder({ customer, items: cart, total: cartTotal, orderNumber: `BN-${Date.now().toString().slice(-6)}` }); setCart([]) }

  return <BrowserRouter><div className="app-shell"><Navbar cartItemCount={cartItemCount} /><main className="page-content"><Routes>
    <Route path="/" element={<Home onAddToCart={addToCart} />} />
    <Route path="/products" element={<Products onAddToCart={addToCart} />} />
    <Route path="/product/:id" element={<ProductDetails onAddToCart={addToCart} />} />
    <Route path="/cart" element={<Cart cart={cart} cartTotal={cartTotal} onUpdateQuantity={updateQuantity} onRemove={removeFromCart} />} />
    <Route path="/checkout" element={<Checkout cart={cart} cartTotal={cartTotal} onPlaceOrder={placeOrder} />} />
    <Route path="/success" element={<OrderSuccess order={order} />} />
    <Route path="*" element={<Home onAddToCart={addToCart} />} />
  </Routes></main></div></BrowserRouter>
}
export default App
