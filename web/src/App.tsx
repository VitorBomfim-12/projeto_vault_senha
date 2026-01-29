import { Route, Routes, useLocation } from "react-router-dom";
import type { Location } from "react-router-dom";
import VaultPage from "./pages/VaultPage";
import GenPasswordPage from "./pages/GenPasswordPage";
import VerifyPasswordPage from "./pages/VerifyPasswordPage";
import AboutPage from "./pages/AboutPage";
import ModalSenha from "./pages/ModalSenha";
import DefaultLayout from "./pages/layout/DefaultLayout";
import { useState } from "react";

interface LocationState {
  backgroundLocation?: Location;
}


function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);
  const location = useLocation() as Location<LocationState>;
  const background = location.state?.backgroundLocation;


  return (
    <>
        <Routes location={background || location}>
          <Route path="/" element={<DefaultLayout isOpen={isOpen} setIsOpen={setIsOpen}  setIsNewPasswordVisible = {setIsNewPasswordVisible} location={location} />}>
            <Route index path="/" element={<VaultPage/>} />
            <Route path="gerador-senhas" element={<GenPasswordPage />} />
            <Route path="verificador-senhas" element={<VerifyPasswordPage />} />
            <Route path="sobre" element={<AboutPage />} />
          </Route>
        </Routes>

        {background && (
          <Routes>
            <Route path="/nova-senha" element={<ModalSenha isNewPasswordVisible={isNewPasswordVisible} setIsNewPasswordVisible={setIsNewPasswordVisible} />} />
          </Routes>
        )
        }
    </>
  );
}

export default App;