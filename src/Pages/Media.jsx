import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Tarcio from '../images/tarcio2.png';
import Tarcio2 from '../images/tarcio1.png';
const mediaItems = [
    {
        "titulo": "Forbes África Lusófona — Jovem angolano emprega mais de 170 pessoas",
        "descricao": "Matéria da Forbes África Lusófona destaca Como Tárcio Costa, CEO da Digital Move, emprega mais de 170 pessoas aos 18 anos.",
        "link": "https://forbesafricalusofona.com/aos-18-anos-jovem-angolano-ja-emprega-mais-de-170-pessoas/",
        "imagem": Tarcio2
    },
    {
        "titulo": "Forbes África Lusófona — Investimento na ElevaFit",
        "descricao": "A Forbes destacou o investimento de Tárcio Costa na marca ElevaFit Supplement, patenteada nos EUA.",
        "link": "https://forbesafricalusofona.com/empresario-tarcio-costa-investe-45-mil-euros-na-abertura-da-elevafit-supplement-patenteada-nos-estados-unidos/",
        "imagem":Tarcio
    },

    {
        titulo: "Entrevista no programa da Blindada - Zap News",
        descricao: "Participação especial no programa mais visto da televisão angolana.",
        link: "https://www.youtube.com/watch?v=RZLNVRLMtO8&list=PLzQkLKxL3y_yD1qvbYLAZG0fmHavx3qEc&index=1",
        imagem: "https://img.youtube.com/vi/RZLNVRLMtO8/hqdefault.jpg"
    },
    {
        titulo: "Podcast J@CAST",
        descricao: "Tárcio fala sobre mindset, negócios digitais e a realidade do empreendedorismo angolano.",
        link: "https://www.youtube.com/watch?v=tfyZ2QxRVDo&t=4944s",
        imagem: "https://img.youtube.com/vi/tfyZ2QxRVDo/hqdefault.jpg"
    },

    {
        titulo: "(PT)I EP 10 – Podcast Internacional",
        descricao: "Tárcio Costa em conversa com Allen Macuacua e Kenneth Khensile sobre liderança africana.",
        link: "https://www.youtube.com/watch?v=oYiB3xiMhRs",
        imagem: "https://img.youtube.com/vi/oYiB3xiMhRs/hqdefault.jpg"
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





