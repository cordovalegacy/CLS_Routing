import { useNavigate } from "react-router-dom"
import { useState } from "react"

const Form = () => {

    const [userInput, setUserInput] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        userInput.length > 0 ?
        navigate(`/pokemon/${userInput}`):
        setError("Type a valid pokemon")
    }

    return (

        <form onSubmit={submitHandler}>
            <h2>useNavigate</h2>
            <input type="text" onChange={(e) => setUserInput(e.target.value)}/>
            <input type="submit" value="Submit"/>
            {
                error != "" ? <h2>{error}</h2>: null
            }
        </form>

    )

}

export default Form