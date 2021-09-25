import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Watched from './components/Watched'
import AddMovies from './components/AddMovies'
import { GlobalContextProvider } from './context/GlobalState'
import WatchList from './components/WatchList'

function App() {
  return (
    <GlobalContextProvider>
      <Router>

      <Header/>

          <Switch>
    
                <Route exact path="/" > <Home/> </Route>

                <Route path="/watched" > <Watched/> </Route>
                
                <Route path="/watchlist" > <WatchList/> </Route>

                <Route path="/add" > <AddMovies/> </Route>

          </Switch>
      </Router>
    </GlobalContextProvider>
  )
}

export default App
