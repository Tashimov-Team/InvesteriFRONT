import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import api from '../api/index.jsx'; // Укажите правильный путь

const Comments = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        api.get('/api/main') // Уточните правильный эндпоинт
            .then(response => setReviews(response.data.reviews))
            .catch(error => console.error('Error fetching reviews:', error));
    }, []);

    return (
        <section className="w-full bg-[#070816] py-16 px-4">
            <h2 className="text-center text-white text-3xl font-bold mb-10">Отзывы наших пользователей</h2>
            <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                className="w-full"
            >
                {reviews.map((review, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-[#1C1F33] rounded-2xl p-10 text-white flex flex-col items-center text-center max-w-3xl mx-auto">
                            <img
                                src={review.image}
                                alt={review.name}
                                className="w-24 h-24 rounded-full mb-6 object-cover"
                            />
                            <h3 className="text-xl font-semibold mb-1">{review.name}</h3>
                            <span className="text-pink-500 mb-4">{review.role}</span>
                            <p className="text-lg leading-relaxed">{review.text}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Comments;