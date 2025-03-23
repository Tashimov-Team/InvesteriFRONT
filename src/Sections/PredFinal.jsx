import React from 'react'
import { Link } from 'react-router-dom';

const PredFinal = () => {
  return (
        <section className="w-full bg-[#070816] py-80 px-6 md:px-20 text-white relative">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center flex-wrap gap-9">
                <div className="text-center md:text-left mb-10 md:mb-0 w-full">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Начните прямо сейчас!</h2>
                <p className="text-base md:text-xl leading-relaxed max-w-2xl">
                    Присоединяйтесь к INVESTERI и откройте для себя новые возможности для инвестиций или получения финансирования.
                </p>
                </div>
                <div className="flex flex-col md:flex-row gap-8 items-center justify-center md:justify-start">
                    <Link to="/register" href="#" className="w-2/3 mt-6 px-6 py-3 bg-pink-600 text-center text-white text-lg font-medium rounded-lg hover:bg-pink-700 transition shadow-[0px_0px_10px_4px_rgba(210,7,100,0.6)]">
                        Зарегистрироваться
                    </Link>
                    <Link to="/investors" className="ml-1/2 w-2/3 mt-6 px-6 py-3 bg-pink-600 text-center text-white text-lg font-medium rounded-lg hover:bg-pink-700 transition shadow-[0px_0px_10px_4px_rgba(210,7,100,0.6)]">
                        Узнать больше
                    </Link>
                </div>
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[90%] max-w-full h-50 rounded-b-[93px] bg-gradient-to-t from-[#b38aff] via-[#3b1c84] to-transparent backdrop-blur-2xl z-0 before:content-[''] before:absolute before:-top-20 before:left-1/2 before:-translate-x-1/2 before:w-9/10 before:h-40 before:bg-[#070816] before:rounded-[50%] before:z-1 before:blur-xl"></div>
        </section>

  )
}

export default PredFinal