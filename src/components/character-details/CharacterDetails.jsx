// display a single character's details here

import React from 'react'
import propTypes from 'prop-types'
import { useCharacterById } from '../../hooks/charactersHooks'
import { useParams } from 'react-router-dom'

const CharacterDetails = () => {
  // get id off of params using hook from react router dom
  const { id } = useParams()
  console.log(id)

  // get loading and singleCharacter state from custom hook 
  const { loading, singleCharacter } = useCharacterById(id)

  // if loading state is true, display loading screen
  if (loading) return <h1>Your character details are still loading</h1>

  return (
    <>
      <h3>This is {singleCharacter.name}</h3>
      <img src={singleCharacter.image} />
      <p>Gender: {singleCharacter.gender}</p>
      <p>Status: {singleCharacter.status}</p>
      <p>Species: {singleCharacter.species}</p>
    </>
  )
}

export default CharacterDetails
