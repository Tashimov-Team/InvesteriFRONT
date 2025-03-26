import React from 'react';

const Fifth = () => {
  return (
    <section className="relative py-20 bg-[#070816] text-white flex items-center justify-center">
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D20764] blur-[300px] opacity-40 z-0"></div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 max-w-6xl w-full gap-10 px-4 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-4">
            INVESTERI — идеальный метод для приумножения ваших накоплений.
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {[
            'Минимальная сумма инвестиций',
            'Высокая рентабельность',
            'Проверенные заёмщики',
            'Без скрытых комиссий',
            'Вам не нужно быть профессиональным инвестором'
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-[#1a1a2e] p-4 rounded-xl shadow-md"
            >
              <div className="w-10 h-10 rounded-full bg-pink-500 text-center text-xl font-bold flex items-center justify-center">
                {index + 1}
              </div>
              <p className="text-gray-300">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fifth;
