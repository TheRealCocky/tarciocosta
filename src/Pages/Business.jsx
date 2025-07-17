import React from 'react';
import { Link } from 'react-router-dom';

const projetos = [
    {
        id: "elevafit",
        titulo: "ElevaFit Supplement",
        descricao: "Marca internacional de suplementos aprovada pela FDA.",
        imagem: "https://via.placeholder.com/600x400?text=ElevaFit",
    },
    {
        id: "digital-move",
        titulo: "Digital Move",
        descricao: "Startup angolana com 170+ colaboradores.",
        imagem: "https://via.placeholder.com/600x400?text=Digital+Move",
    },
    {
        id: "clube-dos-genios",
        titulo: "Clube dos Génios",
        descricao: "Plataforma de educação financeira com impacto global.",
        imagem: "https://via.placeholder.com/600x400?text=Clube+dos+Génios",
    }
];

const Business = () => (
    <section className="bg-[#0c0c0c] text-white py-16 px-4 md:px-10 mt-10">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 text-yellow-400">
                Projetos de Destaque
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {projetos.map((item) => (
                    <div key={item.id} className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg">
                        <img src={item.imagem} alt={item.titulo} className="h-48 w-full object-cover" />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold mb-2">{item.titulo}</h3>
                            <p className="text-gray-300 mb-4">{item.descricao}</p>
                            <Link
                                to={`/projetos/${item.id}`}
                                className="inline-block bg-yellow-500 text-black font-semibold px-4 py-2 rounded-md hover:bg-yellow-400 transition"
                            >
                                Saber Mais
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Business;






