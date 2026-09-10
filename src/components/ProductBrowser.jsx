import { useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import products from '../data/products'
import ProductGrid from './ProductGrid'
const PRODUCTS_PER_PAGE = 6
function ProductBrowser({ onAddToCart }) {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [page, setPage] = useState(1)
  const categories = ['All', ...new Set(products.map((product) => product.category))]
  const filteredProducts = useMemo(() => products.filter((product) => product.name.toLowerCase().includes(search.toLowerCase()) && (category === 'All' || product.category === category)), [search, category])
  const pageCount = Math.max(1, Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE))
  const visibleProducts = filteredProducts.slice((page - 1) * PRODUCTS_PER_PAGE, page * PRODUCTS_PER_PAGE)
  function updateSearch(value) { setSearch(value); setPage(1) }
  function updateCategory(value) { setCategory(value); setPage(1) }
  return <><div className="filters"><div><label className="field-label" htmlFor="product-search">Search products</label><input className="input" id="product-search" value={search} onChange={(event) => updateSearch(event.target.value)} placeholder="Search by product name" /></div><div><label className="field-label" htmlFor="product-category">Category</label><select className="select" id="product-category" value={category} onChange={(event) => updateCategory(event.target.value)}>{categories.map((item) => <option key={item}>{item}</option>)}</select></div></div><div className="section-heading"><h2>Available products</h2><p className="results-count">{filteredProducts.length} matching products</p></div><ProductGrid products={visibleProducts} onAddToCart={onAddToCart} />{filteredProducts.length > PRODUCTS_PER_PAGE && <nav className="pagination" aria-label="Product pages"><button className="page-button" type="button" onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>{Array.from({ length: pageCount }, (_, index) => <button className={`page-button ${page === index + 1 ? 'active' : ''}`} type="button" onClick={() => setPage(index + 1)} key={index + 1} aria-current={page === index + 1 ? 'page' : undefined}>{index + 1}</button>)}<button className="page-button" type="button" onClick={() => setPage(page + 1)} disabled={page === pageCount}>Next</button></nav>}</>
}
ProductBrowser.propTypes = { onAddToCart: PropTypes.func.isRequired }
export default ProductBrowser
