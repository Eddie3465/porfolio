import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { data } from '../data/data';
import { Link } from 'react-router-dom';

const ProductDetails = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        const product = data.find(product => product.id.toString() === productId);
        if (product) {
            setSelectedProduct(product);
        } else {
            navigate('/');
        }
    }, [productId, navigate]);

    if (!selectedProduct) {
        return <div className="container mx-auto py-24">Cargando...</div>;
    }

    return (
        <div className="container mx-auto py-8">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden md:flex">
                {/* Imagen del producto */}
                <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
                    <img
                        src={selectedProduct.image}
                        alt={selectedProduct.name}
                        className="object-contain"
                        style={{ maxWidth: '100%', maxHeight: '400px' }}
                    />
                </div>

                {/* Detalles del producto */}
                <div className="p-8 md:w-1/2">
                    <h1 className="text-3xl font-semibold mb-4">{selectedProduct.name}</h1>
                    <p className="text-gray-800 mb-4"><span className="text-sm text-gray-600 font-semibold">Categoría: </span>{selectedProduct.category}</p>
                    <p className="text-gray-800 mb-8">{selectedProduct.Detalle}</p>

                    {/* Detalles de venta */}
                    <div className="flex flex-col items-start">
                        <span className="text-2xl text-green-600 font-semibold mb-4">Precio: ${selectedProduct.price}</span>
                        <div className="text-sm text-gray-600 mb-8">
                            
                            <p className="mb-2 font-semibold">Métodos de Pago</p>
                            <ul className="list-disc pl-4">
                                <li>Hasta 12 cuotas sin tarjeta</li>
                                <li>Tarjetas de crédito</li>
                                <li>Tarjetas de débito</li>
                                <li>Efectivo</li>
                                <li>Transferencia</li>
                            </ul>
                        </div>
                        <div>
                            <Link to="/project" className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 mb-4 w-full mr-4">
                                Volver
                            </Link>
                            <a href={selectedProduct.link} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 w-full text-center">
                                Ver Demo
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
