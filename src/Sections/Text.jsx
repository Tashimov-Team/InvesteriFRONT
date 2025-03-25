import React from 'react'
import { motion } from "framer-motion";

const Text = () => {
    return (
        <section className='w-full bg-[#070816] text-white pt-40 relative'>

            {/* Верхний градиент */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[90%] max-w-full h-50 rounded-t-[93px] bg-gradient-to-b from-[#A183F4] via-[#2F1A77] via-39% to-transparent backdrop-blur-2xl z-0 before:content-[''] before:absolute before:-bottom-20 before:left-1/2 before:-translate-x-1/2 before:w-9/10 before:h-40 before:bg-[#070816] before:rounded-[50%] before:z-1 before:blur-xl"></div>

            {/* Первая секция */}
            <div className='w-full grid lg:grid-cols-2 grid-cols-1 justify-items-center mt-20 px-20 z-10 relative'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className='lg:ml-40 mt-10 lg:order-1 order-3 relative z-10'>

                    <h2 className="text-5xl font-bold lg:mb-35 lg:h-20 order-1 mb-4">
                        Тендерные <br/> займы и <br /> Банковские <br/> гарантии
                    </h2>

                    <p className="text-2xl font-bold mb-4">
                        Компаниям нужны средства на исполнение государственных контрактов.
                    </p>
                    <p className="text-xl mb-4">
                        В
                        России ежедневно сотни компаний <br/>
                        выигрывают государственные
                        контракты, но <br/>
                        не у всех есть возможности для их <br/>
                        исполнения.
                    </p>
                </motion.div>

                {/* Градиент между секциями */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/3 -translate-y-1/2 rounded-4xl
                    w-2/4 h-5/5 bg-[#D20764] opacity-100
                    blur-[700px] z-0"></div>

                <div className='lg:order-2 order-2 lg:w-1/3 w-2/5 flex justify-center items-center lg:gap-8 relative z-10'>
                    <img src="/sec1.gif" alt="" className='w-xl'/>
                    <img src="/sec2.gif" alt="" className='w-xl'/>
                </div>
            </div>

            {/* Вторая секция */}
            <div className='w-full grid lg:grid-cols-2 grid-cols-1 justify-items-center px-20 relative mt-40'>
                <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                    w-full h-[150%] bg-gradient-to-l from-[#D20764] to-transparent opacity-30
                    blur-[100px] z-0'></div>

                <div className='lg:w-xl w-2/3 flex flex-col justify-center items-center relative z-10'>
                    <img src="/sec3.gif" alt="" className='w-xl'/>
                    <img src="/sec4.gif" alt="" className='w-xl'/>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className='lg:ml-40 mt-10 relative z-10'>
                    <p className="text-3xl font-bold mb-4">
                        Для привлечения финансирования компании регистрируются на платформе <br/>
                        Investeri, предоставляющей уникальные <br/>
                        возможности для инвесторов.
                    </p>
                    <p className="text-xl mb-4">
                        Часто банковские организации требуют большое <br/>
                        количество документов и затягивают процесс <br/>
                        рассмотрения заявки на несколько недель. Именно <br/>
                        поэтому компании предпочитают обращаться к <br/>
                        инвесторам. Мы тщательно подходим к выбору <br/>
                        заемщиков, проводя анализ надежности компании и <br/> опыта исполнения государственных контрактов. <br/>
                        После чего мы размещаем заявку на привлечение средств.
                    </p>
                </motion.div>
            </div>

            {/* Остальные секции с аналогичными градиентами */}
            <div className='w-full grid lg:grid-cols-2 grid-cols-1 justify-items-center px-20 relative mt-40'>
                <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                    w-2/3 h-[150%] bg-[#D20764] opacity-30
                    blur-[200px] z-0'></div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className='lg:ml-40 mt-10 lg:order-1 order-2 relative z-10'>
                    <p className="lg:text-2xl font-semibold mb-4">
                        На инвестиционной платформе INVESTERI собрано огромное количество
                        активных инвесторов...
                    </p>
                </motion.div>

                <div className='lg:order-2 order-1 lg:w-1/3 w-1/3 flex justify-center items-center lg:gap-8 relative z-10'>
                    <img src="/sec5.gif" alt="" className='w-xl'/>
                    <img src="/sec6.gif" alt="" className='w-xl'/>
                </div>
            </div>

        </section>
    )
}

export default Text