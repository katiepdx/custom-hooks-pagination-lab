// getAllCharacters - returns an array of objects (characters {id, name and image})
export const getAllCharacters = async (pageCount) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${pageCount}`)
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

// getCharacterById - returns a single character object { id, name, gender, status, species, and image }
export const getCharacterById = async (id) => {
  console.log(id, 'API')

  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
  const data = await res.json()

  if (!res.ok) throw 'Error, cannot fetch from api'

  // id, name, gender, status, species, and image
  const singleCharacter = {
    id: data.id,
    name: data.name,
    gender: data.gender,
    status: data.status,
    species: data.species,
    image: data.image
  }

  console.log(singleCharacter, 'SINGLE CHARACTER FROM API FILE')
  // send back single character obj
  return singleCharacter
}
