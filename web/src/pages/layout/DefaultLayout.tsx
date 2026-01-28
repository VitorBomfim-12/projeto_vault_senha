import { Outlet } from "react-router-dom"
import Sidebar from "../../components/Sidebar"

function DefaultLayout() {
    return (
        <main className="main">
            <Sidebar />
            <section className="content">
                <Outlet />
            </section>
        </main>
    )
}

export default DefaultLayout
