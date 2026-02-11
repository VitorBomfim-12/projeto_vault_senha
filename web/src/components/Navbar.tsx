import { NavLink, Link } from "react-router-dom"

function Navbar() {
    return (
        <header className="home__header">
            <Link to="/" className="logo_nav"><img src="/logo_landing_page.svg" alt="" /></Link>
            <span> | </span>
            <NavLink to='/'>HOME</NavLink>
            <span> | </span>
            <NavLink to='/sobre'>SOBRE</NavLink>
            
        </header>
    )
}

export default Navbar
