import React, { useContext } from 'react';
import { data } from '../data/data';
import { Link } from 'react-router-dom';

import { LanguageContext } from '../App';
import es from '../lang/es.json';
import en from '../lang/en.json';

const Index = () => {
    const { language } = useContext(LanguageContext);
    const lang = language === 'es' ? es : en;
    const works = lang.works;

    return (
        <div className='container mx-auto px-4 py-8'>
            <h1 className='text-cyan-400 font-bold text-4xl text-center mb-8 mt-16'> {/* Añadido mt-16 */}
                {lang.lastProjects}
            </h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {data.map((item) => (
                    <div key={item.id} className='border shadow-lg rounded-lg overflow-hidden'>
                        <Link to={`/product/${item.id}`}>
                            <img
                                src={item.image}
                                alt={item.name}
                                className='w-full h-64 object-cover object-center'
                            />
                        </Link>
                        <div className='p-4'>
                            <p className='text-lg font-bold mb-2'>{item.name}</p>
                            <p className='text-sm text-gray-600'>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Index;
