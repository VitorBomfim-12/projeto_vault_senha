import Authors from "../components/Authors"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import TechCard from "../components/TechCard"

function AboutPage() {
    const techArray = [
        {
            category: 'frontend',
            name: 'react',
            description: 'O Framework React foi a stack principal do FrontEnd, utilizando de auxílios como Context API, React Router Dom e React Hook Form.'
        },
        {
            category: 'frontend',
            name: 'typescript',
            description: 'Utilizado para garantir a tipagem estática e a integridade dos dados, permitindo a criação de interfaces para as entidades da aplicação e reduzindo a chance de erros durante a fase de desenvolvimento.'
        },
        {
            category: 'frontend',
            name: 'sass',
            description: 'Pré-processador empregado para otimizar a estilização. Com exceção do PrimeReact, toda a interface visual foi desenvolvida de forma personalizada.'
        },
        {
            category: 'backend',
            name: 'api rest',
            description: 'A arquitetura do Vault-76 baseia-se em uma API REST, o que garantiu o desacoplamento entre as camadas e garantiu que as equipes de Front-End e Back-End trabalhassem separadamente.'
        },
        {
            category: 'backend',
            name: 'python',
            description: 'Linguagem central do Back-End, utilizada sob a metodologia da Programação Orientada a Objeto, favoreceu a organização e adaptabilidade do código.'
        },
        {
            category: 'backend',
            name: 'flask',
            description: 'Micro-framework responsável pela lógica de rotas e integração. Utilizou-se do ecossistema Flask (como Flask RESTful) para comunicação eficiente entre banco MySQL e a aplicação.'
        },
    ]

    const devArray = [
        {
            picture: '/picture',
            type: 'FrontEnd',
            name: 'Taís Souza',
            description: 'Atuei como UI/UX designer e programadora FrontEnd responsável pela introdução do React ao projeto.',
            linkedin: 'link.linkedin',
            github: 'link.github'
        },
        {
            picture: '/picture',
            type: 'BackEnd',
            name: 'Vitor Bomfim',
            description: 'Lorem Ipsium',
            linkedin: 'link.linkedin',
            github: 'link.github'
        },
        {
            picture: '/picture',
            type: 'BackEnd',
            name: 'Hugo Leonardo',
            description: 'Lorem Ipsium',
            linkedin: 'link.linkedin',
            github: 'link.github'
        },
    ]


    return (
        <main className="about-main">
            <Navbar />
            <section className="about__cta">
                <div className="about__headers">
                    <h2>Gerenciador de credenciais empresarial</h2>
                    <h1>Sobre o Projeto Vault 76</h1>
                    <p>Da ideia ao desenvolvimento de uma aplicação independente por estudantes da FATEC SJC.</p>
                </div>
                <div className="about__details-container">

                </div>
            </section>
            <section className="about__info">
                <div className="about__info-header">
                    <h2>OBJETIVO</h2>
                    <h3>técnico</h3>
                </div>
                <div className="about__info-texts">
                    <p>Feito por estudantes do curso de Análise e Desenvolvimento de Sistemas e Desenvolvimento de Software Multiplataforma da FATEC-SJC.</p>
                    <p>Com  o objetivo de ser uma atividade prática para desenvolvimento de habilidades em  <b>desenvolvimento WEB FrontEnd e BackEnd.</b> </p>
                    <p>Treino de <b>POO</b>, princípios de <b>segurança da informação</b> e desenvolvimento de produtos voltados a <b>empresas.</b></p>
                </div>
            </section>
            <section className="about__description">
                <p>O Vault-76 é um cofre de senhas de uso corporativo, com funcionalidades de gestão de TI por parte do administrador e consumo de API para verificação de possíveis senhas vazadas</p>
            </section>
            <section className="about__tech">
                {techArray.map((card, index)=> <TechCard name={card.name} category={card.category} description={card.description} key={index} />)}
            </section>
            <section className="about__authors">
                {devArray.map((dev, index)=> <Authors name={dev.name} type={dev.type} picture={dev.picture} linkedin={dev.linkedin} github={dev.github} description={dev.description} key={index} />)}
            </section>
            <Footer />
        </main>
    )
}

export default AboutPage
