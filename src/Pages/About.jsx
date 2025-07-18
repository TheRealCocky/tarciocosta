import React from 'react';
import tarcio2 from "../images/tarcio2.png";

const About = () => {
    return (
        <section className="bg-gray-100 text-blue-900 min-h-screen px-6 py-16 mt-10">
            <div className="max-w-5xl mx-auto space-y-12">

                {/* Seção: Quem é */}
                <div className="text-center">
                    <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10">
                        <div className="text-left">
                            <h2 className="text-4xl font-bold mb-4">Quem é Tárcio Costa?</h2>
                            <p className="text-lg leading-8">
                                <strong>Tárcio Costa é reconhecido pela </strong>
                                <a
                                    href="https://forbesafricalusofona.com/aos-18-anos-jovem-angolano-ja-emprega-mais-de-170-pessoas/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-700 underline hover:text-blue-900"
                                >
                                    <strong>Forbes</strong>
                                </a>
                                <strong> como o maior empreendedor digital de Angola</strong>, fundador da <em>Digital Move</em>, a primeira empresa angolana a emitir cartões virtuais pré-pagos e que emprega mais de 170 pessoas. Ele também lançou a academia financeira online “Clube dos Génios” na Times Square, em Nova Iorque, e mais recentemente investiu no lançamento da ElevaFit Supplement, uma marca de suplementos patenteada nos EUA.
                            </p>



                        </div>
                        <img
                            src={tarcio2}
                            alt="Retrato de Tárcio Costa, empreendedor digital de Angola"
                            className="w-full md:w-[400px] rounded-xl shadow-lg object-cover"
                        />
                    </div>
                </div>

                {/* Linha do tempo ou histórico */}
                <div>
                    <h3 className="text-2xl font-semibold mb-6 border-b-2 border-blue-900 inline-block">Minha Jornada</h3>
                    <div className="space-y-6">
                        <div className="border-l-4 border-blue-900 pl-4">
                            <h4 className="text-xl font-bold">2020 - Fundação da Digital Move</h4>
                            <p>Iniciou a emissão de cartões virtuais e outros serviços para o mercado digital angolano e português.</p>
                        </div>
                        <div className="border-l-4 border-blue-900 pl-4">
                            <h4 className="text-xl font-bold">2022 - Mais de 170 colaboradores</h4>
                            <p>A Digital Move cresceu e emprega mais de 170 pessoas, faturando milhões de kwanzas mensalmente.</p>
                        </div>
                        <div className="border-l-4 border-blue-900 pl-4">
                            <h4 className="text-xl font-bold">Outubro 2023 - Academia “Clube dos Génios”</h4>
                            <p>Lançou na Times Square, NY, plataforma de formação financeira para os PALOP.</p>
                        </div>
                        <div className="border-l-4 border-blue-900 pl-4">
                            <h4 className="text-xl font-bold">Março 2025 - ElevaFit Supplement</h4>
                            <p>Investiu 45 000 € para lançar uma marca de suplementos patenteada nos EUA.</p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;





