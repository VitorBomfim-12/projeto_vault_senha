import Logo_bw from "../components/Logo_bw";
import CustomInputGroup from "../components/CustomInputGroup";
import { Button } from "primereact/button";

function LoginPage() {
    return (
        <>
            <div className="login__header">
                <Logo_bw className="login__logo" />
                <div className="login__greetings">
                    <h1>Bem vindo de volta!</h1>
                    <p>Por favor, insira suas credenciais.</p>
                </div>
            </div>
            <form className="login__form">
                <CustomInputGroup label="Email" placeholder="Digite seu endereço de Email..." />
                <CustomInputGroup label="Senha" placeholder="Digite sua Senha..." type="password" />
                <Button label="Entrar"   />
            </form>
        </>
    )
}

export default LoginPage
