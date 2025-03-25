import React from "react";

const HelpSection = () => {
  return (
    <section className="bg-[#070816] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Мы поможем</h2>
        <p className="text-xl mb-10">
          Наш приоритет - это оперативность и упрощение всех процедур
          взаимодействия
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center bg-gradient-to-b from-[#1E1B3A] to-[#20132F] p-6 rounded-2xl shadow-md">
            <div className="p-4">
              <img src="/help1.svg" alt="Оперативность" className="w-25 h-25" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Оперативность</h3>
            <p className="text-base text-gray-300">
              Большинство заявок рассматриваются в течение дня
            </p>
          </div>

          <div className="flex flex-col items-center text-center bg-gradient-to-b from-[#1E1B3A] to-[#20132F] p-6 rounded-2xl shadow-md">
            <div className="p-4">
              <img src="/help2.svg" alt="По одному документу" className="w-25 h-25" />
            </div>
            <h3 className="text-xl font-semibold mb-2">По одному документу</h3>
            <p className="text-base text-gray-300">
              Всего лишь нужно иметь паспорт для подачи заявки
            </p>
          </div>

          <div className="flex flex-col items-center text-center bg-gradient-to-b from-[#1E1B3A] to-[#20132F] p-6 rounded-2xl shadow-md">
            <div className="p-4">
              <img src="/help3.svg" alt="Принцип одного окна" className="w-25 h-25" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Принцип одного окна</h3>
            <p className="text-base text-gray-300">
              Подача заявки - Одобрение - Получение средств онлайн
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
