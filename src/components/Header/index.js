import {Link} from 'react-router-dom'

import './index.css'

const Header = props => {
  const {searchInput, clickSearchBtn, changeSearchInput} = props
  const onChangeSearchInput = event => {
    changeSearchInput(event.target.value)
  }
  const onClickSearchInput = () => {
    clickSearchBtn()
  }
  return (
    <nav className="nav-header">
      <h1 className="title">movieDB</h1>
      <div className="navigation-container">
        <ul className="nav-menu">
          <li className="nav-menu-item">
            <Link to="/" className="nav-link">
              Popular
            </Link>
          </li>

          <li className="nav-menu-item">
            <Link to="/top-rated" className="nav-link">
              Top Rated
            </Link>
          </li>

          <li className="nav-menu-item">
            <Link to="/upcoming" className="nav-link">
              Upcoming
            </Link>
          </li>
        </ul>
        <Link to="/search-results" className="nav-link">
          <div className="search-input-container">
            <input
              value={searchInput}
              type="search"
              className="search-input"
              onChange={onChangeSearchInput}
            />
            <button
              className="search-btn"
              type="button"
              onClick={onClickSearchInput}
            >
              Search
            </button>
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Header
