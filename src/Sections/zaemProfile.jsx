import React from 'react';
import ZaemSideBar from '../components/zaemSideBar';
import { useAuth } from "../context/AuthContext.jsx";

const ZaemProfilesec = () => {
    const { user } = useAuth();
  
    const maskPhone = (phone) => {
      return phone.replace(/^(\+\d{1,2})?\d{0,6}/, (match) => match.replace(/\d/g, '*'));
    };
  
    return (
      <div className="flex">
        <ZaemSideBar />
        <main className="ml-16 w-full p-8 bg-[#070816] min-h-screen transition-all duration-300">
          <div className="bg-[#0b0b1f] flex justify-center p-4 min-h-screen">
            <div className="w-full max-w-4xl space-y-6">
              <Section title="Статус идентификации">
                <p className="text-gray-400">Идентификация: <span className="text-white">Не пройдена</span></p>
                <p className="text-gray-400">Создайте заявку на займ, чтобы пройти идентификацию.</p>
                <button className="mt-4 bg-gradient-to-r from-pink-500 to-pink-700 py-2 px-4 rounded-xl text-white font-semibold shadow-md hover:opacity-90 transition-all">
                  Создать заявку
                </button>
              </Section>
  
              <Section title="Данные о компании">
                {["ИНН", "Название компании", "Юридический адрес", "КПП", "ОГРН", "БИК Банка", "Наименование Банка", "Номер счёта в банке", "Ссылка на rusprofile.ru"].map((item) => (
                  <InputRow key={item} label={item} />
                ))}
                <FileUpload label="Фото профиля" />
              </Section>
  
              <Section title="Данные владельца">
                {["Фамилия директора", "Имя директора", "Отчество директора", "Серия паспорта", "Номер паспорта", "Дата выдачи", "Код подразделения", "Кем выдан", "Контактный номер", "Электронный адрес"].map((item) => (
                  <InputRow key={item} label={item} />
                ))}
              </Section>
  
              <Section title="Аккаунт">
                {["Номер", "Пароль"].map((item) => (
                  <InputRow key={item} label={item} />
                ))}
                <p className="text-blue-400 text-sm mt-2 cursor-pointer">Сменить пароль</p>
                <p className="text-gray-500 text-xs">Свяжитесь с менеджером, если желаете сменить номер.</p>
              </Section>
            </div>
          </div>
        </main>
      </div>
    );
  };
  
  const Section = ({ title, children }) => (
    <div className="bg-[#242136] p-6 rounded-xl">
      <h2 className="text-white text-lg font-semibold mb-4">{title}</h2>
      <div className="space-y-2 text-gray-300 text-sm">{children}</div>
    </div>
  );
  
  const InputRow = ({ label }) => (
    <div className="mb-2">
      <p className="text-gray-400 text-sm mb-1">{label}</p>
      <input type="text" className="w-full p-2 rounded-md bg-[#1a1a2e] border border-gray-700 text-white" />
    </div>
  );
  
  const FileUpload = ({ label }) => (
    <div className="mt-4">
      <p className="text-gray-400 text-sm mb-1">{label}</p>
      <input type="file" className="text-white" />
    </div>
  );
  
  export default ZaemProfilesec;
  