import { Outlet } from "react-router-dom"
import Sidebar from "../../components/Sidebar"
import type { Dispatch, SetStateAction } from "react"
import Header from "../../components/Header"

function DefaultLayout({isOpen, setIsOpen, setIsNewPasswordVisible}: {isOpen: boolean,setIsOpen:Dispatch<SetStateAction<boolean>>,setIsNewPasswordVisible:Dispatch<SetStateAction<boolean>>}) {
    return (
        <main className="main">
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} setIsNewPasswordVisible = {setIsNewPasswordVisible} />
            <section className="page">
                <Header />
                <div className="content">
                    <Outlet />
                </div>
                {!isOpen && <footer className="footer"><p>©  Vault 76 | Todos os direitos reservados </p></footer>}
            </section>
        </main>
    )
}

export default DefaultLayout
