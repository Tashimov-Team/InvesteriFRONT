import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer
          className="text-white py-8 relative"
          style={{
            backgroundImage: 'url("/footer.gif")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col gap-6">
            <ul className="flex justify-center gap-8 text-lg font-medium">
                <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-pink-500 transition">Главная</Link>
                <Link to="/investors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-pink-500 transition">Инвесторам</Link>
                <Link to="/zaem" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-pink-500 transition">Заемщикам</Link>
                <Link to="/faq" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-pink-500 transition">FAQ</Link>
            </ul>
            <div className="flex justify-between items-center w-full px-4 text-sm">
                <div className="flex gap-4">
                    <a href="#" className="hover:underline">Раскрытие информации</a>
                    <a href="#" className="hover:underline">Документы платформы</a>
                </div>
                <span className="font-bold">©2023–2024</span>
            </div>
          </div>
        </footer>
    );
}

export default Footer