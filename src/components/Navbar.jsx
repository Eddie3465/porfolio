import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom'; // Importamos Link desde react-router-dom
import { LanguageContext } from '../App';

function Navbar({ scrollToSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const { changeLanguage } = useContext(LanguageContext);

  const handleItemClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-zinc-950 py-4 fixed top-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="text-cyan-400 text-xl font-bold">My Portfolio</div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={isOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <ul className="hidden md:flex space-x-4">
            <li>
              <Link to="/" className="text-white hover:text-cyan-400" onClick={handleItemClick}>
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/experience" className="text-white hover:text-cyan-400" onClick={handleItemClick}>
                Experiencia
              </Link>
            </li>
            <li>
              <Link to="/project" className="text-white hover:text-cyan-400" onClick={handleItemClick}>
                proyectos
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-cyan-400" onClick={handleItemClick}>
                Contacto
              </Link>
            </li>
            <li>
              <button
                onClick={() => setLanguageOpen(!languageOpen)}
                className="text-white hover:text-cyan-400 focus:outline-none"
                aria-expanded={languageOpen ? "true" : "false"}
              >
                Idioma
                <svg
                  className="h-5 w-5 inline-block ml-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path fillRule="evenodd" d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-.707.293z" clipRule="evenodd" />
                </svg>
              </button>
              {languageOpen && (
                <div className="absolute mt-2 w-40 rounded-md shadow-lg bg-zinc-950 ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <button onClick={() => { changeLanguage('es'); setLanguageOpen(false); }} className="block text-white hover:bg-cyan-400 hover:text-black w-full px-4 py-2 text-left text-base font-medium" role="menuitem">
                      Español
                    </button>
                    <button onClick={() => { changeLanguage('en'); setLanguageOpen(false); }} className="block text-white hover:bg-cyan-400 hover:text-black w-full px-4 py-2 text-left text-base font-medium" role="menuitem">
                      English
                    </button>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={handleItemClick}>
            Inicio
          </Link>
          <Link to="/experience" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={handleItemClick}>
            Experiencia
          </Link>
          <Link to="/project" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={handleItemClick}>
            proyectos
          </Link>
          <Link to="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={handleItemClick}>
            Contacto
          </Link>
          {languageOpen && (
            <div className="mt-2 w-40 rounded-md shadow-lg bg-zinc-950 ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <button onClick={() => { changeLanguage('es'); setLanguageOpen(false); }} className="block text-white hover:bg-cyan-400 hover:text-black w-full px-4 py-2 text-left text-base font-medium" role="menuitem">
                  Español
                </button>
                <button onClick={() => { changeLanguage('en'); setLanguageOpen(false); }} className="block text-white hover:bg-cyan-400 hover:text-black w-full px-4 py-2 text-left text-base font-medium" role="menuitem">
                  English
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
