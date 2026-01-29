import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import {  useEffect, useState } from "react";
import type { Location } from "react-router-dom";
import VaultPage from "./pages/VaultPage";
import GenPasswordPage from "./pages/GenPasswordPage";
import VerifyPasswordPage from "./pages/VerifyPasswordPage";
import AboutPage from "./pages/AboutPage";
import ModalSenha from "./pages/ModalSenha";
import DefaultLayout from "./pages/layout/DefaultLayout";
import PageNotFound from "./pages/PageNotFound";

interface LocationState {
  backgroundLocation?: Location;
}


function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);
  const location = useLocation() as Location<LocationState>;
  const navigation = useNavigate();
  const background = location.state?.backgroundLocation;

  useEffect(()=> {
     const isModalRoute = location.pathname === '/nova-senha';
     const lastPath = sessionStorage.getItem('modal_background');


    if (isModalRoute && !isNewPasswordVisible && lastPath) {
      sessionStorage.removeItem('modal_background');
      navigation(lastPath, {replace: true});

    }


  }, [location, background, navigation, isNewPasswordVisible])


  return (
    <>
      <Routes location={background || location}>
        <Route path="/" element={<DefaultLayout isOpen={isOpen} setIsOpen={setIsOpen}  setIsNewPasswordVisible = {setIsNewPasswordVisible} location={location} />}>
          <Route index path="/" element={<VaultPage/>} />
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