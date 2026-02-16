import { Link } from "react-router-dom"

function Footer() {
    return (
        <footer className="home__footer">
            <img src="/logo_white.svg" alt="Logo Vault76" />
            <p>©  Vault 76 | Todos os direitos reservados </p>
            <div className="home__footer-icons">
                <Link to="https://github.com/VitorBomfim-12/projeto_vault_senha.git"><i className="bxl bx-github" /></Link>
                <Link to="mailto:tata.ssouz47@gmail.com"><i className="bxl bx-gmail" /></Link>
            </div>
        </footer>
    )
}

export default Footer
