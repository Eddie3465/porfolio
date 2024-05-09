import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 bg-zinc-950 text-gray-300'>
            <div>
                <h1 className='w-full text-3xl font-bold text-cyan-400'>My Portfolio.</h1>
                <p className='py-4'>Pagina creada por Eduardo Villalba, todos los derechos reservados.</p>
                <div className='flex justify-between items-center md:w-[30%] my-4'> {/* Ajusté el margen derecho para acercar los iconos */}
                    <a href="https://github.com/Eddie3465" target='_blank'>
                        <FaGithub size={25} />
                    </a>
                    <a href="" target='_blank'>
                        <FaLinkedin size={25} />
                    </a>
                </div>
            </div>
            <div className='lg:col-span-2 flex justify-between mt-6'>
                <div className="w-1/2">
                    <h6 className='font-medium text-gray-400'>Soluciones</h6>
                    <ul>
                        <li className='py-2 text-sm'>Software a medida</li>
                        <li className='py-2 text-sm'>Web</li>
                        <li className='py-2 text-sm'>App de escritorio</li>
                    </ul>
                </div>
                <div className="w-1/2">
                    <h6 className='font-medium text-gray-400'>Soporte</h6>
                    <ul>
                        <li className='py-2 text-sm'>Base de datos</li>
                        <li className='py-2 text-sm'>Documentación</li>
                        <li className='py-2 text-sm'>API's</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
