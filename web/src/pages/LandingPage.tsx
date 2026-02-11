import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import AccordionHome from "../components/AccordionHome"
import CustomInputGroup from "../components/CustomInputGroup"
import { Button } from "primereact/button"
import Footer from "../components/Footer"

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
                        <Link className="home__login-link" to='/auth/login'><span>Fazer login</span> <i className="bx bx-arrow-right-stroke" /></Link>
                    </div>   
                    <p>Não tem uma conta? <a href="#cadastro" className="home__cadastro-btn">Cadastre-se aqui</a></p>      
                </div>
            </section>  
            <section className="home__accordions-container">
                <AccordionHome title="cofres confiáveis" lead="Crie cofres para todas as suas senhas e nós te manteremos atualizados quanto a segurança e integridade dos seus dados sensíveis." text="Durante o armazenamento das senhas de sua equipe, tenha a possibilidade de gerar padrões únicos com o nosso gerador de senhas próprio!" />
                <AccordionHome title="controle de usuários" lead="Tenha acesso controlado quanto as contas dos seus colaboradores em uma interface intuitiva e organizada." text="Como administrador, você mesmo poderá criar as contas de seus funcionários." />
                <AccordionHome title="dados seguros" lead="Armazenamos seus dados de forma segura e com criptografia avançada." text="" />
            </section>
            <section className="home__form" id="cadastro">
                <div className="home__form-header">
                    <h2>Cadastro Administrativo</h2>
                    <h3>Crie uma conta administrativa e a partir dela, controle o acesso dos seus funcionários.</h3>
                    <p>Já tem uma conta? <Link to='/auth/login'>Faça Login</Link></p>
                </div>
                <div className="home__form-content">
                    <p>Cadastre suas informações abaixo e garanta o seu acesso ao Vault 76</p>
                    <form>
                        <CustomInputGroup label="Email" placeholder="Digite o email para o administrador..." />
                        <CustomInputGroup label="Senha" placeholder="Digite a senha..." type="password" />
                        <CustomInputGroup label="Confirmar Senha" placeholder="Digite a senha novamente..." type="password" />
                        <Button severity="secondary" label="Cadastrar" />
                    </form>
                </div>
            </section>
            <Footer />
        </main>
    )
}

export default LandingPage
