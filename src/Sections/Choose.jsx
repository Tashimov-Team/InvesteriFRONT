import React from 'react'
import { Link } from 'react-router-dom';

const Choose = () => {
    return (
        <section className="bg-[#070816] py-80 px-4 relative">
          <h2 className="text-center text-white text-3xl font-bold mb-10 px-20">
            Почему выбирают INVESTERI
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-21">
            <div className="bg-[#424B60] rounded-2xl p-6 py-12 text-white">
              <h3 className="text-4xl font-bold mb-4">1</h3>
              <p>Минимальная сумма инвестиций и высокая доступность</p>
            </div>
            <div className="bg-[#424B60] rounded-2xl p-6 py-12 text-white">
              <h3 className="text-4xl font-bold mb-4">2</h3>
              <p>Проверенные заемщики и высокая рентабельность</p>
            </div>
            <div className="bg-[#424B60] rounded-2xl p-6 py-12 text-white">
              <h3 className="text-4xl font-bold mb-4">3</h3>
              <p>Без скрытых комиссий, удобно и прозрачно</p>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <Link to="/register" className="mt-6 px-6 py-3 bg-pink-600 text-white text-lg font-medium rounded-lg hover:bg-pink-700 transition relative shadow-[0px_0px_10px_4px_rgba(210,7,100,0.6)]">
              Зарегистрироваться
            </Link>
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[90%] max-w-full h-50 rounded-b-[93px] bg-gradient-to-t from-[#b38aff] via-[#3b1c84] to-transparent backdrop-blur-2xl z-0 before:content-[''] before:absolute before:-top-20 before:left-1/2 before:-translate-x-1/2 before:w-9/10 before:h-40 before:bg-[#070816] before:rounded-[50%] before:z-1 before:blur-xl"></div>
        </section>
    );
}

export default Choose