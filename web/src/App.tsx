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

function App() {
  const location = useLocation() as Location<LocationState>;
  const background = location.state?.backgroundLocation;

  return (
    <NavigationProvider location={location} background={background}>
      <Routes location={background || location}>
        <Route path="/" element={<DefaultLayout />}>
          <Route index path="/" element={<VaultPage />} />
          <Route path="gerador-senhas" element={<GenPasswordPage />} />
          <Route path="verificador-senhas" element={<VerifyPasswordPage />} />
          <Route path="sobre" element={<AboutPage />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
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