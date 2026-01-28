import { BrowserRouter, Route, Routes } from "react-router-dom";

import VaultPage from "./pages/VaultPage";
import GenPasswordPage from "./pages/GenPasswordPage";
import VerifyPasswordPage from "./pages/VerifyPasswordPage";
import AboutPage from "./pages/AboutPage";
import DefaultLayout from "./pages/layout/DefaultLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index path="/" element={<VaultPage />} />
          <Route path="gerador-senhas" element={<GenPasswordPage />} />
          <Route path="verificador-senhas" element={<VerifyPasswordPage />} />
          <Route path="sobre" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;