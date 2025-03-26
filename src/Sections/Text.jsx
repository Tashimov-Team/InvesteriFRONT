import React from 'react';
import { motion } from 'framer-motion';
import Background from "./Background.png";
import Ellipse from "./Ellipse.png";
import Light from "./Light.png";
import Ec7 from "./Ellipse 7.png";

const Text = () => {
  return (
    <section className="w-full bg-[#070816] text-white pt-40 relative">
      {/* Верхний градиент */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[90%] max-w-full h-50 rounded-t-[93px] bg-gradient-to-b from-[#A183F4] via-[#2F1A77] via-39% to-transparent backdrop-blur-2xl z-0 before:content-[''] before:absolute before:-bottom-20 before:left-1/2 before:-translate-x-1/2 before:w-9/10 before:h-40 before:bg-[#070816] before:rounded-[50%] before:z-1 before:blur-xl"></div>
      <img src={Ec7} alt="" className='absolute w-30 left-180 '/>
      <h2 className="px-30 lg:px-60 lg:text-start text-4xl py-5 font-bold mb-4 lg:h-20 z-10 relative">
        Тендерные займы и <br /> Банковские гарантии
      </h2>

      {/* Первая секция */}
      <div className="w-full grid lg:grid-cols-2 grid-cols-1 justify-items-center mt-10 px-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="lg:ml-40 mt-10 lg:order-1 order-2 z-10 relative"
        >
          <p className="mb-6 text-2xl">
            Компаниям нужны средства на исполнение государственных контрактов. В
            России ежедневно сотни компаний выигрывают государственные
            контракты, но не у всех есть возможности для их исполнения.
          </p>
          <p className="text-2xl font-semibold mb-4">
            Для привлечения финансирования компании регистрируются на платформе
            Investeri, предоставляющей уникальные возможности для инвесторов.
          </p>
        </motion.div>

        {/* Градиент между секциями */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/3 -translate-y-1/2 rounded-4xl
                    w-2/4 h-5/5 bg-[#D20764] opacity-100
                    blur-[700px] z-0"></div>
                    <div className="lg:order-2 order-1 lg:w-1/3 w-2/5 flex justify-center items-center lg:gap-8 relative z-10">
          <img src="/sec1.gif" alt="" className="w-xl" />
          <img src="/sec2.gif" alt="" className="w-xl" />
        </div>
        <img src={Ellipse} alt="" className='absolute right-110 bottom-0 w-50' />
        <img src={Ec7} alt="" className='absolute left-20 bottom-20 w-50' />
      </div>
    
      {/* Вторая секция */}
      <div className="w-full grid lg:grid-cols-2 grid-cols-1 justify-items-center mt-20 px-20 relative">
        <img src={Ellipse} alt="" className='absolute left-0 w-30'/>
        <img src={Ellipse} alt="" className='absolute left-40 w-30 top-90'/>
        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                    w-2/3 h-[150%] bg-[#D20764] opacity-30
                    blur-[200px] z-0'></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="lg:w-xl w-2/3 flex flex-col justify-center items-center lg:gap-8 z-10 relative"
        >
          <img src="/sec3.gif" alt="" className="w-xl" />
          
          <img src="/sec4.gif" alt="" className="w-xl" />
        </motion.div>
        <img src={Light} alt="" className='absolute left-90 top-10 w-80'/>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="lg:ml-40 mt-10 z-10 relative"
        >
          <p className="mb-6 text-2xl">
            Для привлечения финансирования компании регистрируются на платформе Investeri, 
            предоставляющей уникальные возможности для инвесторов.
          </p>
          <p className="text-2xl font-semibold mb-4">
            Часто банковские организации требуют большое количество документов и затягивают 
            процесс рассмотрения заявки на несколько недель. Именно поэтому компании предпочитают 
            обращаться к инвесторам. Мы тщательно подходим к выбору заемщиков, проводя анализ надежности 
            компании и опыта исполнения государственных контрактов. После чего мы размещаем заявку на 
            привлечение средств.
          </p>
        </motion.div>
        <img src={Ec7} alt="" className='absolute w-40 right-0 top-0'/>
      </div>

      {/* Третья секция */}
      <div className="w-full grid lg:grid-cols-2 grid-cols-1 justify-items-center mt-20 px-20 relative">
        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                    w-full h-[150%] bg-gradient-to-l from-[#D20764] to-transparent opacity-30
                    blur-[100px] z-0'></div>
        <img src={Background} alt="" className='absolute top-0 left-150 w-40' />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="lg:ml-40 mt-10 lg:order-1 order-2 z-10 relative"
        >
          <p className="lg:mb-6 text-2xl">
            Инвесторы проводят подробный анализ представленных проектов, 
            чтобы принять решение о том, на какие из них сделать инвестиции.
          </p>
          <p className="lg:text-2xl font-semibold mb-4">
            На инвестиционной платформе INVESTERI собрано огромное количество 
            активных инвесторов, готовых вкладывать свои средства в перспективные 
            проекты. Удобство платформы заключается в том, что для инвестирования 
            достаточно всего лишь одного нажатия кнопки. Мы предоставляем всю 
            необходимую информацию о потенциальных заемщиках, чтобы помочь инвесторам 
            принять взвешенное решение.
          </p>
        </motion.div>
        <div className="lg:order-2 order-1 lg:w-1/3 w-1/3 flex justify-center items-center lg:gap-8 relative z-10">
          <img src="/sec5.gif" alt="" className="w-xl" />
          <img src="/sec6.gif" alt="" className="w-xl" />
        </div>
        <img src={Ec7} alt="" className='absolute left-30 bottom-10' />
      </div>
      {/* Четвертая секция */}
      <div className="w-full grid lg:grid-cols-2 grid-cols-1 justify-items-center mt-20 px-20 relative">
        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                    w-2/3 h-[150%] bg-[#D20764] opacity-30
                    blur-[200px] z-0'></div>
        <div className="flex justify-center items-center lg:gap-8 z-10 relative">
          <div className="lg:w-1/3 w-1/3 grid gap-4">
            <img src="/sec7.png" alt="" className="w-xs" />
            <img src="/sec7.gif" alt="" className="w-xs" />
          </div>
          <div className="lg:w-1/3 w-1/3 grid ml-2">
            <img src="/sec8.gif" alt="" className="w-xs" />
            <img src="/sec9.gif" alt="" className="w-xs" />
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="lg:ml-40 mt-10 z-10 relative"
        >
          <p className="mb-6 text-2xl">
            Для привлечения финансирования компании регистрируются на платформе Investeri, 
            предоставляющей уникальные возможности для инвесторов.
          </p>
          <p className="text-2xl font-semibold mb-4">
            Часто банковские организации требуют большое количество документов и затягивают 
            процесс рассмотрения заявки на несколько недель. Именно поэтому компании предпочитают 
            обращаться к инвесторам. Мы тщательно подходим к выбору заемщиков, проводя анализ надежности 
            компании и опыта исполнения государственных контрактов. После чего мы размещаем заявку на 
            привлечение средств.
          </p>
        </motion.div>
        <img src={Ec7} alt="" className='absolute left-40 bottom-0' />
      </div>

    </section>
  );
};

export default Text;