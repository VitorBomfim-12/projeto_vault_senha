import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import { useAppNavigation } from "../contexts/NavigationContext";

function VaultPage() {
    const { setIsNewPasswordVisible, location } = useAppNavigation();

    return (
        <>
            <h1>Cofre</h1>
            <Link
                to="/nova-senha" 
                state={{ backgroundLocation: location }} 
                onClick={()=>{
                    setIsNewPasswordVisible(true);
                    sessionStorage.setItem('modal_background', location.pathname);
                }}
            >
                <Button label="Nova Senha" icon="pi pi-external-link" onClick={() => setIsNewPasswordVisible(true)} />
            </Link>
        </>
    )
}

export default VaultPage;