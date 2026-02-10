import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthenticationContext"
import { useEffect, type ReactNode } from "react";
import LandingPage from "./LandingPage";

function ProtectedRoutes({children}: {children: ReactNode}) {
    const {isAuthenticated} = useAuth();
    const navigate = useNavigate();

    useEffect(function() {
        if(!isAuthenticated) navigate('/');
    }, [isAuthenticated, navigate])

    return isAuthenticated ? children : <LandingPage />;
}

export default ProtectedRoutes
