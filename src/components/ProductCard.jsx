import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { formatPrice } from '../utils/formatPrice'

function ProductCard({ product, onAddToCart }) {
  return <article className="product-card"><Link to={`/product/${product.id}`}><img className="product-image" src={product.image} alt={product.name} /></Link><div className="product-content"><span className="category">{product.category}</span><h3 className="product-title">{product.name}</h3><p className="product-description">{product.shortDescription}</p><p className="price">{formatPrice(product.price)}</p><div className="card-actions"><Link className="button button-secondary" to={`/product/${product.id}`}>View Details</Link><button className="button button-primary" type="button" onClick={() => onAddToCart(product)} disabled={product.stock === 0}>Add to Cart</button></div></div></article>
}
ProductCard.propTypes = { product: PropTypes.shape({ id: PropTypes.number.isRequired, name: PropTypes.string.isRequired, price: PropTypes.number.isRequired, image: PropTypes.string.isRequired, shortDescription: PropTypes.string.isRequired, category: PropTypes.string.isRequired, stock: PropTypes.number.isRequired }).isRequired, onAddToCart: PropTypes.func.isRequired }
export default ProductCard
