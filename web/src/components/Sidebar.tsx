import { Link, NavLink } from "react-router-dom"
import Logo from "./Logo"
import classNames from "classnames"
import type { Dispatch, SetStateAction } from "react"
import type { Location } from "react-router-dom";


function Sidebar({isOpen, setIsOpen, setIsNewPasswordVisible, location}: {isOpen: boolean,setIsOpen:Dispatch<SetStateAction<boolean>>, setIsNewPasswordVisible:Dispatch<SetStateAction<boolean>>, location: Location}) {
    return (
        <aside className={classNames("sidebar", {"sidebar--closed": !isOpen})}>
            <div className="sidebar__header">
                {isOpen ? 
                    <>
                        <Logo />
                        <button className="sidebar__button" onClick={()=>setIsOpen(false)}><i className='bx  bx-dock-left-alt'></i> </button>
                    </> 
                : <button className="sidebar--open" onClick={()=>setIsOpen(true)}><i className='bx  bx-menu'></i> </button>}
                
            </div>
            
            <Link
                to="/nova-senha" 
                state={{ backgroundLocation: location }} 
                onClick={()=>{
                    setIsNewPasswordVisible(true);
                    sessionStorage.setItem('modal_background', location.pathname);
                }}
            >
                <button className="sidebar__button--new">
                <i className='bx  bx-plus'></i><span className="sidebar__nav-name">Nova Senha</span></button>
            </Link>
            <ul className="sidebar__list">
                <li><NavLink to="/"><i className='bx  bx-lock'></i> <span className="sidebar__nav-name">Cofre</span></NavLink></li>
                <li><NavLink to="/gerador-senhas"><i className='bx  bx-copy-plus'></i><span className="sidebar__nav-name">Gerador de Senhas</span></NavLink></li>
                <li><NavLink to="/verificador-senhas"><i className='bx  bx-checks'></i><span className="sidebar__nav-name">Verificador de Senhas</span></NavLink></li>
                <li className="item-4"><Link to='/sair'><i className='bx  bx-arrow-out-right-square-half'></i> <span className="sidebar__nav-name">Sair</span></Link></li>
                <li><NavLink to="/sobre"><i className='bx  bx-article'></i> <span className="sidebar__nav-name">Sobre</span></NavLink></li>
            </ul>
        
            <span className="sidebar__copyright">©  Vault 76 | Todos os direitos reservados </span>
        </aside>
    )
}

export default Sidebar
