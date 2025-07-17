import React from 'react';

const About = () => {
    return (
        <section className="bg-gray-100 text-blue-900 min-h-screen px-6 py-16 mt-10">
            <div className="max-w-5xl mx-auto space-y-12">

                {/* Seção: Quem é */}
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-4">Quem é Tárcio Costa?</h2>
                    <p className="text-lg leading-8">
                        Tárcio Costa é um empreendedor digital visionário, reconhecido por sua inovação e impacto no cenário digital angolano.
                        Com uma trajetória marcada por superação, ele inspira milhares de jovens a transformar suas ideias em realidade.
                    </p>
                </div>

                {/* Linha do tempo ou histórico */}
                <div>
                    <h3 className="text-2xl font-semibold mb-6 border-b-2 border-blue-900 inline-block">Minha Jornada</h3>
                    <div className="space-y-6">

                        <div className="border-l-4 border-blue-900 pl-4">
                            <h4 className="text-xl font-bold">2015 - Início da Jornada</h4>
                            <p>Começou no mundo digital como criador de conteúdo e se destacou rapidamente.</p>
                        </div>

                        <div className="border-l-4 border-blue-900 pl-4">
                            <h4 className="text-xl font-bold">2018 - Primeiros Negócios</h4>
                            <p>Lançou sua primeira startup voltada para o marketing digital em Angola.</p>
                        </div>

                        <div className="border-l-4 border-blue-900 pl-4">
                            <h4 className="text-xl font-bold">2021 - Reconhecimento Nacional</h4>
                            <p>Recebeu prêmios e destaque da mídia por seu impacto no ecossistema empreendedor.</p>
                        </div>

                        <div className="border-l-4 border-blue-900 pl-4">
                            <h4 className="text-xl font-bold">Hoje</h4>
                            <p>Fundador de múltiplos negócios digitais, mentor de jovens empreendedores e referência no setor.</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

