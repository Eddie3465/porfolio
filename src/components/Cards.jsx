import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({ cards }) => {
    return (
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8'>
            {cards.map((item, index) => (
                <Link to={`/product/${item.id}`} key={index}> {/* Enlace al detalle del producto */}
                    <div
                        className='border shadow-lg rounded-lg hover:scale-105 duration-300'
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className='w-full h-[200px] object-cover rounded-t-lg'
                        />
                        <div className='flex justify-between px-2 py-4'>
                            <p className='font-bold'>{item.name}</p>
                            <p>
                                <span className='bg-pink-500 text-white p-1 rounded-full'>
                                    {item.price}
                                </span>
                            </p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Cards;
