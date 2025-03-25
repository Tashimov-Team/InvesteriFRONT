import { useState } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const Investment = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [interestRate, setInterestRate] = useState(20);
  const [investmentPeriod, setInvestmentPeriod] = useState(1);

  const calculateProfit = () => {
    const months = investmentPeriod * 12;
    let total = 0;
    for (let i = 0; i < months; i++) {
      total = (total + monthlyInvestment) * (1 + interestRate / 100 / 12);
    }
    return Math.round(total);
  };

  const chartData = Array.from({ length: investmentPeriod }, (_, index) => {
    const year = index + 1;
    let total = 0;
    for (let i = 0; i < year * 12; i++) {
      total = (total + monthlyInvestment) * (1 + interestRate / 100 / 12);
    }
    return { year: `${year} лет`, profit: Math.round(total) };
  });

  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row bg-gradient-to-r bg-[#070816] items-center justify-center gap-8 p-4">
      <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }}
        className="bg-[#D20764] text-white rounded-2xl p-8 lg:w-[400px] mb-10 md:mb-0">
        <h2 className="text-3xl font-bold mb-6">Рассчитайте свою прибыль</h2>

        <div className="mb-5">
          <p className="mb-1">Сумма ежемесячных инвестиций</p>
          <input type="range" min="5000" max="100000" step="1000" 
            value={monthlyInvestment} onChange={(e) => setMonthlyInvestment(Number(e.target.value))} 
            className="accent-white w-full appearance-none bg-transparent cursor-pointer
    [&::-webkit-slider-runnable-track]:h-1 
    [&::-webkit-slider-runnable-track]:bg-gray-300 
    [&::-webkit-slider-thumb]:appearance-none 
    [&::-webkit-slider-thumb]:w-4 
    [&::-webkit-slider-thumb]:h-4 
    [&::-webkit-slider-thumb]:bg-white 
    [&::-webkit-slider-thumb]:rounded-full 
    [&::-webkit-slider-thumb]:-mt-1.5
    [&::-moz-range-thumb]:appearance-none
    [&::-moz-range-thumb]:w-4
    [&::-moz-range-thumb]:h-4
    [&::-moz-range-thumb]:bg-blue-500
    [&::-moz-range-thumb]:rounded-full " />
          <div className="text-right text-sm mt-1">{monthlyInvestment} ₽</div>
        </div>

        <div className="mb-5">
          <p className="mb-1">Процентная ставка</p>
          <input type="range" min="20" max="29" step="0.1" 
            value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} 
            className="accent-white w-full appearance-none bg-transparent cursor-pointer
    [&::-webkit-slider-runnable-track]:h-1 
    [&::-webkit-slider-runnable-track]:bg-gray-300 
    [&::-webkit-slider-thumb]:appearance-none 
    [&::-webkit-slider-thumb]:w-4 
    [&::-webkit-slider-thumb]:h-4 
    [&::-webkit-slider-thumb]:bg-white 
    [&::-webkit-slider-thumb]:rounded-full 
    [&::-webkit-slider-thumb]:-mt-1.5
    [&::-moz-range-thumb]:appearance-none
    [&::-moz-range-thumb]:w-4
    [&::-moz-range-thumb]:h-4
    [&::-moz-range-thumb]:bg-blue-500
    [&::-moz-range-thumb]:rounded-full " />
          <div className="text-right text-sm mt-1">{interestRate}%</div>
        </div>

        <div className="mb-5">
          <p className="mb-1">Срок инвестирования (Без изъятия)</p>
          <input type="range" min="2" max="30" step="1" 
            value={investmentPeriod} onChange={(e) => setInvestmentPeriod(Number(e.target.value))} 
            className="accent-white w-full appearance-none bg-transparent cursor-pointer
    [&::-webkit-slider-runnable-track]:h-1 
    [&::-webkit-slider-runnable-track]:bg-gray-300 
    [&::-webkit-slider-thumb]:appearance-none 
    [&::-webkit-slider-thumb]:w-4 
    [&::-webkit-slider-thumb]:h-4 
    [&::-webkit-slider-thumb]:bg-white 
    [&::-webkit-slider-thumb]:rounded-full 
    [&::-webkit-slider-thumb]:-mt-1.5
    [&::-moz-range-thumb]:appearance-none
    [&::-moz-range-thumb]:w-4
    [&::-moz-range-thumb]:h-4
    [&::-moz-range-thumb]:bg-blue-500
    [&::-moz-range-thumb]:rounded-full " />
          <div className="text-right text-sm mt-1">{investmentPeriod} лет</div>
        </div>

        <div className="text-center text-3xl font-bold mb-4">
          {calculateProfit().toLocaleString('ru-RU')} ₽
        </div>

        <button className="w-full bg-white text-[#D20764] rounded-full py-3 font-semibold hover:bg-gray-200 transition">
          Начать инвестировать
        </button>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }}
        className="bg-[#11152B] rounded-2xl p-6 w-full md:w-1/2"
      >
        <h3 className="text-white text-xl font-bold mb-4">Примеры регулярной работы над созданием пассивного дохода</h3>
        <ResponsiveContainer width="100%" height={450}>
          <LineChart data={chartData}>
            <Line type="monotone" dataKey="profit" stroke="#D20764" strokeWidth={3} dot={{ r: 4 }} />
            <CartesianGrid stroke="#3C3F50" strokeDasharray="3 3" />
            <XAxis dataKey="year" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>
    </section>
  );
};

export default Investment;