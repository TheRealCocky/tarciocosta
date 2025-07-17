import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);

    const sendEmail = async (e) => {
        e.preventDefault();

        const time = form.current.time.value;

        if (time && time <= 0) {
            toast.error('O tempo estimado deve ser maior que zero.');
            return;
        }

        setLoading(true);

        try {
            await emailjs.sendForm(
                'service_y4qpd8l',
                'template_wis49s3',
                form.current,
                'Ds9OjpxaXUKwpJGlM'
            );

            toast.success('Mensagem enviada com sucesso!');
            form.current.reset();
        } catch (error) {
            console.error('Erro ao enviar email:', error);
            toast.error('Erro ao enviar. Verifique os dados e tente novamente.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="bg-white min-h-screen py-16 px-6 text-gray-800 mt-10">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Fale comigo</h2>

                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block mb-2 font-semibold">Nome</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Digite seu nome"
                            required
                            className="w-full border p-3 rounded-md"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Digite seu email"
                            required
                            className="w-full border p-3 rounded-md"
                        />
                    </div>

                    <div>
                        <label htmlFor="title" className="block mb-2 font-semibold">Assunto</label>
                        <input
                            id="title"
                            type="text"
                            name="title"
                            placeholder="Ex: Orçamento para projeto"
                            required
                            className="w-full border p-3 rounded-md"
                        />
                    </div>

                    <div>
                        <label htmlFor="time" className="block mb-2 font-semibold">Tempo estimado (dias)</label>
                        <input
                            id="time"
                            type="number"
                            name="time"
                            placeholder="Prazo desejado Ex: 7dias"
                            className="w-full border p-3 rounded-md"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block mb-2 font-semibold">Mensagem</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="6"
                            placeholder="Descreva seu projeto ou dúvida..."
                            required
                            className="w-full border p-3 rounded-md"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className={`bg-blue-600 text-white px-6 py-3 rounded-md font-semibold transition ${
                            loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
                        }`}
                    >
                        {loading ? 'Enviando...' : 'Enviar'}
                    </button>
                </form>
            </div>

            <ToastContainer position="top-center" />
        </section>
    );
};

export default Contact;







