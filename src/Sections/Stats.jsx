import React from "react";

const ProgressBar = ({ percent, color }) => (
  <div className="w-full h-3 bg-gray-700 rounded-full">
    <div
      className="h-full rounded-full"
      style={{
        width: `${percent}%`,
        backgroundColor: color,
      }}
    />
  </div>
);

const StatisticsBlock = () => {
  return (
      <section className="w-full flex items-center justify-center bg-[#070816] py-20 md:py-40 relative gap-6 min-h-screen px-4 sm:px-6">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[90%] max-w-full h-50 rounded-t-[93px] bg-gradient-to-b from-[#A183F4] via-[#2F1A77] via-39% to-transparent backdrop-blur-2xl z-0 before:content-[''] before:absolute before:-bottom-20 before:left-1/2 before:-translate-x-1/2 before:w-9/10 before:h-40 before:bg-[#070816] before:rounded-[50%] before:z-1 before:blur-xl"></div>

        <div className="relative w-full md:w-3/5 p-4 md:p-8">
          <div className="relative z-10 bg-[#070816] rounded-3xl p-6 md:p-10 text-white shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Статистика платформы</h2>
            <p className="text-lg md:text-xl mb-4 md:mb-6">С 2023 года</p>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-10">
            <div>
              <p className="text-gray-400">Количество займов:</p>
              <p className="text-3xl font-bold mt-2 text-[#D20764]">355</p>
            </div>
            <div>
              <p className="text-gray-400">Сумма займов:</p>
              <p className="text-3xl font-bold mt-2 text-[#D20764]">933 млн ₽</p>
            </div>
            <div>
              <p className="text-gray-400">Инвесторов:</p>
              <p className="text-3xl font-bold mt-2 text-[#D20764]">285</p>
            </div>
            <div>
              <p className="text-gray-400">Заёмщиков:</p>
              <p className="text-3xl font-bold mt-2 text-[#D20764]">219</p>
            </div>
          </div>

          <div className="bg-[#1d1b2f] rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Аналитика за 2023 год</h3>

            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span>Выдано без текущих:</span>
                <span className="font-bold text-[#D20764]">933 млн ₽</span>
              </div>
              <ProgressBar percent={98} color="#3b82f6" />
            </div>

            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span>Текущие займы:</span>
                <span className="font-bold text-[#D20764]">117,9 млн ₽</span>
              </div>
              <ProgressBar percent={12} color="#22c55e" />
            </div>

            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span>Возвращено вовремя:</span>
                <span className="font-bold text-[#D20764]">915 млн ₽</span>
              </div>
              <ProgressBar percent={98} color="#84cc16" />
            </div>

            <div className="mt-4">
              <div className="flex justify-between mb-1">
                <span>Возвращено с просрочкой:</span>
                <span className="font-bold text-[#D20764]">18 млн ₽</span>
              </div>
              <ProgressBar percent={2} color="#ef4444" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[90%] max-w-full h-50 rounded-b-[93px] bg-gradient-to-t from-[#b38aff] via-[#3b1c84] to-transparent backdrop-blur-2xl z-0 before:content-[''] before:absolute before:-top-20 before:left-1/2 before:-translate-x-1/2 before:w-9/10 before:h-40 before:bg-[#070816] before:rounded-[50%] before:z-1 before:blur-xl"></div>
    </section>
  );
};

export default StatisticsBlock;
