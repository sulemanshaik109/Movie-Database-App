import {Link} from 'react-router-dom'
import './index.css'

const MovieCard = props => {
  const {movieData} = props
  const {posterPath, name, rating, id} = movieData
  const imageUrl = `https://image.tmdb.org/t/p/w500${posterPath}`
  return (
    <li className="movie-card">
      <Link to={`movie/${id}`} className="link-item">
        <img src={imageUrl} alt={name} className="movie-img" />
        <p className="name">{name}</p>
        <p className="rating">Rating: {rating}</p>
      </Link>
    </li>
  )
}

export default MovieCard
