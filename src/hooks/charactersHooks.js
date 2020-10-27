import { useState, useEffect } from 'react'
import { getAllCharacters } from '../services/rickAndMorty-api'

// useAllCharacters hook - returns loading state and allCharacters
export const useAllCharacters = () => {
  // set loading state and allCharacters state
  const [loading, setLoading] = useState(true)
  const [allCharacters, setAllCharacters] = useState([])

  // useEffect - like component did mount
  useEffect(async () => {
    const allCharacters = await getAllCharacters()
    // set characters to state 
    setAllCharacters(allCharacters)
    // update loading state to false so page will display data
    setLoading(false)
  }, [])

  // return loading state (now false) and character state data for components to use
  return {
    loading,
    allCharacters
  }
}


// useCharacterById(id) hook - returns loading state and singleCharacter
