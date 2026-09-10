import PropTypes from 'prop-types'
import ProductCard from './ProductCard'
function ProductGrid({ products, onAddToCart }) { if (!products.length) return <div className="empty-state"><h2>No products found</h2><p>Try a different search term or category.</p></div>; return <div className="product-grid">{products.map((product) => <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />)}</div> }
ProductGrid.propTypes = { products: PropTypes.arrayOf(PropTypes.object).isRequired, onAddToCart: PropTypes.func.isRequired }
export default ProductGrid
