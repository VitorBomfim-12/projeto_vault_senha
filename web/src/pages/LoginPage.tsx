import Logo_bw from "../components/Logo_bw";
import CustomInputGroup from "../components/CustomInputGroup";
import { Button } from "primereact/button";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthenticationContext";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    // PERFIL TEMPORÁRIO ENQUANTO NÃO HÁ ENDPOINT DE LOGIN
    const [email, setEmail] = useState<string>("tais.souza@gmail.com");
    const [password, setPassword] = useState<string>("teste");
    const {login, isAuthenticated, error} = useAuth();
    const navigate = useNavigate();

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if(email && password) login(email,password);
    }

    useEffect(function() {
        if(isAuthenticated) navigate('/', {replace: true})
    }, [isAuthenticated, navigate])




    return (
        <>
            <div className="login__header">
                <Logo_bw className="login__logo" />
                <div className="login__greetings">
                    <h1>Bem vindo de volta!</h1>
                    <p>Por favor, insira suas credenciais.</p>
                </div>
            </div>
            <form className="login__form" onSubmit={handleSubmit}>
                <CustomInputGroup label="Email" placeholder="Digite seu endereço de Email..." state={email} setState={setEmail} />
                <CustomInputGroup label="Senha" placeholder="Digite sua Senha..." type="password" state={password} setState={setPassword} />
                {error && <p>{error}</p>}
                <Button label="Entrar"   />
            </form>
        </>
    )
}

export default LoginPage
