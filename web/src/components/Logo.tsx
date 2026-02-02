import { Link } from "react-router-dom"

function Logo() {
    return (
        <Link to="/">
            <img src="logo_written.svg" className="logo" />
        </Link>
    )
}

export default Logo
