import { useState, useEffect } from 'react'
import { getAllCharacters, getCharacterById } from '../services/rickAndMorty-api'

// useAllCharacters hook - returns loading state and allCharacters
// takes in pageCount
export const useAllCharacters = (pageCount) => {
  // set loading state and allCharacters state
  const [loading, setLoading] = useState(true)
  const [allCharacters, setAllCharacters] = useState([])

  // useEffect - like component did mount
  useEffect(async () => {
    const allCharacters = await getAllCharacters(pageCount)
    // set characters to state 
    setAllCharacters(allCharacters)
    // update loading state to false so page will display data
    setLoading(false)
  }, [pageCount])

  // return loading state (now false) and character state data for components to use
  return {
    loading,
    allCharacters
  }
}


// useCharacterById pass id hook - returns loading state and singleCharacter
export const useCharacterById = (id) => {
  // set loading state and singleCharacter state
  const [loading, setLoading] = useState(true)
  const [singleCharacter, setSingleCharacter] = useState([])

  // use getCharacterById api fetch 
  // pass id as second arg so useEffect runs when id changes
  useEffect(async (id) => {
    const singleCharacter = await getCharacterById(id)
    setSingleCharacter(singleCharacter)
    setLoading(false)
  }, [id])

  return {
    loading,
    singleCharacter
  }

}
