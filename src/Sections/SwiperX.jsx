import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slidesData = [
    {
      step: "1",
      title: "Необходимо подать заявку на займ",
      img: "/Контракт.png",
    },
    {
      step: "2",
      title: "В течение дня идет рассмотрение вашей заявки",
      img: "/Лупа-1.png",
    },
    {
      step: "3",
      title: "Идет финансирование",
      img: "/Кнопка 1.png",
    },
    {
      step: "4",
      title: "Накопление инвестиций будет в течение 3–4 дней",
      img: "/Кнопка 2.png",
    },
    {
      step: "5",
      title:
        "Как только вы исполните контракт, начнется возвращение займа",
      img: "/Кнопка 3.png",
    },
];

const SwiperX = () => {
    return (
      <section className="py-16 bg-gradient-to-b bg-[#070816] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Как это работает</h2>
          <p className="text-lg text-gray-300 mb-12">
            Тысячи инвесторов зарегистрированы на платформе MD Finance и ежедневно
            инвестируют деньги в государственные контракты
          </p>
  
          <Swiper
            modules={[Navigation]}
            navigation
            slidesPerView={1}
            spaceBetween={30}
            loop="true"
            breakpoints={{
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {slidesData.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="bg-[#1c1c2c] p-6 rounded-2xl shadow-xl h-full flex flex-col justify-between">
                  <div>
                    <div className="text-2xl font-bold mb-4">{slide.step}</div>
                    <p className="text-lg font-semibold mb-6">{slide.title}</p>
                  </div>
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="mx-auto mt-auto"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    );
};
  
  export default SwiperX;
  