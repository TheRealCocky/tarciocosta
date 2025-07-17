import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const mediaItems = [
    {
        titulo: "Entrevista na Forbes África",
        descricao: "Tárcio fala sobre inovação digital e empreendedorismo em Angola.",
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
        titulo: "Entrevista em vídeo - TPA",
        descricao: "Participação especial em um programa nacional.",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        titulo: "Artigo na Revista Economia",
        descricao: "Tárcio entre os jovens que impulsionam a economia digital.",
        link: "https://example.com/artigo1",
        imagem: "https://img.freepik.com/vetores-premium/artigo-da-noticia_23-2147508429.jpg"
    },
    {
        titulo: "Entrevista na Platina FM",
        descricao: "Visão sobre startups e impacto da juventude empreendedora.",
        link: "https://example.com/platina",
        imagem: "https://media.istockphoto.com/id/1211656723/pt/vetorial/radio-broadcasting-studio-on-air-flat-color-vector-illustration.jpg"
    }
];

const Media = () => {
    const navigate = useNavigate();

    return (
        <section className="bg-[#1e293b] text-white py-16 px-4 mt-10">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    className="text-4xl font-bold text-center mb-8"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Na Mídia
                </motion.h2>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
                    simulateTouch={true}
                    preventClicks={true}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {mediaItems.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-[#334155] rounded-xl  overflow-hidden shadow-md hover:shadow-yellow-400 transition-all p-5 h-full flex my-10 flex-col justify-between">
                                {item.video ? (
                                    <div className="w-full h-48 rounded mb-4 overflow-hidden">
                                        <iframe
                                            className="w-full h-full pointer-events-none"
                                            src={item.video}
                                            title={item.titulo}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                ) : (
                                    <div className="relative group">
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block pointer-events-auto group-hover:scale-[1.02] transition-transform"
                                        >
                                            <img
                                                src={item.imagem}
                                                alt={item.titulo}
                                                className="w-full h-36 object-contain rounded mb-3"
                                            />
                                        </a>
                                    </div>
                                )}
                                <h4 className="text-lg font-semibold">{item.titulo}</h4>
                                <p className="text-sm text-gray-300 mt-2">{item.descricao}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="text-center mt-10">
                    <button
                        onClick={() => navigate('/media/todos')}
                        className="px-6 py-3 bg-yellow-400 text-gray-800 font-semibold rounded-lg shadow hover:bg-yellow-300 transition"
                    >
                        Ver tudo
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Media;





