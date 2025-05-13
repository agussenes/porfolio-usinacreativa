import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importamos componentes parciales
import Header from './components/partials/Header/Header';
import Footer from './components/partials/Footer/Footer';

// Importamos vistas
import Home from './components/views/Home/Home';
// import About from './components/views/About/About';


import NotFound from './components/views/NotFound/NotFound'

function App() {
  return (
    <Router>
      {/* Header siempre visible */}
      <Header />

      {/* Contenido dinámico basado en la ruta */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* Agregamos más rutas luego aquí */}


          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Footer siempre visible */}
      <Footer />
    </Router>
  );
}

export default App;
