import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";; 
import 'primereact/resources/primereact.min.css'; 
import 'primeicons/primeicons.css'; 

import './styles/css/style.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';
import { AuthenticationProvider } from './contexts/AuthenticationContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthenticationProvider>
      <PrimeReactProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PrimeReactProvider>
    </AuthenticationProvider>
  </StrictMode>,
)
