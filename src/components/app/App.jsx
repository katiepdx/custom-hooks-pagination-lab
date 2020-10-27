import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import AllCharactersPage from '../../pages/AllCharactersPage'
import CharacterDetailPage from '../../pages/CharacterDetailPage';
import './App.css'

// set up router nav links

export default function App() {
  return (
    <>
      <h1>Custom React Hooks and Pagination Lab!</h1>
      <Router>
        <nav>
          <li><Link to="/">Character List</Link></li>
          <li><Link to="/details">Character Details</Link></li>
        </nav>

        <Switch>
          <Route
            exact path="/"
            render={(routerProps) => <AllCharactersPage {...routerProps} />}
          />
          <Route
            exact path="/details/"
            render={(routerProps) => <CharacterDetailPage {...routerProps} />}
          />
        </Switch>
      </Router>
    </>
  )
}
