import React from 'react'

const Zaim = () => {
    return (
        <section className="w-full flex justify-center items-center px-4 py-80 bg-[#070816] relative overflow-hidden">
            {/* Добавленное свечение */}
            <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
        w-1/3 h-1/2 bg-[#D20764] rounded-full
        blur-3xl z-[1] opacity-50"
            ></div>

            {/* Существующий градиент */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[90%] max-w-full h-50 rounded-t-[93px] bg-gradient-to-b from-[#A183F4] via-[#2F1A77] via-39% to-transparent backdrop-blur-2xl z-0 before:content-[''] before:absolute before:-bottom-20 before:left-1/2 before:-translate-x-1/2 before:w-9/10 before:h-40 before:bg-[#070816] before:rounded-[50%] before:z-1 before:blur-xl"></div>

            {/* Контент с z-index */}
            <div className="bg-[#1a1a2f] rounded-2xl px-6 py-10 text-center w-full max-w-5xl relative z-10">
                <h2 className="text-white text-2xl md:text-3xl font-semibold mb-6">
                    Уже выдано займов на сумму:
                </h2>
                <p className="text-pink-600 text-4xl md:text-6xl font-bold mb-4">
                    3 237 485 363 ₽
                </p>
                <p className="text-gray-400 text-base md:text-lg">
                    Платформа работает с 2017 года
                </p>
            </div>
        </section>
    )
}

export default Zaim