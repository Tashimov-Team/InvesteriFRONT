import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from 'react-router-dom';
import api from '../api/index.jsx'; // Укажите правильный путь

const Mainswiper = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        api.get('/api/main') // Уточните правильный эндпоинт
            .then(response => setCards(response.data.cards))
            .catch(error => console.error('Error fetching cards:', error));
    }, []);

    return (
        <section className="w-full bg-[#070816] py-10">
            <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                className="w-full"
            >
                {cards.map((card, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="w-full h-[500px] md:h-[450px] sm:h-[300px] bg-cover bg-center flex flex-col justify-center items-start px-20 p-10 text-white rounded-2xl"
                            style={{ backgroundImage: `url(${card.image})` }}
                        >
                            <h2 className="text-4xl md:text-3xl sm:text-2xl font-bold mb-4">
                                {card.title}
                            </h2>
                            <p className="text-xl md:text-lg sm:text-base mb-6 max-w-xl">
                                {card.description}
                            </p>
                            <Link to="/investors" className="bg-pink-600 hover:bg-pink-700 transition px-6 py-3 rounded-xl text-lg md:text-base sm:text-sm">
                                Начать инвестировать
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Mainswiper;