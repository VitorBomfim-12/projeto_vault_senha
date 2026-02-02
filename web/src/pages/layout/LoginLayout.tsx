import { Outlet } from "react-router-dom";
import StandBy from "../../components/StandBy";

function LoginLayout() {
    return (
        <main className="login-container">
            <StandBy direction="right" id="1" />
            <StandBy direction="left" id="2" />
            <StandBy direction="right" id="3" />
            <StandBy direction="left" id="4" />
            <section className="login__card">
                <div className="login__content">
                    <Outlet /> 
                </div>
            </section>
        </main>
    )
}

export default LoginLayout
