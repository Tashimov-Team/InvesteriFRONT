import React from 'react'
import { motion } from "framer-motion";

const Text = () => {
    return (
        <section className='w-full bg-[#070816] text-white py-40  relative '>

            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[90%] max-w-full h-50 rounded-t-[93px] bg-gradient-to-b from-[#A183F4] via-[#2F1A77] via-39% to-transparent backdrop-blur-2xl z-0 before:content-[''] before:absolute before:-bottom-20 before:left-1/2 before:-translate-x-1/2 before:w-9/10 before:h-40 before:bg-[#070816] before:rounded-[50%] before:z-1 before:blur-xl"></div>
            <div className='w-full grid lg:grid-cols-2 grid-cols-1  justify-items-center mt-20 px-20 z-10'>


                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className='lg:ml-40 mt-10 lg:order-1 order-3'>

                    <h2 className="text-4xl font-bold mb-4 lg:h-20 order-1">
                        Тендерные займы и <br /> Банковские гарантии
                    </h2>

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
                <div className='lg:order-2 order-2 lg:w-1/3 w-2/5 flex justify-center items-center lg:gap-8 '>
                    <img src="/sec1.gif" alt="" className='w-xl '/>
                    <img src="/sec2.gif" alt="" className='w-xl'/>
                </div>
            </div>
            <div className='w-full grid lg:grid-cols-2 grid-cols-1  justify-items-center px-20'>
                <div className='lg:w-xl w-2/3 flex flex-col justify-center items-center'>
                    <img src="/sec3.gif" alt="" className='w-xl'/>
                    <img src="/sec4.gif" alt="" className='w-xl'/>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className='lg:ml-40 mt-10'>

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
            </div>
            <div className='w-full grid lg:grid-cols-2 grid-cols-1  justify-items-center px-20'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className='lg:ml-40 mt-10 lg:order-1 order-2'>

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
                <div className='lg:order-2 order-1 lg:w-1/3 w-1/3 flex justify-center items-center lg:gap-8 '>
                    <img src="/sec5.gif" alt="" className='w-xl '/>
                    <img src="/sec6.gif" alt="" className='w-xl'/>
                </div>
            </div>
            <div className='w-full grid lg:grid-cols-2 grid-cols-1  justify-items-center px-20'>
                <div className='flex justify-center items-center lg:gap-8 '>
                    <div className='lg:w-1/3 w-1/3 grid gap-4'>
                        <img src="/sec7.png" alt="" className='w-xs'/>
                        <img src="/sec7.gif" alt="" className='w-xs'/>
                    </div>

                    <div className='lg:w-1/3 w-1/3 grid ml-2'>
                        <img src="/sec8.gif" alt="" className='w-xs'/>
                        <img src="/sec9.gif" alt="" className='w-xs'/>
                    </div>

                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className='lg:ml-40 mt-10'>

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
            </div>


        </section>
    )
}

export default Text