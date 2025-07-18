import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Instagram, Briefcase, Globe, Settings } from 'lucide-react';
import Elevafit from '../images/elevafits.png';
import DigitalMove from '../images/digitalmove.png';
import ClubeDosGenios from '../images/clubedosgenios.png';

const dadosProjetos = {
    'elevafit': {
        titulo: "ElevaFit Supplement",
        descricao: "Marca de suplementos aprovada pela FDA, presente em Lisboa e Luanda.",
        detalhes: `
      A ElevaFit surgiu com a missão de preencher a lacuna no mercado africano de suplementos 
      confiáveis e acessíveis. Voltada para atletas e entusiastas do bem-estar, oferece produtos 
      de alta performance com certificação internacional. Com presença crescente em Angola e Portugal, 
      a marca investe também em programas sociais de nutrição e desporto.
    `,
        imagem: Elevafit,
        link: "https://elevafit.co",
        instagram: "https://instagram.com/elevafit.supplement"
    },
    'digital-move': {
        titulo: "Digital Move",
        descricao: "Empresa angolana pioneira na venda de cartões Visa e soluções digitais.",
        detalhes: `
    Fundada por Tárcio Costa, a Digital Move revolucionou o acesso a pagamentos online em Angola 
    ao introduzir os primeiros cartões Visa virtuais pré-pagos no país — uma resposta direta à 
    crescente demanda por soluções financeiras modernas. 

    Com o tempo, evoluiu para uma empresa de tecnologia com foco no mercado B2B, oferecendo sistemas 
    de automação, gestão de pagamentos e branding digital para empresas africanas que procuram escalar 
    no mundo digital. A Digital Move é hoje referência em inovação e impacto.
  `,
        imagem: DigitalMove,
        link: "https://digitalmove.co",
        instagram: "https://instagram.com/digitalmove.ao"
    },
    'clube-dos-genios': {
        titulo: "Clube dos Génios",
        descricao: "Plataforma digital de educação financeira voltada para os PALOP.",
        detalhes: `
      O Clube dos Génios capacita milhares de jovens em literacia financeira, investimentos e 
      mindset de riqueza. Lançado na Times Square, é um marco na educação online para países 
      lusófonos africanos. Conta com cursos, comunidade e mentorias lideradas por Tárcio Costa.
    `,
        imagem: ClubeDosGenios,
        link: "https://clubedosgenios.com",
        instagram: "https://instagram.com/clubedosgenios"
    }
};

const ProjetoDetalhe = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const projeto = dadosProjetos[id];

    const indicadores = id === 'digital-move' ? [
        {
            label: "Clientes atendidos",
            valor: "120+ empresas",
            icon: <Briefcase className="w-6 h-6 text-blue-600" />
        },
        {
            label: "Presença em países",
            valor: "5 países africanos",
            icon: <Globe className="w-6 h-6 text-green-600" />
        },
        {
            label: "Soluções digitais",
            valor: "Automação • Pagamentos • Branding",
            icon: <Settings className="w-6 h-6 text-yellow-500" />
        }
    ] : [];

    if (!projeto) {
        return (
            <div className="text-center py-24 text-red-600 font-semibold text-xl">
                Projeto não encontrado.
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white text-gray-900 py-20 px-6 md:px-12 mt-6">
            <div className="max-w-5xl mx-auto space-y-12">
                <div className="flex flex-col md:flex-row items-start gap-10">
                    {/* Imagem */}
                    <img
                        src={projeto.imagem}
                        alt={`Imagem do projeto ${projeto.titulo}`}
                        className="w-full md:w-[400px] rounded-xl shadow-md object-cover"
                    />

                    {/* Conteúdo */}
                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold text-blue-900">{projeto.titulo}</h1>

                        {/* Badge B2B */}
                        {id === 'digital-move' && (
                            <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                                Foco: B2B
                            </span>
                        )}

                        <p className="text-lg font-medium text-gray-800">{projeto.descricao}</p>
                        <p className="text-base leading-relaxed text-gray-700 whitespace-pre-line">
                            {projeto.detalhes}
                        </p>

                        {/* Indicadores */}
                        {indicadores.length > 0 && (
                            <div className="grid md:grid-cols-3 gap-4 pt-6">
                                {indicadores.map((item, index) => (
                                    <div key={index} className="flex items-start gap-3 p-4 bg-gray-100 rounded-lg shadow-sm">
                                        {item.icon}
                                        <div>
                                            <p className="text-sm text-gray-600">{item.label}</p>
                                            <p className="font-semibold text-gray-800">{item.valor}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Links */}
                        <div className="flex gap-4 mt-6 flex-wrap">
                            {projeto.link && (
                                <a
                                    href={projeto.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                                >
                                    Visitar site →
                                </a>
                            )}
                            {projeto.instagram && (
                                <a
                                    href={projeto.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition"
                                >
                                    <Instagram className="w-5 h-5" />
                                    Instagram
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                {/* Botão Voltar */}
                <div className="pt-10">
                    <button
                        onClick={() => navigate(-1)}
                        className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-200 transition"
                    >
                        ← Voltar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjetoDetalhe;




