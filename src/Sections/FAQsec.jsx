import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "Как начать инвестировать?",
    answer:
      "Для начала работы с площадкой необходимо зарегистрироваться и пройти процедуру верификации в личном кабинете инвестора: указать Ф. И. О., паспортные данные, адрес регистрации и места жительства, ИНН. Затем прикрепить фото паспорта. Эти документы требуются для идентификации бенефициара счета и для заключения договоров на платформе. Для того, чтобы начать инвестировать в качестве ИП или юридического лица, вам необходимо зарегистрироваться как физическое лицо и далее добавить аккаунт ИП или юридического лица. Процесс верификации занимает до 24 часов. Уведомление о прохождении придёт вам в СМС.",
  },
  {
    question: "Кто платит налоги на платформе?",
    answer:
      "На нашей платформе НДФЛ оплачивает заёмщик. Вам поступают выплаты, уже 'очищенные' от налогов.",
  },
  {
    question: "Для чего нужен паспорт при регистрации?",
    answer:
      "Паспорт необходим для идентификации личности, принятия на обслуживание, а также исполнения ФЗ №115 РФ. Это требование Центрального Банка РФ для всех инвестиционных платформ. Все файлы-копии паспортов, после проверки и аккредитации, переносятся на отдельный, выделенный сервер и хранятся в резервном хранилище, доступ к которому имеет 2 уровня защиты. Данный сервер изолирован от возможности подключения к нему из внешнего мира, что максимально исключает попытку утечки конфиденциальных данных.",
  },
];

const FAQsec = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleQuestion = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <section className="bg-[#070816] text-[#F0F0F0] py-10 w-full min-h-screen flex justify-center items-center gap-8 flex-col">
            <h2 className="text-white text-3xl md:text-4xl mb-8 text-center">FAQ</h2>
            <div className="lg:w-2/3 space-y-4">
                {faqData.map((item, index) => (
                <div
                    key={index}
                    className="bg-[#0A0A1F] border border-[#F0F0F0] rounded-2xl p-4 cursor-pointer"
                    onClick={() => toggleQuestion(index)}
                >
                    <div className="flex justify-between items-center">
                    <h3 className="text-[#F0F0F0] text-lg md:text-xl font-medium">
                        {item.question}
                    </h3>
                    <img
                        src={`/${activeIndex === index ? "Close" : "Plus"}.svg`}
                        alt="icon"
                        className="w-6 h-6"
                    />
                    </div>
                    <AnimatePresence>
                    {activeIndex === index && (
                        <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-[#C4C4D0] mt-3 text-sm md:text-base"
                        >
                        {item.answer}
                        </motion.div>
                    )}
                    </AnimatePresence>
                </div>
                ))}
            </div>
        </section>
    );
}

export default FAQsec