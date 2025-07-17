import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Defina aqui as rotas que têm fundo escuro
    const darkRoutes = ['/media'];
    const isDark = darkRoutes.includes(location.pathname);

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'Sobre' },
        { path: '/business', label: 'Portfólio' },
        { path: '/servicos', label: 'Serviços' },
        { path: '/depoimentos', label: 'Depoimentos' },
        { path: '/media', label: 'Media' },
        { path: '/contact', label: 'Contato' },
    ];

    return (
        <header
            className={`${
                isDark
                    ? 'bg-[#1e293b]/90 backdrop-blur-md text-white'
                    : 'bg-white text-black'
            } shadow-md h-20 z-50 fixed top-0 left-0 right-0 transition-colors duration-300`}
        >
            <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-full">
                <h1 className="text-2xl font-bold">Tárcio Costa</h1>

                {/* Menu Desktop */}
                <nav className="hidden md:flex gap-6">
                    {navLinks.map(link => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className="relative group font-medium"
                        >
                            {link.label}
                            <span
                                className={`absolute left-0 -bottom-1 h-1 transition-all group-hover:w-full ${
                                    isDark ? 'bg-white' : 'bg-black'
                                } w-0`}
                            ></span>
                        </Link>
                    ))}
                </nav>

                {/* Botão mobile */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`md:hidden z-50 ${isDark ? 'text-white' : 'text-black'}`}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Menu Mobile */}
            {isOpen && (
                <nav
                    className={`md:hidden px-4 pb-4 flex flex-col gap-4 ${
                        isDark ? 'bg-[#1e293b] text-white' : 'bg-white text-black'
                    }`}
                >
                    {navLinks.map(link => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className="border-b border-gray-200 pb-2"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            )}
        </header>
    );
};

export default Navbar;



