import { Route, Routes, useLocation } from "react-router-dom";
import VaultPage from "./pages/VaultPage";
import GenPasswordPage from "./pages/GenPasswordPage";
import VerifyPasswordPage from "./pages/VerifyPasswordPage";
import AboutPage from "./pages/AboutPage";
import ModalSenha from "./pages/ModalSenha";
import DefaultLayout from "./pages/layout/DefaultLayout";
import PageNotFound from "./pages/PageNotFound";
import { NavigationProvider } from "./contexts/NavigationContext";
import type { Location } from "react-router-dom";
import type { LocationState } from "./types/modal";
import LoginPage from "./pages/LoginPage";
import LoginLayout from "./pages/layout/LoginLayout";
import CodePage from "./pages/CodePage";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import Profile from "./pages/Profile";

function App() {
  const location = useLocation() as Location<LocationState>;
  const background = location.state?.backgroundLocation;

  return (
    <NavigationProvider location={location} background={background}>
      <Routes location={background || location}>
        <Route path="/" element={<ProtectedRoutes><DefaultLayout /></ProtectedRoutes>}>
          <Route index element={<VaultPage />} />
          <Route path="gerador-senhas" element={<GenPasswordPage />} />
          <Route path="verificador-senhas" element={<VerifyPasswordPage />} />
          <Route path="perfil" element={<Profile />} />
        </Route>
        <Route path="sobre" element={<AboutPage />} />
        <Route path="*" element={<PageNotFound />} />

        <Route path="auth" element={<LoginLayout />} >
          <Route index path="login" element={<LoginPage />} />
          <Route path="verificacao" element={<CodePage />} />
        </Route>
      </Routes>

      {background && (
        <Routes>
          <Route path="*" element={null} />
          <Route path="/nova-senha" element={<ModalSenha />} />
        </Routes>
      )
      }
      
    </NavigationProvider>
  );
}

export default App;