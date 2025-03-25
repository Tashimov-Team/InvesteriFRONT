import React, { useEffect,useState } from "react";
import { Link } from 'react-router-dom';
import api from '../api/index.jsx';

const Calculator = () => {
  const [loanAmount, setLoanAmount] = useState(5000);
  const [loanTerm, setLoanTerm] = useState(1);
  const [contracts, setContracts] = useState(5);
  const [companyAge, setCompanyAge] = useState(1);
  const [returnedLoans, setReturnedLoans] = useState(0);
  const [percent, setPercent] = useState(3);
  const [interestRate, setInterestRate] = useState(0.03);
  const [repaymentAmount, setRepaymentAmount] = useState(0);
  const [overpayment, setOverpayment] = useState(0);
  const [commission, setCommission] = useState(0); // Комиссия

  // Новое состояние для переплаты
  const [overpaymentRate, setOverpaymentRate] = useState(0);

  useEffect(() => {
    api.get('/api/main')
        .then(response => setPercent(response.data.percent))
        .catch(error => console.error('Error:', error));
  }, []);

  useEffect(() => {
    // 1. Расчет комиссии
    let commission = 1 + 0.5 * loanTerm;
    commission = Math.min(commission, 3.5);

    // 2. Расчет базовой переплаты
    let baseOverpayment = 3;

    if (loanTerm >= 1 && loanTerm <= 2) {
      baseOverpayment += 4;
    }
    if (loanTerm > 2 && loanTerm <= 7) {
      baseOverpayment += 4 + (loanTerm - 2) * 3;
    }
    if (loanTerm > 7) {
      baseOverpayment += 4 + 15 + (loanTerm - 7) * 2;
    }

    // 3. Расчет скидок
    const returnedDiscount = Math.floor(returnedLoans / 3) * 2;
    const contractsDiscount = Math.min(Math.floor((contracts - 5) / 5), 4);
    const ageDiscount = Math.min(Math.floor(companyAge / 2), 4);

    // 4. Итоговая переплата
    let finalOverpayment = baseOverpayment - returnedDiscount - contractsDiscount - ageDiscount;
    finalOverpayment = Math.max(finalOverpayment, 15);

    // 5. Расчет годовой ставки
    const annualRate = percent;

    // 6. Расчет общей суммы
    const monthlyRate = annualRate / 100 / 12;
    const totalAmount = loanAmount *
        (1 + finalOverpayment/100) *
        Math.pow(1 + monthlyRate, loanTerm);

    // 7. Обновление состояний
    setRepaymentAmount(Math.round(totalAmount));
    setOverpayment(Math.round(totalAmount - loanAmount));
    setInterestRate(annualRate);
    setOverpaymentRate(finalOverpayment);
    setCommission(commission);
  }, [loanAmount, loanTerm, contracts, companyAge, returnedLoans, percent]);

  return (
      <section className="w-full flex justify-center items-center px-4 py-80 bg-[#070816] relative">
        <div className="bg-[#1a1a2f] rounded-2xl px-6 py-10 text-center w-full max-w-7xl relative z-10">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                w-3/4 h-[150%] bg-[#D20764] rounded-full blur-[200px] opacity-20">
            </div>
          </div>
          {/* Слайдеры */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-6">
            <div>
              <h2 className="text-white text-2xl md:text-5xl font-bold mb-6 text-start">
                Рассчитайте условия займа
              </h2>
            </div>
            {/* Сумма займа */}
            <div className="bg-[#25253d] p-4 rounded-lg">
              <p className="text-white mb-2">Сумма займа</p>
              <input
                  type="range"
                  min="5000"
                  max="20000000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full appearance-none bg-transparent
                    [&::-webkit-slider-runnable-track]:h-4
                    [&::-webkit-slider-runnable-track]:rounded-lg
                    [&::-webkit-slider-runnable-track]:bg-gradient-to-r
                    [&::-webkit-slider-runnable-track]:from-purple-400
                    [&::-webkit-slider-runnable-track]:to-purple-800
                    [&::-webkit-slider-thumb]:appearance-none
                    [&::-webkit-slider-thumb]:w-4
                    [&::-webkit-slider-thumb]:h-4
                    [&::-webkit-slider-thumb]:bg-white
                    [&::-webkit-slider-thumb]:rounded-full
                    [&::-webkit-slider-thumb]:shadow-md
                    [&::-webkit-slider-thumb]:cursor-pointer"
              />
              <p className="text-gray-300 text-sm">{loanAmount.toLocaleString()} руб</p>
            </div>

            {/* Срок займа */}
            <div className="bg-[#25253d] p-4 rounded-lg">
              <p className="text-white mb-2">Срок займа</p>
              <input
                  type="range"
                  min="1"
                  max="12"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                  className="w-full appearance-none bg-transparent
                    [&::-webkit-slider-runnable-track]:h-4
                    [&::-webkit-slider-runnable-track]:rounded-lg
                    [&::-webkit-slider-runnable-track]:bg-gradient-to-r
                    [&::-webkit-slider-runnable-track]:from-purple-400
                    [&::-webkit-slider-runnable-track]:to-purple-800
                    [&::-webkit-slider-thumb]:appearance-none
                    [&::-webkit-slider-thumb]:w-4
                    [&::-webkit-slider-thumb]:h-4
                    [&::-webkit-slider-thumb]:bg-white
                    [&::-webkit-slider-thumb]:rounded-full
                    [&::-webkit-slider-thumb]:shadow-md
                    [&::-webkit-slider-thumb]:cursor-pointer"
              />
              <p className="text-gray-300 text-sm">{loanTerm} мес.</p>
            </div>
            {/* Исполненные контракты */}
            <div className="bg-[#25253d] p-4 rounded-lg">
              <p className="text-white mb-2">Исполнено контрактов за 2 года</p>
              <input
                  type="range"
                  min="5"
                  max="30"
                  value={contracts}
                  onChange={(e) => setContracts(Number(e.target.value))}
                  className="w-full appearance-none bg-transparent
                    [&::-webkit-slider-runnable-track]:h-4
                    [&::-webkit-slider-runnable-track]:rounded-lg
                    [&::-webkit-slider-runnable-track]:bg-gradient-to-r
                    [&::-webkit-slider-runnable-track]:from-purple-400
                    [&::-webkit-slider-runnable-track]:to-purple-800
                    [&::-webkit-slider-thumb]:appearance-none
                    [&::-webkit-slider-thumb]:w-4
                    [&::-webkit-slider-thumb]:h-4
                    [&::-webkit-slider-thumb]:bg-white
                    [&::-webkit-slider-thumb]:rounded-full
                    [&::-webkit-slider-thumb]:shadow-md
                    [&::-webkit-slider-thumb]:cursor-pointer"
              />
              <p className="text-gray-300 text-sm">{contracts}</p>
            </div>

            {/* Возраст компании */}
            <div className="bg-[#25253d] p-4 rounded-lg">
              <p className="text-white mb-2">Возраст компании</p>
              <input
                  type="range"
                  min="1"
                  max="10"
                  value={companyAge}
                  onChange={(e) => setCompanyAge(Number(e.target.value))}
                  className="w-full appearance-none bg-transparent
                    [&::-webkit-slider-runnable-track]:h-4
                    [&::-webkit-slider-runnable-track]:rounded-lg
                    [&::-webkit-slider-runnable-track]:bg-gradient-to-r
                    [&::-webkit-slider-runnable-track]:from-purple-400
                    [&::-webkit-slider-runnable-track]:to-purple-800
                    [&::-webkit-slider-thumb]:appearance-none
                    [&::-webkit-slider-thumb]:w-4
                    [&::-webkit-slider-thumb]:h-4
                    [&::-webkit-slider-thumb]:bg-white
                    [&::-webkit-slider-thumb]:rounded-full
                    [&::-webkit-slider-thumb]:shadow-md
                    [&::-webkit-slider-thumb]:cursor-pointer"
              />
              <p className="text-gray-300 text-sm">{companyAge} лет</p>
            </div>

            {/* Возвращено займов */}
            <div className="bg-[#25253d] p-4 rounded-lg">
              <p className="text-white mb-2">Возвращено займов на платформе</p>
              <input
                  type="range"
                  min="0"
                  max="10"
                  value={returnedLoans}
                  onChange={(e) => setReturnedLoans(Number(e.target.value))}
                  className="w-full appearance-none bg-transparent
                    [&::-webkit-slider-runnable-track]:h-4
                    [&::-webkit-slider-runnable-track]:rounded-lg
                    [&::-webkit-slider-runnable-track]:bg-gradient-to-r
                    [&::-webkit-slider-runnable-track]:from-purple-400
                    [&::-webkit-slider-runnable-track]:to-purple-800
                    [&::-webkit-slider-thumb]:appearance-none
                    [&::-webkit-slider-thumb]:w-4
                    [&::-webkit-slider-thumb]:h-4
                    [&::-webkit-slider-thumb]:bg-white
                    [&::-webkit-slider-thumb]:rounded-full
                    [&::-webkit-slider-thumb]:shadow-md
                    [&::-webkit-slider-thumb]:cursor-pointer"
              />
              <p className="text-gray-300 text-sm">{returnedLoans}</p>
            </div>
          </div>
          {/* Итоговый расчет */}
          <div className="text-white text-lg grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
            <div>
              <p className="text-gray-400 text-sm">Сумма возврата</p>
              <p className="font-bold text-3xl">{repaymentAmount.toLocaleString()} ₽</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Сумма переплаты</p>
              <p className="font-bold text-3xl">{overpayment.toLocaleString()} ₽</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Годовых</p>
              <p className="font-bold text-3xl">{interestRate}%</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Переплата</p>
              <p className="font-bold text-3xl">{overpaymentRate}%</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Комиссия</p>
              <p className="font-bold text-3xl">{commission.toFixed(1)}%</p>
            </div>
          </div>

          {/* Кнопка */}
          <Link to="/register" className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-lg text-lg">
            Подать заявку
          </Link>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[90%] max-w-full h-50 rounded-b-[93px] bg-gradient-to-t from-[#b38aff] via-[#3b1c84] to-transparent backdrop-blur-2xl z-0 before:content-[''] before:absolute before:-top-20 before:left-1/2 before:-translate-x-1/2 before:w-9/10 before:h-40 before:bg-[#070816] before:rounded-[50%] before:z-1 before:blur-xl"></div>
      </section>
  );
};

export default Calculator;