import { Button } from "primereact/button";
import type { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import type { Location } from "react-router-dom";

function VaultPage({setIsNewPasswordVisible, location}:{setIsNewPasswordVisible:Dispatch<SetStateAction<boolean>>, location: Location }) {
    


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