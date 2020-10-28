// list all characters - image (with alt) and name
// uses custom hooks

import React from 'react'
import { useAllCharacters } from '../../hooks/charactersHooks'
import SingleCharacter from './SingleCharacter'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'
import styles from './CharacterList.css'

// page pageCount for useAllCharacters to use
const CharacterList = ({ pageCount }) => {
  // get the loading and character state from useAllCharacters hook 
  const { loading, allCharacters } = useAllCharacters(pageCount)

  // display a loading message if loading is true from hook 
  if (loading) return <h1>Your page is still loading</h1>

  // using the characters in state from hook, map through array and use SingleCharacter componen to display them to the page
  const allCharactersEls = allCharacters.map(character => (
    <div key={character.id}>
      {/* spread props from character so SingleCharacter can use them */}
      <Link to={`/details/${character.id}`}>
        <SingleCharacter {...character} />
      </Link>
    </div>
  ))

  // return the list of allCharactersEls
  return (
    <section
      className={styles.characterList}
      data-testid="all-characters-list">
      {allCharactersEls}
    </section>
  )
}

CharacterList.propTypes = {
  pageCount: propTypes.number
}

export default CharacterList
