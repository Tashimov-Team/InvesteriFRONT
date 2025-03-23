import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from './logo.svg';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="px-6 lg:px-32 w-full flex items-center justify-between h-16 fixed top-0 z-40 text-white">
            <img src={logo} alt='logo' className="h-10" />

            {/* Десктопное меню */}
            <div className="hidden lg:flex gap-20 items-center">
                <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Главная</Link>
                <Link to="/investors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Инвесторам</Link>
                <Link to="/zaem" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Заемщикам</Link>
                <Link to="/faq" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>FAQ</Link>
            </div>
            <div className="hidden lg:flex gap-7 items-center">
                <Link to="/login" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Вход</Link>
                <Link to="/register" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Регистрация</Link>
            </div>

            {/* Бургер-меню */}
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white z-50">
                {isOpen ? <></> : <Menu size={32} />}
            </button>

            {/* Мобильное меню с анимацией */}
            <motion.div
                initial={{ x: '100%' }}
                animate={{ x: isOpen ? 0 : '100%' }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className={`fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-6 text-lg z-40`}>
                <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-white">
                    <X size={32} />
                </button>
                <img src={logo} alt='logo' className="h-10 mb-6" />
                <Link to="/" onClick={() => setIsOpen(false)} className="cursor-pointer">Главная</Link>
                <Link to="/investors" onClick={() => setIsOpen(false)} className="cursor-pointer">Инвестор</Link>
                <Link to="/zaem" onClick={() => setIsOpen(false)} className="cursor-pointer">Заемщик</Link>
                <Link to="/faq" onClick={() => setIsOpen(false)} className="cursor-pointer">FAQ</Link>
                <Link to="/login" onClick={() => setIsOpen(false)} className="cursor-pointer">Войти</Link>
                <Link to="/register" onClick={() => setIsOpen(false)} className="cursor-pointer">Регистрация</Link>
            </motion.div>
        </header>
    );
};

export default Header;