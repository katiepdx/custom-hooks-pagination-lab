// tests that a singleCharacter item renders to the screen using test data

import React from 'react'
import { render } from '@testing-library/react'
import SingleCharacter from './SingleCharacter'

describe('Tests SingleCharacter component', () => {
  it('should render single character item to the page', () => {
    const { asFragment } = render(<SingleCharacter
      image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
      name="Rick Sanchez"
    />)

    expect(asFragment()).toMatchSnapshot();
  })
})
