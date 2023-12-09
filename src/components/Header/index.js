import {Link} from 'react-router-dom'
import {BsSearch} from 'react-icons/bs'

import './index.css'

const Header = props => {
  const {searchInput} = props
  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event.target.value)
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
        <div className="search-input-container">
          <input
            value={searchInput}
            type="search"
            className="search-input"
            placeholder="Search"
            onChange={onChangeSearchInput}
          />
          <BsSearch className="search-icon" />
        </div>
      </div>
    </nav>
  )
}

export default Header
