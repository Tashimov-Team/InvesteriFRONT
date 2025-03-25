import React from 'react'
import {motion} from 'framer-motion';

const Main = () => {
    return (
        <motion.section
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
          className="relative w-full min-h-screen flex items-center justify-center text-center px-4"
          style={{
            backgroundImage: 'url("/footer.gif")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-[#070816]/60"></div>
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 text-white">
            <h1 className="text-4xl md:text-3xl sm:text-2xl font-bold mb-4">
              Добро пожаловать на платформу
            </h1>
            <h2 className="text-3xl md:text-2xl sm:text-xl font-semibold mb-2">
              INVESTERI — ваш надёжный партнёр
            </h2>
            <p className="text-2xl md:text-xl sm:text-lg font-medium">
              в мире P2P-кредитования!
            </p>
          </motion.div>
        </motion.section>
    );
}

export default Main