import { Link, NavLink } from "react-router-dom"
import Logo from "./Logo"
import classNames from "classnames"
import { useAppNavigation } from "../contexts/NavigationContext"
import { useAuth } from "../contexts/AuthenticationContext";


function Sidebar() {
    const { isSidebarOpen, setIsSidebarOpen, setIsNewPasswordVisible, location } = useAppNavigation();
    const {logout, user} = useAuth();

    function handleLogout() {
        logout();
    }


    return (
        <aside className={classNames("sidebar", {"sidebar--closed": !isSidebarOpen})}>
            <div className="sidebar__header">
                {isSidebarOpen ? 
                    <>
                        <Logo />
                        <button className="sidebar__button" onClick={()=>setIsSidebarOpen(false)}><i className='bx  bx-dock-left-alt'></i> </button>
                    </> 
                : <button className="sidebar--open" onClick={()=>setIsSidebarOpen(true)}><i className='bx  bx-menu'></i> </button>}
                
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
                <li className="item-4"><Link to='/' onClick={handleLogout}><i className='bx  bx-arrow-out-right-square-half'></i> <span className="sidebar__nav-name">Sair</span></Link></li>
                {/* <li><NavLink to="/sobre"><i className='bx  bx-article'></i> <span className="sidebar__nav-name">Sobre</span></NavLink></li> */}
                <li className="sidebar__profile">
                    <Link to="/perfil">
                    <div className="sidebar__user">
                        <span>
                            {user?.name?.charAt(0)}
                            {user?.lastName?.charAt(0)}
                        </span>
                    </div>
                    <div className="sidebar__user-info">
                        <h4>{user?.name} {user?.lastName}</h4>
                        <h5>{user?.email}</h5>
                    </div>
                    </Link>
                </li>
            </ul>
        
            <span className="sidebar__copyright">©  Vault 76 | Todos os direitos reservados </span>
        </aside>
    )
}

export default Sidebar
