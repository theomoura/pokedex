import { useState, useEffect } from 'react'

const useTitle = (setTitle, search) => {

  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    if (setTitle) {
      setPokemon(search)
      document.title = `Pokemon ${pokemon}`;
    } else {
      setPokemon(null)
      document.title = `Pokemon`;
    }
  })
}

export default useTitle