import PropTypes from 'prop-types'
import { Link, NavLink } from 'react-router-dom'
import guardiansLogo from '../assets/guardians-of-the-galaxy-volume-3-2023.jpeg'

function Navbar({ cartItemCount }) {
  return (
    <header className="site-header">
      <div className="nav-inner">
        <Link className="brand" to="/" aria-label="Guardians Outpost home">
          <img className="brand-logo" src={guardiansLogo} alt="Guardians of the Galaxy" />
        </Link>

        <nav className="primary-nav" aria-label="Main navigation">
          <NavLink to="/" end>Base</NavLink>
          <NavLink to="/products">Armory</NavLink>
        </nav>

        <Link className="cart-link" to="/cart" aria-label={`Cargo cart with ${cartItemCount} items`}>
          Cargo ({cartItemCount})
        </Link>
      </div>
    </header>
  )
}

Navbar.propTypes = {
  cartItemCount: PropTypes.number.isRequired,
}

export default Navbar
