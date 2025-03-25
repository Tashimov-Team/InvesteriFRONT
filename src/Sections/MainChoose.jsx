import React from 'react';
import { Link } from 'react-router-dom';

const MainChoose = () => {
    return (
        <section className="bg-[#070816] py-40 px-4 relative overflow-hidden">
            {/* Добавленное свечение */}
            <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
        w-2/4 h-2/4 bg-[#D20764] rounded-full blur-3xl z-0 opacity-25"
            ></div>

            {/* Существующий градиент */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[90%] max-w-full h-50 rounded-t-[93px] bg-gradient-to-b from-[#A183F4] via-[#2F1A77] via-39% to-transparent backdrop-blur-2xl z-0 before:content-[''] before:absolute before:-bottom-20 before:left-1/2 before:-translate-x-1/2 before:w-9/10 before:h-40 before:bg-[#070816] before:rounded-[50%] before:z-1 before:blur-xl"></div>

            <h2 className="text-center text-white text-3xl font-bold mb-10 relative z-10">
                Почему выбирают нас?
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto relative z-10">
                {/* Измененные карточки */}
                <div className="w-full p-6 py-12 text-white flex flex-col items-center text-center">
                    <div className="bg-white p-4 rounded-xl shadow-lg mb-4 w-28 h-28 flex items-center justify-center">
                        <img src="/Vector (8).svg" alt="Надежность" className="w-14 h-14" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Надежность и безопасность</h3>
                    <p className="max-w-md">
                        Мы используем современные технологии защиты данных и строгую проверку заемщиков, чтобы минимизировать риски для всех участников платформы.
                    </p>
                </div>

                {/* Остальные карточки с аналогичными изменениями */}
                <div className="w-full p-6 py-12 text-white flex flex-col items-center text-center">
                    <div className="bg-white p-4 rounded-xl shadow-lg mb-4 w-28 h-28 flex items-center justify-center">
                        <img src="/Vector (9).svg" alt="Надежность" className="w-14 h-14" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Высокая доходность для инвесторов</h3>
                    <p className="max-w-md">
                        Получайте стабильный доход, инвестируя в проверенные займы. Средняя доходность на платформе составляет до 19% годовых.
                    </p>
                </div>

                <div className="w-full p-6 py-12 text-white flex flex-col items-center text-center">
                    <div className="bg-white p-4 rounded-xl shadow-lg mb-4 w-28 h-28 flex items-center justify-center">
                        <img src="/Vector (11).svg" alt="Надежность" className="w-14 h-14" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Простота и удобство</h3>
                    <p className="max-w-md">
                        Интуитивно понятный интерфейс делает работу с платформой максимально комфортной.
                    </p>
                </div>

                <div className="w-full p-6 py-12 text-white flex flex-col items-center text-center">
                    <div className="bg-white p-4 rounded-xl shadow-lg mb-4 w-28 h-28 flex items-center justify-center">
                        <img src="/Vector (12).svg" alt="Надежность" className="w-14 h-14" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Удобные условия для заемщиков</h3>
                    <p className="max-w-md">
                        Быстрое одобрение заявок, низкие процентные ставки и гибкие условия погашения. Получите финансирование без лишних бюрократических процедур.
                    </p>
                </div>
            </div>

            <div className="flex justify-center mt-10 relative z-10">
                <Link
                    to="/register"
                    className="mt-6 px-6 py-3 bg-pink-600 text-white text-lg font-medium rounded-lg hover:bg-pink-700 transition shadow-[0px_0px_10px_4px_rgba(210,7,100,0.6)]"
                >
                    Зарегистрироваться
                </Link>
            </div>
        </section>
    );
};

export default MainChoose;