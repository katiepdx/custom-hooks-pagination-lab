// list all characters - image (with alt) and name
// uses custom hooks

import React from 'react'
import PropTypes from 'prop-types'
import CharacterList from '../components/characters/CharacterList'
import { useState } from 'react'

const AllCharactersPage = () => {
  // set page count state to 1 on load 
  const [pageCount, setPageCount] = useState(1)

  return (
    <div>
      <h1> Here are all the characters</h1>
      {/* buttons for pagination - onClick updates setPage in state*/}
      <button onClick={() => setPageCount(pageCount - 1)}>Prev</button>
      <span>Page: {pageCount}</span>
      <button onClick={() => setPageCount(pageCount + 1)}>Next</button>

      {/* display character list - pass page count */}
      <CharacterList pageCount={pageCount} />
    </div>
  )
}

AllCharactersPage.propTypes = {

}

export default AllCharactersPage
