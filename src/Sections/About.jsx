import React from 'react'

const About = () => {
  return (
    <section className="w-full flex justify-center py-10 px-4 bg-[#070816]">
    <div className="max-w-4xl w-full bg-[linear-gradient(0deg,_#A183F4_0%,_#2F1A77_16%,_#392A7B_39.5%,_#070816_57.5%)] p-6">
      <h2 className="text-white text-xl font-semibold mb-4">Статистика платформы</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
        <div>
          <p className="text-gray-300">Количество займов:</p>
          <p className="text-pink-400 text-2xl font-bold">355</p>
        </div>
        <div>
          <p className="text-gray-300">Сумма займов:</p>
          <p className="text-pink-400 text-2xl font-bold">933 млн ₽</p>
        </div>
        <div>
          <p className="text-gray-300">Инвесторов:</p>
          <p className="text-pink-400 text-2xl font-bold">285</p>
        </div>
        <div>
          <p className="text-gray-300">Заемщиков:</p>
          <p className="text-pink-400 text-2xl font-bold">219</p>
        </div>
      </div>

      <div className="mt-6 bg-black rounded-lg p-4">
        <h3 className="text-white text-lg font-semibold mb-4">Аналитика за 2023 год</h3>
        <div className="space-y-4">
          <div>
            <p className="text-white text-sm">Выдано без текущих:</p>
            <div className="w-full bg-gray-800 rounded-full h-4 relative">
              <div className="absolute left-0 top-0 h-4 bg-blue-500 rounded-full" style={{ width: "100%" }}></div>
            </div>
            <p className="text-white text-right text-xs">933 млн ₽</p>
          </div>
          <div>
            <p className="text-white text-sm">Текущие займы:</p>
            <div className="w-full bg-gray-800 rounded-full h-4 relative">
              <div className="absolute left-0 top-0 h-4 bg-yellow-500 rounded-full" style={{ width: "12%" }}></div>
            </div>
            <p className="text-white text-right text-xs">117,9 млн ₽</p>
          </div>
          <div>
            <p className="text-white text-sm">Возвращено вовремя:</p>
            <div className="w-full bg-gray-800 rounded-full h-4 relative">
              <div className="absolute left-0 top-0 h-4 bg-green-500 rounded-full" style={{ width: "98%" }}></div>
            </div>
            <p className="text-white text-right text-xs">915 млн ₽</p>
          </div>
          <div>
            <p className="text-white text-sm">Возвращено с просрочкой:</p>
            <div className="w-full bg-gray-800 rounded-full h-4 relative">
              <div className="absolute left-0 top-0 h-4 bg-red-500 rounded-full" style={{ width: "2%" }}></div>
            </div>
            <p className="text-white text-right text-xs">18 млн ₽</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About