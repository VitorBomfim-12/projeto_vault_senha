import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import AccordionHome from "../components/AccordionHome"

function LandingPage() {
    return (
        <main className="landing-main">
            <Navbar />
            <section className="cta">
                <div className="home__cta">
                    <h1>Vault 76</h1>
                    <h2>Seu gerenciador de senhas <b>seguro, organizado, prático</b> e <b>eficiente</b> no controle das credenciais da sua equipe</h2> 
                    <p id="text">SUAS SENHAS PROTEGIDAS</p>
                    <div className="home__login-container">
                        <img src="/icons-details.svg" alt="Icones" />
                        <Link to='/auth/login'>Fazer login <i className="bx bx-arrow-right-stroke" /></Link>
                    </div>   
                    <p>Não tem uma conta? Cadastre-se aqui</p>      
                </div>
            </section>  
            <section className="home__accordions-container">
                <AccordionHome title="cofres confiáveis" lead="Crie cofres para todas as suas senhas e nós te manteremos atualizados quanto a segurança e integridade dos seus dados sensíveis." text="Durante o armazenamento das senhas de sua equipe, tenha a possibilidade de gerar padrões únicos com o nosso gerador de senhas próprio!" />
                <AccordionHome title="controle de usuários" lead="Tenha acesso controlado quanto as contas dos seus colaboradores em uma interface intuitiva e organizada." text="Como administrador, você mesmo poderá criar as contas de seus funcionários." />
                <AccordionHome title="dados seguros" lead="Armazenamos seus dados de forma segura e com criptografia avançada." text="" />
            </section>
        </main>
    )
}

export default LandingPage
