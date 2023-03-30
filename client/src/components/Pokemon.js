import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Pokemon = () => {

    const { pokeName } = useParams()
    const [pokemonName, setPokemonName] = useState(null)

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
            .then((response) => {
                console.log(response.data)
                setPokemonName(response.data.sprites.front_shiny)
            })
            .catch((err) => {
                console.log("Something went wrong: ", err)
            })
    }, [])

    return (

        <div>
            <h2>useParams</h2>
            <hr />
            {
                pokemonName ? 
                <img src={pokemonName} alt='Pokemon' /> :
                <h2>...awaiting pokemon</h2>
            }
        </div>

    )

}

export default Pokemon