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

class SearchResults extends Component {
  state = {
    searchResults: [],
    searchInput: '',
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getSearchResults()
  }

  getSearchResults = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const apiKey = '2fce994b12907f408ed462c69fd7c2cc'
    const {searchInput} = this.state
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchInput}&page=1`
    const response = await fetch(apiUrl)
    if (response.ok) {
      const fetchedData = await response.json()
      console.log(fetchedData)
      const formattedData = fetchedData.results.map(eachResult => ({
        id: eachResult.id,
        posterPath: eachResult.poster_path,
        name: eachResult.title,
        rating: eachResult.vote_average,
      }))
      this.setState({
        searchResults: formattedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  changeSearchInput = searchInput => {
    this.setState({searchInput})
  }

  clickSearchBtn = () => {
    this.getSearchResults()
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

  renderPopularMovies = () => {
    const {searchResults} = this.state
    return (
      <ul className="popular-movies-list">
        {searchResults.map(eachMovie => (
          <MovieCard key={eachMovie.id} movieData={eachMovie} />
        ))}
      </ul>
    )
  }

  renderPopularPage = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderPopularMovies()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const {searchInput} = this.state
    return (
      <>
        <Header
          searchInput={searchInput}
          changeSearchInput={this.changeSearchInput}
          clickSearchBtn={this.clickSearchBtn}
        />
        {this.renderPopularPage()}
      </>
    )
  }
}

export default SearchResults
