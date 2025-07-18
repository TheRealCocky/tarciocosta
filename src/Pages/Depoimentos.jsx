import React from 'react';
import { motion } from 'framer-motion';

const depoimentos = [
    {
        nome: "Vanessa Silva",
        frase: "O trabalho do Tárcio impactou diretamente nossa presença digital. Profissionalismo absoluto!",
        imagem: "https://cdn-icons-png.flaticon.com/512/847/847969.png"
    },
    {
        nome: "Carlos António",
        frase: "Transformou nossa ideia num projeto real. Hoje temos mais clientes e reconhecimento.",
        imagem: "https://cdn-icons-png.flaticon.com/512/847/847969.png"
    },
    {
        nome: "Joana Costa",
        frase: "Além de criativo, é muito estratégico. Super recomendo o Tárcio para qualquer negócio digital.",
        imagem: "https://cdn-icons-png.flaticon.com/512/847/847969.png"
    }
];

const Depoimentos = () => {
    return (
        <section className="bg-white py-16 px-6 text-gray-800 mt-10">
            <div className="max-w-6xl mx-auto text-center">
                <motion.h2
                    className="text-4xl font-bold text-purple-600 mb-12"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Depoimentos
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {depoimentos.map((dep, index) => (
                        <motion.div
                            key={index}
                            className="bg-purple-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src={dep.imagem}
                                alt={dep.nome}
                                className="w-16 h-16 rounded-full mx-auto mb-4"
                            />
                            <p className="italic mb-4 text-gray-700">"{dep.frase}"</p>
                            <h4 className="font-semibold text-purple-800">{dep.nome}</h4>
                        </motion.div>
                    ))}
                </div>


            </div>
        </section>
    );
};

export default Depoimentos;

