import PropTypes from 'prop-types'
import ProductBrowser from '../components/ProductBrowser'

function Products({ onAddToCart }) {
  return (
    <>
      <section className="hero hero-compact">
        <p className="eyebrow">Knowhere trade post</p>
        <h1>Browse the armory.</h1>
        <p className="hero-copy">Search by name or filter a category to find the right cargo for your crew.</p>
      </section>

      <ProductBrowser onAddToCart={onAddToCart} />
    </>
  )
}

Products.propTypes = {
  onAddToCart: PropTypes.func.isRequired,
}

export default Products
