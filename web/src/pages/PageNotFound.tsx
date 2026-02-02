import { Button } from "primereact/button"
import Logo_img from "../components/Logo_img"
import { useNavigate } from "react-router-dom"

function PageNotFound() {
    const navigate = useNavigate();

    return (
        <main className="content--not-found">
            <div className="not-found">
                <div className="not-found__container">    
                    <div className="not-found__header">
                        <Logo_img className = 'not-found__logo' />
                        <h1>404</h1>
                        <h2>A página não foi encontrada!</h2>
                    </div>
                    <div className="not-found__content">
                        <p>Parece que a página que você estava procurando não existe. Retorne para onde estava ou tente recarregar.</p>
                    </div>
                    <div className="not-found__footer">
                        <Button label="Voltar" onClick={()=> navigate(-1)} severity="secondary" />
                        <Button label="Reportar Problema" />
                    </div>
                </div>
            </div>
        </main>
        
    )
}

export default PageNotFound
