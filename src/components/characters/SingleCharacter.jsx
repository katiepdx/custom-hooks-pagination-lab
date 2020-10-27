// single character - name and image - snapshot test 

import React from 'react'
import propTypes from 'prop-types'

const SingleCharacter = ({ image, name }) => {
  // return a div for a single character
  return (
    <div>
      <h3>You choose {name}!</h3>
      <img src={image} alt={name} />
      <p>This is {name}</p>
    </div>
  )
}

SingleCharacter.propTypes = {
  image: propTypes.string.isRequired,
  name: propTypes.string.isRequired
}

export default SingleCharacter
