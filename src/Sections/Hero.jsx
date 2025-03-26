import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Background from "./Background.png";
import Ellipse from "./Ellipse.png";
import Phone from "./Phone.png";
import Card from "./Card.png";
import { Link } from 'react-router-dom';

const Hero = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section className="relative w-full min-h-[100vh] flex items-center px-6 lg:px-20 bg-[#070816] overflow-hidden">
            {/* Параллакс фон */}
            <motion.div
                animate={{ x: (mousePos.x - window.innerWidth / 2) * 0.005, y: (mousePos.y - window.innerHeight / 2) * 0.005 }}
                transition={{ type: "spring", stiffness: 100, damping: 10 }}
                className="absolute inset-0 w-full h-full"
            >
                <img src={Background} alt="Фон" className="w-full h-full object-cover" />
            </motion.div>

            <div className="flex flex-col-reverse lg:flex-row w-full items-center relative z-10">
                {/* Левая часть - текст с анимацией появления */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col text-center w-full items-center lg:w-2xl lg:text-start lg:items-start lg:ml-40"
                >
                    <h1 className="font-inter text-white text-5xl font-bold leading-tight max-w-lg">
                        Получайте до 19% годовых, инвестируя в государственные контракты и увеличивайте свой капитал.
                    </h1>
                    <Link to="/register" className="mt-6 px-6 py-3 bg-pink-600 text-white text-lg font-medium rounded-lg hover:bg-pink-700 transition relative shadow-[0px_0px_10px_4px_rgba(210,7,100,0.6)]">
                        Начать инвестировать
                    </Link>
                </motion.div>

                {/* Телефон по центру */}
                <motion.div
                    animate={{ x: (mousePos.x - window.innerWidth / 2) * 0.015, y: (mousePos.y - window.innerHeight / 2) * 0.015 }}
                    transition={{ type: "spring", stiffness: 100, damping: 10 }}
                    className="flex justify-center lg:justify-center relative"
                >
                    <img src={Phone} alt="Телефон" className="pointer-events-none w-2/3" />

                    {/* Карточка поверх телефона, участвует в параллаксе */}
                    <motion.div
                        animate={{ x: (mousePos.x - window.innerWidth / 2) * 0.02, y: (mousePos.y - window.innerHeight / 2) * 0.02 }}
                        transition={{ type: "spring", stiffness: 100, damping: 10 }}
                        className="w-full absolute top-3/5 left-7/10 transform -translate-x-1/2 -translate-y-1/2 z-20"
                    >
                        <img src={Card} alt="Карточка" className="w-2/5" />
                    </motion.div>

                    <motion.div
                        animate={{ x: (mousePos.x - window.innerWidth / 2) * 0.025, y: (mousePos.y - window.innerHeight / 2) * 0.025 }}
                        transition={{ type: "spring", stiffness: 100, damping: 10 }}
                        className="absolute top-10 right-2/3 -z-10"
                    >
                        <img src={Ellipse} alt="Круг 1" className="w-36 h-36 opacity-80" />
                    </motion.div>

                    <motion.div
                        animate={{ x: (mousePos.x - window.innerWidth / 2) * 0.025, y: (mousePos.y - window.innerHeight / 2) * 0.025 }}
                        transition={{ type: "spring", stiffness: 100, damping: 10 }}
                        className="absolute top-1/4 right-1/4 -z-10"
                    >
                        <img src={Ellipse} alt="Круг 1" className="w-24 h-24 opacity-80" />
                    </motion.div>

                    <motion.div
                        animate={{ x: (mousePos.x - window.innerWidth / 2) * 0.02, y: (mousePos.y - window.innerHeight / 2) * 0.02 }}
                        transition={{ type: "spring", stiffness: 100, damping: 10 }}
                        className="absolute bottom-1/7 right-1/3 -z-10"
                    >
                        <img src={Ellipse} alt="Круг 2" className="w-32 h-32 opacity-60" />
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
