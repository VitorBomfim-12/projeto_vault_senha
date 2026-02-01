import { Route, Routes } from "react-router-dom";
import {   useState } from "react";
import VaultPage from "./pages/VaultPage";
import GenPasswordPage from "./pages/GenPasswordPage";
import VerifyPasswordPage from "./pages/VerifyPasswordPage";
import AboutPage from "./pages/AboutPage";
import ModalSenha from "./pages/ModalSenha";
import DefaultLayout from "./pages/layout/DefaultLayout";
import PageNotFound from "./pages/PageNotFound";
import { useRouteModal } from "./hooks/useRouteModal";




function App() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [isNewPasswordVisible, setIsNewPasswordVisible] = useState<boolean>(false);

  const {location, background} = useRouteModal(isNewPasswordVisible);




  return (
    <>
      <Routes location={background || location}>
        <Route path="/" element={<DefaultLayout isOpen={isOpen} setIsOpen={setIsOpen}  setIsNewPasswordVisible = {setIsNewPasswordVisible} location={location} />}>
          <Route index path="/" element={<VaultPage location={location} setIsNewPasswordVisible={setIsNewPasswordVisible}  />} />
          <Route path="gerador-senhas" element={<GenPasswordPage />} />
          <Route path="verificador-senhas" element={<VerifyPasswordPage />} />
          <Route path="sobre" element={<AboutPage />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      {background && (
        <Routes>
          <Route path="*" element={null} />
          <Route path="/nova-senha" element={<ModalSenha isNewPasswordVisible={isNewPasswordVisible} setIsNewPasswordVisible={setIsNewPasswordVisible} />} />
        </Routes>
      )
      }
      
    </>
  );
}

export default App;