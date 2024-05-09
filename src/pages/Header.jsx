import React, { useContext } from 'react';
import { LanguageContext } from '../App';

import es from '../lang/es.json';
import en from '../lang/en.json';
import foto from '../assets/Foto-perfil.png';

import {
    FaGithub, FaLinkedin
} from 'react-icons/fa';

const Header = () => {
    const { language } = useContext(LanguageContext);
    const lang = language === 'es' ? es : en;

    return (
        <div className="h-screen flex flex-col justify-center items-center">
            {/* Contenedor del contenido */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center">
                {/* Sección de texto */}
                <div className="w-full sm:w-1/2 mb-8 sm:mb-0 text-center sm:text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-black">
                        {lang.welcome} <span className='text-cyan-400'>{lang.portfolio} </span>
                    </h2>
                    <p className="text-lg sm:text-xl mb-4 text-black">
                        {lang.intro}
                    </p>
                    <div className="flex items-center justify-center sm:justify-start">
                        <div className="mr-4 my-4">
                            <a href="https://github.com/Eddie3465 " target="_blank">
                                <FaGithub size={30} />
                            </a>
                        </div>
                        <div>
                            <a href="" target='_blank'>
                                <FaLinkedin size={30} />
                            </a>
                        </div>
                    </div>
                    <button className="bg-cyan-400 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded block mx-auto sm:mx-0">
                        <a href="/assets/CV- Eduardo Villalba- Software Developer.pdf" download="CV- Eduardo Villalba- Software Developer.pdf">{lang.download}</a>
                    </button>
                </div>
                {/* Sección de imagen */}
                <div className="w-full sm:w-1/2">
                    <img src={foto} alt="" className="mx-auto sm:mr-4 hidden sm:block rounded-full" />
                </div>
            </div>
        </div>
    );
};

export default Header;
