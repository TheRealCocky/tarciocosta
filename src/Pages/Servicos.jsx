import React from 'react';
import { motion } from 'framer-motion';
import { Code, BarChart2, Zap, Monitor } from 'lucide-react';

const servicos = [
    {
        titulo: "Desenvolvimento Web",
        descricao: "Sites e plataformas modernas, otimizadas e responsivas.",
        icon: <Code size={32} className="text-yellow-500" />,
    },
    {
        titulo: "Automação de Negócios",
        descricao: "Ferramentas que otimizam fluxos e escalam sua operação.",
        icon: <Zap size={32} className="text-yellow-500" />,
    },
    {
        titulo: "Marketing Digital",
        descricao: "Campanhas e conteúdo para atrair e converter seu público.",
        icon: <BarChart2 size={32} className="text-yellow-500" />,
    },
    {
        titulo: "Consultoria Estratégica",
        descricao: "Planejamento orientado por dados e inovação digital.",
        icon: <Monitor size={32} className="text-yellow-500" />,
    },
];

const Servicos = () => {
    return (
        <section className="bg-[#0c0c0c] text-white py-16 px-4 md:px-10 mt-10">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold text-center mb-14 text-yellow-400"
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    O que eu faço
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    {servicos.map((servico, index) => (
                        <motion.div
                            key={index}
                            className="bg-[#1a1a1a] p-6 rounded-xl shadow-md hover:shadow-yellow-400/30 transition duration-300"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <div className="mb-4">{servico.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{servico.titulo}</h3>
                            <p className="text-gray-300">{servico.descricao}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Servicos;

