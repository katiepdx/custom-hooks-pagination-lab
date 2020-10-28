// list all characters - image (with alt) and name
// uses custom hooks

import React from 'react'
import propTypes from 'prop-types'
import CharacterList from '../components/characters/CharacterList'
import { useState } from 'react'
import styles from './AllCharactersPage.css'

const AllCharactersPage = () => {
  // set page count state to 1 on load 
  const [pageCount, setPageCount] = useState(1)

  return (
    <div>
      <h1> Here are all the characters</h1>
      {/* buttons for pagination - onClick updates setPage in state*/}
      <div className={styles.pageButtons}>
        <button onClick={() => setPageCount(pageCount - 1)}>Prev</button>
        <span>Page: {pageCount}</span>
        <button onClick={() => setPageCount(pageCount + 1)}>Next</button>
      </div>

      {/* display character list - pass page count */}
      <CharacterList pageCount={pageCount} />
    </div >
  )
}

AllCharactersPage.propTypes = {
  pageCount: propTypes.number
}

export default AllCharactersPage
