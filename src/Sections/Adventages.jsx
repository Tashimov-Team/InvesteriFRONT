import React from 'react'

const Adventages = () => {
  return (
    <section className='py-10 bg-[#070816] text-white'>
      <div className="container mx-auto px-4">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Плюсы работы в нашей платформе
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 text-center justify-items-center">
          <div className="flex flex-col items-center w-4/5">
            <div className="bg-white rounded-xl shadow-lg mb-4 w-18 h-18 flex items-center justify-center">
              <img src="/Group (5).svg" alt="Выгодное предложение" className="w-full h-full"/>
            </div>
            <h3 className="text-pink-500 font-semibold text-lg mb-2">Выгодное предложение</h3>
            <p className="text-gray-300">
              Работа по системе: Исполнение контракта — оплата займа
            </p>
          </div>
          <div className="flex flex-col items-center w-4/5">
            <div className="bg-white rounded-xl shadow-lg mb-4 w-18 h-18 flex items-center justify-center">
              <img src="/Group (6).svg" alt="Выгодное предложение" className="w-full h-full"/>
            </div>
            <h3 className="text-pink-500 font-semibold text-lg mb-2">Надежность</h3>
            <p className="text-gray-300">
              Все заемщики проходят тщательные проверки на платежеспособность
            </p>
          </div>
          <div className="flex flex-col items-center w-4/5">
            <div className="bg-white rounded-xl shadow-lg mb-4 w-18 h-18 flex items-center justify-center">
              <img src="/Group (7).svg" alt="Выгодное предложение" className="w-full h-full"/>
            </div>
            <h3 className="text-pink-500 font-semibold text-lg mb-2">Уникальный ИИ инвестирования</h3>
            <p className="text-gray-300">
              Если хотите максимально автоматизировать процесс инвестирования, наша система облегчит эту задачу
            </p>
          </div>
          <div className="flex flex-col items-center w-4/5">
            <div className="bg-white rounded-xl shadow-lg mb-4 w-18 h-18 flex items-center justify-center">
              <img src="/Group (8).svg" alt="Выгодное предложение" className="w-full h-full"/>
            </div>
            
            <h3 className="text-pink-500 font-semibold text-lg mb-2">Возврат средств</h3>
            <p className="text-gray-300">
              Проводим работы в случае просрочки выплат
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Adventages