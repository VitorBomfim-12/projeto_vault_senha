import { Outlet } from "react-router-dom"
import Sidebar from "../../components/Sidebar"
import Header from "../../components/Header"
import { useAppNavigation } from "../../contexts/NavigationContext";

function DefaultLayout() {
    const { isSidebarOpen } = useAppNavigation();


    return (
        <main className="main">
            <Sidebar />
            <div className="pseudoHeader"></div>
            <section className="page">
                <Header />
                <div className="content">
                    <Outlet />
                </div>
                {!isSidebarOpen && <footer className="footer"><p>©  Vault 76 | Todos os direitos reservados </p></footer>}
            </section>
        </main>
    )
}

export default DefaultLayout
