import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { formatPrice } from '../utils/formatPrice'
function CartSummary({ total, itemCount, showCheckout = true }) { return <aside className="summary"><h2>Order summary</h2><div className="summary-row"><span>Items ({itemCount})</span><span>{formatPrice(total)}</span></div><div className="summary-row"><span>Delivery</span><span>Free</span></div><div className="summary-row summary-total"><span>Total</span><span>{formatPrice(total)}</span></div>{showCheckout && <Link className="button button-primary" to="/checkout">Proceed to Checkout</Link>}</aside> }
CartSummary.propTypes = { total: PropTypes.number.isRequired, itemCount: PropTypes.number.isRequired, showCheckout: PropTypes.bool }
export default CartSummary
