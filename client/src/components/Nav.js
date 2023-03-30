import { Link } from "react-router-dom"

const Nav = () => {

    return (

        <nav>
            <Link to='/pokemon'>Pokemon</Link>
            <Link to='/'><h2>Home</h2></Link>
            <Link to='/form'>Form</Link>
        </nav>

    )

}

export default Nav