import React from 'react';
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => (
    <footer className="bg-primary text-white py-10 px-6 mt-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
            <p className="text-sm">
                © {new Date().getFullYear()} Tárcio Costa. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
                <a href="https://www.instagram.com/tarciocosta123/" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-accent transition">
                    <FaInstagram />
                </a>
                <a href="https://www.linkedin.com/in/t%C3%A1rcio-costa-961b68221/" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-accent transition">
                    <FaLinkedin />
                </a>
                <a href="https://www.youtube.com/@Tarciocosta1" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-accent transition">
                    <FaYoutube />
                </a>
            </div>
        </div>
    </footer>
);

export default Footer;
