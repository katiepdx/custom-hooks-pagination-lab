// list all characters - image (with alt) and name
// uses custom hooks

import React from 'react'
import PropTypes from 'prop-types'
import CharacterList from '../components/characters/CharacterList'

const AllCharactersPage = () => {
  return (
    <div>
      <h1> Here are all the characters</h1>
      <CharacterList />
    </div>
  )
}

AllCharactersPage.propTypes = {

}

export default AllCharactersPage
