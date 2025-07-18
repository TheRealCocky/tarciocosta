import React from 'react';
import { mediaData } from '../data/mediaData.js';
 // use o mesmo arquivo

const MediaAll = () => {
    return (
        <div className="bg-white text-gray-800 py-16 px-6 mt-10">
            <h2 className="text-4xl font-bold text-center mb-12">Na Mídia — Todas as Publicações</h2>

            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                {mediaData.map((item, index) => (
                    <div key={index} className="bg-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                        <img src={item.imagem} alt={item.titulo} className="w-full h-48 object-cover" />
                        <div className="p-5">
                            <h3 className="text-xl font-semibold mb-2">{item.titulo}</h3>
                            <p className="text-sm text-gray-700 mb-4">{item.descricao}</p>
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-4 py-2 text-sm font-semibold bg-blue-600 text-white rounded hover:bg-blue-500 transition"
                            >
                                Ver mais
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MediaAll;

