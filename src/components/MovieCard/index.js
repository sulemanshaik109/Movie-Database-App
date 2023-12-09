import {Link} from 'react-router-dom'
import './index.css'

const MovieCard = props => {
  const {movieData} = props
  const {posterPath, name, rating, id} = movieData
  const imageUrl = `https://image.tmdb.org/t/p/w500${posterPath}`
  return (
    <li className="movie-card">
      <img src={imageUrl} alt={name} className="movie-img" />
      <div className="movie-details-container">
        <p className="name">{name}</p>
        <p className="rating">Rating: {rating}</p>
        <Link to={`movie/${id}`} className="link-item">
          <button type="button" className="view-details-btn">
            View Details
          </button>
        </Link>
      </div>
    </li>
  )
}

export default MovieCard
