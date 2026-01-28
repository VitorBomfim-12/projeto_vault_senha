import { Outlet } from "react-router-dom"
import Sidebar from "../../components/Sidebar"
import type { Dispatch, SetStateAction } from "react"

function DefaultLayout({isOpen, setIsOpen}: {isOpen: boolean,setIsOpen:Dispatch<SetStateAction<boolean>>}) {
    return (
        <main className="main">
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            <section className="content">
                
                <Outlet />
            </section>
        </main>
    )
}

export default DefaultLayout
