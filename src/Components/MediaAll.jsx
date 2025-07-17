import React from 'react';

const mediaData = [
    {
        titulo: "Entrevista na Forbes África",
        descricao: "Tarcio fala sobre inovação digital e empreendedorismo em Angola.",
        link: "https://forbesafrica.com",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Forbes_logo.svg/2560px-Forbes_logo.svg.png"
    },
    {
        titulo: "Podcast Jovens Empreendedores",
        descricao: "Discussão sobre oportunidades e desafios do mundo digital.",
        link: "https://spotify.com",
        imagem: "https://cdn-icons-png.flaticon.com/512/5968/5968926.png"
    },
    {
        titulo: "TPA - Entrevista em vídeo",
        descricao: "Participação especial em um programa nacional.",
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        imagem: "https://img.freepik.com/vetores-premium/icone-de-video_444089-265.jpg"
    },
    {
        titulo: "Revista Economia",
        descricao: "Tarcio entre os jovens que impulsionam a economia digital.",
        link: "https://example.com/artigo1",
        imagem: "https://img.freepik.com/vetores-premium/artigo-da-noticia_23-2147508429.jpg"
    },
    {
        titulo: "Platina FM",
        descricao: "Visão sobre startups e juventude empreendedora.",
        link: "https://example.com/platina",
        imagem: "https://media.istockphoto.com/id/1211656723/pt/vetorial/radio-broadcasting-studio-on-air-flat-color-vector-illustration.jpg"
    }
];

const MediaAll = () => {
    return (
        <div className="bg-white text-gray-800 py-16 px-6">
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
