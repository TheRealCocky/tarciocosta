// src/Pages/ProjetoDetalhe.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const dadosProjetos = {
    'elevafit': {
        titulo: "ElevaFit Supplement",
        descricao: "Marca de suplementos aprovada pela FDA, atuando em Lisboa e Luanda.",
        detalhes: "Foco em nutrição desportiva, atletas africanos e impacto social.",
        imagem: "https://via.placeholder.com/600x400?text=ElevaFit"
    },
    'digital-move': {
        titulo: "Digital Move",
        descricao: "Startup angolana com mais de 170 colaboradores.",
        detalhes: "Automação, branding, foco em soluções digitais em África.",
        imagem: "https://via.placeholder.com/600x400?text=Digital+Move"
    },
    'clube-dos-genios': {
        titulo: "Clube dos Génios",
        descricao: "Plataforma de educação financeira transformadora.",
        detalhes: "Educação sobre mindset, investimento e independência financeira.",
        imagem: "https://via.placeholder.com/600x400?text=Clube+dos+Génios"
    }
};

const ProjetoDetalhe = () => {
    const { id } = useParams();
    const projeto = dadosProjetos[id];

    if (!projeto) {
        return <div className="text-center py-20 text-red-600">Projeto não encontrado.</div>;
    }

    return (
        <div className="min-h-screen bg-white text-black py-10 px-4 md:px-10">
            <div className="max-w-4xl mx-auto">
                <img src={projeto.imagem} alt={projeto.titulo} className="rounded-xl mb-6" />
                <h1 className="text-4xl font-bold mb-4">{projeto.titulo}</h1>
                <p className="text-lg mb-4">{projeto.descricao}</p>
                <p className="text-gray-700">{projeto.detalhes}</p>
            </div>
        </div>
    );
};

export default ProjetoDetalhe;
