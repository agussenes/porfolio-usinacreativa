import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/partials/Header/Header';
import Footer from './components/partials/Footer/Footer';
import NotFound from './components/views/NotFound/NotFound';
import ScrollToTop from './components/reutilizables/ScrollToTop';

import Home from './components/views/home/Home';
import ProjectDetail from './components/views/home/subcomponents/ProjectDetail';
import Contacto from './components/views/contacto/Contacto';
import LaUsina from './components/views/laUsina/LaUsina';
import Clientes from './components/views/clientes/Clientes';
import QuienesSomos from './components/views/quienesSomos/QuienesSomos';
import Servicios from './components/views/servicios/Servicios';
import Novedades from './components/views/novedades/Novedades';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Header />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio/:slug" element={<ProjectDetail />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/la-usina" element={<LaUsina />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/novedades" element={<Novedades />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
