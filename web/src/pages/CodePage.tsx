import Logo_bw from "../components/Logo_bw";
import { Button } from "primereact/button";
import { InputOtp } from "primereact/inputotp";


function CodePage() {
    return (
        <>
            <div className="login__header">
                <Logo_bw className="login__logo" />
                <div className="login__greetings">
                    <h1>Digite o código de verificação</h1>
                    <p>Enviamos um código para o <b>email@gmail.com</b></p>
                </div>
            </div>
            <form className="login__form login__code">
                <InputOtp length={6} />
                <p>Não recebeu o código? <b>Clique aqui para reenviar</b></p>
                <Button label="Verificar" severity="secondary" />
            </form>
        </>
    )
}

export default CodePage
