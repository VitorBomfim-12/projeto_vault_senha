import { BrowserRouter, Route, Routes } from "react-router-dom";

import VaultPage from "./pages/VaultPage";
import GenPasswordPage from "./pages/GenPasswordPage";
import VerifyPasswordPage from "./pages/VerifyPasswordPage";
import AboutPage from "./pages/AboutPage";
import ModalSenha from "./pages/ModalSenha";
import DefaultLayout from "./pages/layout/DefaultLayout";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout isOpen={isOpen} setIsOpen={setIsOpen}  setIsNewPasswordVisible = {setIsNewPasswordVisible} />}>
          <Route index path="/" element={<VaultPage/>} />
          <Route path="/nova-senha" element={<ModalSenha isNewPasswordVisible={isNewPasswordVisible} setIsNewPasswordVisible={setIsNewPasswordVisible} />} />
          <Route path="gerador-senhas" element={<GenPasswordPage />} />
          <Route path="verificador-senhas" element={<VerifyPasswordPage />} />
          <Route path="sobre" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;