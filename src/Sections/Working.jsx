import React from 'react'

const Working = () => {
    return (
        <section className="bg-[#070816] py-16 px-4">
          <h2 className="text-center text-white text-3xl font-bold mb-10">
            Как это работает?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-[#424B60] rounded-2xl p-6 text-white text-center">
              <img src="/Vector (13).svg" alt="Регистрация" className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Регистрация</h3>
              <p>Создайте аккаунт на платформе — это займет всего несколько минут.</p>
            </div>
            <div className="bg-[#424B60] rounded-2xl p-6 text-white text-center">
              <img src="/Vector (14).svg" alt="Выбор роли" className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Выбор роли</h3>
              <p>Станьте инвестором или начните зарабатывать, оформив заявку на заем.</p>
            </div>
            <div className="bg-[#424B60] rounded-2xl p-6 text-white text-center">
              <img src="/Vector (15).svg" alt="Начало работы" className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Начало работы</h3>
              <p>Инвесторы могут выбрать проекты для финансирования, а заемщики — получить деньги на выгодных условиях.</p>
            </div>
            <div className="bg-[#424B60] rounded-2xl p-6 text-white text-center">
              <img src="/Vector (16).svg" alt="Контроль и управление" className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Контроль и управление</h3>
              <p>Управляйте своими финансами и следите за статусом заявок через личный кабинет.</p>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <a
              href="#"
              className="mt-6 px-6 py-3 bg-pink-600 text-white text-lg font-medium rounded-lg hover:bg-pink-700 transition shadow-[0px_0px_10px_4px_rgba(210,7,100,0.6)]"
            >
              Зарегистрироваться
            </a>
          </div>
        </section>
    );
    
}

export default Working