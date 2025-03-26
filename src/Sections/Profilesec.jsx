import React from 'react';
import Sidebar from '../components/Sidebar';
import { useAuth } from "../context/AuthContext.jsx";

const ProfilePage = () => {
  const { user } = useAuth();

  const maskPhone = (phone) => {
    return phone.replace(/^(\+\d{1,2})?\d{0,6}/, (match) => match.replace(/\d/g, '*'));
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-16 w-full p-8 bg-[#070816] min-h-screen transition-all duration-300">
        <div className="bg-[#0b0b1f] flex justify-center p-4 min-h-screen">
          <div className="w-full max-w-4xl space-y-6">
            <section className="bg-[#242136] p-6 rounded-xl">
              <h1 className="text-white text-2xl font-bold border-b border-gray-700 pb-2 mb-4">Профиль</h1>
              <h2 className="text-white text-lg font-semibold mb-4">Анкетные данные</h2>
              <div className="grid grid-cols-2 gap-y-4 text-gray-300">
                <InfoRow label="E-mail" value={user.email}>
                  <ChangeButton />
                </InfoRow>
                <InfoRow label="Телефон" value={maskPhone(user.phone)}>
                  <ChangeButton />
                </InfoRow>
                <InfoRow label="Пароль" value="••••••••">
                  <ChangeButton />
                </InfoRow>
                <InfoRow label="ИНН" value="ИНН" />
              </div>
            </section>

            <Section title="Паспортные данные">
              {[
                'Ф.И.О', 'Дата рождения', 'Место рождения', 'Адрес регистрации',
                'Серия и номер', 'Код подразделения', 'Кем выдан', 'Дата выдачи'
              ].map((field) => (
                <Row key={field} field={field} value="знач" />
              ))}
            </Section>

            <Section title="Банковские реквизиты">
              {['Наименование банка', 'Номер счета в банке', 'Бик банка'].map((item) => (
                <Row key={item} field={item} value="" />
              ))}
            </Section>

            <Section title="Подключайтесь к телеграм-каналу">
              <p className="text-gray-400 mb-4">
                Не упускайте важные новости и анонсы новых предложений
              </p>
              <button className="w-full bg-gradient-to-r from-pink-500 to-pink-700 py-2 rounded-xl text-white font-semibold shadow-md hover:opacity-90 transition-all">
                Перейти в телеграм-канал
              </button>
            </Section>

            <Section title="Брокерский счёт">
              <p className="text-gray-400 text-sm">
                Для сделок с ценными бумагами на платформе необходимо открыть брокерский счёт в ЗАО «СБЦ».
                Лицензия <a href="#" className="text-pink-400">№066-02732-100000</a> выдана ФКЦБ России 01.11.2000, без ограничения срока действия.
              </p>
            </Section>

            <Section title="Цифровой кошелёк" className="mb-10">
              <p className="text-gray-400 text-sm">
                Продукт Цифровых Финансовых Активов находится в разработке. Подписывайтесь на наш
                <a href="#" className="text-pink-400"> телеграм-канал </a>
                и следите за обновлениями платформы.
              </p>
            </Section>
          </div>
        </div>
      </main>
    </div>
  );
};

const InfoRow = ({ label, value, children }) => (
  <>
    <div>
      <p className="text-sm">{label}</p>
      <p>{value}</p>
    </div>
    <div className="text-right">{children}</div>
  </>
);

const ChangeButton = () => (
  <button className="text-pink-400 text-sm">Изменить</button>
);

const Section = ({ title, children, className = '' }) => (
  <div className={`bg-[#242136] p-6 rounded-xl ${className}`}>
    <h2 className="text-white text-lg font-semibold mb-4">{title}</h2>
    <div className="space-y-2 text-gray-300 text-sm">{children}</div>
  </div>
);

const Row = ({ field, value }) => (
  <div className="flex justify-between border-b border-gray-700 pb-1">
    <span>{field}</span>
    <span>{value}</span>
  </div>
);

export default ProfilePage;
