import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { formatPrice } from '../utils/formatPrice'
function OrderSuccess({ order }) { if (!order) return <section className="success-state"><h1>No recent order</h1><p>Your confirmation will appear here after checkout.</p><Link className="button button-primary" to="/products">Shop Products</Link></section>; return <section className="success-state"><div className="success-mark">OK</div><h1>Order placed successfully!</h1><p>Thank you, {order.customer.fullName}. We will send confirmation details to {order.customer.email}.</p><div className="confirmation"><p><strong>Order number:</strong> {order.orderNumber}</p><p><strong>Payment:</strong> Cash on Delivery</p><p><strong>Total:</strong> {formatPrice(order.total)}</p></div><Link className="button button-primary" to="/products">Continue Shopping</Link></section> }
OrderSuccess.propTypes = { order: PropTypes.shape({ customer: PropTypes.shape({ fullName: PropTypes.string.isRequired, email: PropTypes.string.isRequired }).isRequired, total: PropTypes.number.isRequired, orderNumber: PropTypes.string.isRequired }) }
OrderSuccess.defaultProps = { order: null }
export default OrderSuccess
