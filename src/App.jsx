// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

import Index from './pages/Index';
import ProductDetails from './pages/ProductDetails';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Inicio from './pages/Inicio';
import Footer from './components/Footer';

export const LanguageContext = React.createContext();

function App() {
  const [language, setLanguage] = useState('es'); // Estado para el idioma seleccionado

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };



  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      <Router basename="/porfolio">
        <div style={{ height: '100vh', overflowY: 'scroll' }}> {/* Contenedor con altura fija y desplazamiento vertical */}
          <Navbar /> {/* Agrega el Navbar al principio del contenedor */}
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/project" element={<Index />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </LanguageContext.Provider>
  );
}

export default App;
