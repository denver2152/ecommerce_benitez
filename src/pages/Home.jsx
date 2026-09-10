import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ProductBrowser from '../components/ProductBrowser'

function Home({ onAddToCart }) {
  return (
    <>
      <section className="hero">
        <p className="eyebrow">Guardians supply run</p>
        <h1>Gear up for the next jump.</h1>
        <p className="hero-copy">
          Stock your ship with everyday essentials, mission-ready tech, and supplies for every corner of the galaxy.
        </p>
        <Link className="button button-primary hero-button" to="/products">
          Explore the Armory
        </Link>
      </section>

      <ProductBrowser onAddToCart={onAddToCart} />
    </>
  )
}

Home.propTypes = {
  onAddToCart: PropTypes.func.isRequired,
}

export default Home
