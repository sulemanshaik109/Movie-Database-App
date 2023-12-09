import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import MovieCard from '../MovieCard'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class TopRated extends Component {
  state = {
    topRatedMovies: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getTopRatedMovies()
  }

  getTopRatedMovies = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const apiKey = '2fce994b12907f408ed462c69fd7c2cc'
    const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
    const response = await fetch(apiUrl)
    if (response.ok) {
      const fetchedData = await response.json()
      const formattedData = fetchedData.results.map(eachResult => ({
        id: eachResult.id,
        backdropPath: eachResult.backdrop_path,
        name: eachResult.original_title,
        rating: eachResult.vote_average,
      }))
      this.setState({
        topRatedMovies: formattedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderLoadingView = () => (
    <div className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderFailureView = () => (
    <div className="products-error-view-container">
      <h1 className="product-failure-heading-text">
        Oops! Something Went Wrong
      </h1>
      <p className="products-failure-description">
        We are having some trouble processing your request. Please try again.
      </p>
    </div>
  )

  renderTopRatedMovies = () => {
    const {topRatedMovies} = this.state
    console.log(topRatedMovies)
    return (
      <ul className="popular-movies-list">
        {topRatedMovies.map(eachMovie => (
          <MovieCard key={eachMovie.id} movieData={eachMovie} />
        ))}
      </ul>
    )
  }

  renderTopRatedPage = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderTopRatedMovies()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header changeSearchInput={this.changeSearchInput} />
        {this.renderTopRatedPage()}
      </>
    )
  }
}

export default TopRated
