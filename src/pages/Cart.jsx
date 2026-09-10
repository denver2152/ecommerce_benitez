import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'
import CartSummary from '../components/CartSummary'
function Cart({ cart, cartTotal, onUpdateQuantity, onRemove }) { if (!cart.length) return <section className="empty-state"><h1>Your cart is empty</h1><p>Add a few useful things, then come back when you are ready to check out.</p><Link className="button button-primary" to="/products">Continue Shopping</Link></section>; const itemCount = cart.reduce((total, item) => total + item.quantity, 0); return <section><div className="section-heading"><h1>Shopping cart</h1><p className="results-count">{itemCount} items</p></div><div className="cart-layout"><div className="cart-list">{cart.map((item) => <CartItem key={item.id} item={item} onUpdateQuantity={onUpdateQuantity} onRemove={onRemove} />)}</div><CartSummary total={cartTotal} itemCount={itemCount} /></div></section> }
Cart.propTypes = { cart: PropTypes.arrayOf(PropTypes.object).isRequired, cartTotal: PropTypes.number.isRequired, onUpdateQuantity: PropTypes.func.isRequired, onRemove: PropTypes.func.isRequired }
export default Cart
