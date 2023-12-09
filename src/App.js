import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Popular from './components/Popular'
import TopRated from './components/TopRated'
import Upcoming from './components/Upcoming'
import SearchResults from './components/SearchResults'

import './App.css'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Popular} />
        <Route exact path="/top-rated" component={TopRated} />
        <Route exact path="/upcoming" component={Upcoming} />
        <Route exact path="/search-results" component={SearchResults} />
      </Switch>
    )
  }
}

export default App
