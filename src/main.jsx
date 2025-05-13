import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Importación de estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'animate.css/animate.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap JS (con Popper incluido)

// Importación de Toastify (para alertas)
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// SEO HelmetProvider
import { HelmetProvider } from 'react-helmet-async';

// Importación de estilos globales y variables (branding)
import './styles/global.css';
import './styles/variables.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
      {/* Toastify container global */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </HelmetProvider>
  </React.StrictMode>
);
