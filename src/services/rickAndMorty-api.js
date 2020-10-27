// rick and morty api logic

// getAllCharacters - returns an array of objects (characters {id, name and image})
export const getAllCharacters = async () => {
  const res = await fetch('https://rickandmortyapi.com/api/character')
  const json = await res.json()
  const data = json.results

  // error handling - check for ok 
  // if the response doesn't have an OK 200, then send back the error message
  if (!res.ok) throw 'Error, cannot fetch from api'

  // return the results as an array - map through and grab id, name, image
  const allCharacters = data.map(character => ({
    id: character.id,
    name: character.name,
    image: character.image
  }))


  // send back array of character objects
  return allCharacters
}

// getCharacterById(id) hook - returns a single character object { id, name, gender, status, species, and image }
