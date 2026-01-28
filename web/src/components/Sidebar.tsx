import { Link, NavLink } from "react-router-dom"
import Logo from "./Logo"



function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="sidebar__header">
                <Logo />
                <button><i className='bx  bx-dock-left-alt'></i> </button>
            </div>
            <nav>
                <Link to="/"><button>Nova Senha</button></Link>
                <ul>
                    <li><NavLink to="/">Cofre</NavLink></li>
                    <li><NavLink to="/gerador-senhas">Gerador de Senhas</NavLink></li>
                    <li><NavLink to="/verificador-senhas">Verificador de Senhas</NavLink></li>
                    <li><NavLink to="/sobre">Sobre</NavLink></li>
                </ul>
            </nav>
            
           
        </aside>
    )
}

export default Sidebar
