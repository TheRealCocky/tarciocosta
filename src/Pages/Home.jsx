import React from 'react';
import Footer from "../Components/Footer.jsx";
import tarcio1 from "../images/tarcio1.png"
const Home = () => {
    return (
        <div className="bg-light min-h-screen font-sans text-dark">
            {/* Hero Section */}
            <section className="bg-primary text-white py-24 px-6 flex flex-col justify-center items-center text-center">
                <h1 className="text-5xl md:text-6xl font-bold mb-4">Tárcio Costa</h1>
                <p className="text-lg md:text-xl max-w-2xl">
                    Empreendedor digital angolano, apaixonado por inovação, tecnologia e transformação social.
                </p>
                <a href="#sobre" className="mt-8 bg-accent text-primary px-6 py-3 rounded-lg font-medium hover:bg-yellow-400 transition">
                    Saber mais
                </a>
            </section>

            {/* Sobre Section */}
            <section id="sobre" className="py-20 px-6 md:px-20 bg-white">
                <div className="flex flex-col-reverse md:flex-row items-center gap-10">
                    <div>
                        <h2 className="text-3xl font-semibold mb-6">Quem é Tárcio Costa?</h2>
                        <p className="text-muted max-w-3xl leading-relaxed text-lg">
                            Tárcio é um nome de referência no universo digital em Angola. Ele lidera projetos com impacto direto na economia digital, formando empreendedores, gerando oportunidades e transformando ideias em negócios sustentáveis.
                        </p>
                    </div>

                    <img
                        src={tarcio1}
                        alt="Retrato de Tárcio Costa, empreendedor digital angolano"
                        className="w-full md:w-[400px] rounded-xl shadow-lg object-cover"
                    />
                </div>
            </section>


            {/* Destaques Section */}
            <section className="bg-gray-100 py-20 px-6 md:px-20">
                <h3 className="text-2xl font-semibold mb-10 text-center">Destaques</h3>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition">
                        <h4 className="text-3xl font-bold mb-2 text-accent">+20K</h4>
                        <p className="text-muted">Seguidores nas redes sociais</p>
                    </div>
                    <div className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition">
                        <h4 className="text-3xl font-bold mb-2 text-accent">+10</h4>
                        <p className="text-muted">Projetos digitais lançados</p>
                    </div>
                    <div className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition">
                        <h4 className="text-3xl font-bold mb-2 text-accent">5 Países</h4>
                        <p className="text-muted">Com presença digital ativa</p>
                    </div>
                </div>
            </section>

            {/* Footer */}
           <Footer/>
        </div>
    );
};

export default Home;

