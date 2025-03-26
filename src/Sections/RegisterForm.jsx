import { useState } from "react";
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    password_confirmation: "",
    agree: false,
    type: "inv",
  });

  const [message, setMessage] = useState(null);

  const placeholders = {
    name: "Имя",
    email: "Email",
    phone: "Телефон",
    password: "Пароль",
    password_confirmation: "Подтвердите пароль"
  };
  

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage({ type: "success", text: "Регистрация успешна!" });
      } else {
        const errorData = await response.json();
        setMessage({ type: "error", text: errorData.message || "Ошибка регистрации" });
      }
    } catch (error) {
      setMessage({ type: "error", text: "Произошла ошибка, попробуйте позже." });
    }
  };

  return (
      <div className="min-h-screen flex items-center justify-center bg-[#070816] p-4">
        <form
            onSubmit={handleSubmit}
            className="bg-[#242136] p-6 rounded-lg shadow-lg w-full max-w-md"
        >
          <h2 className="text-white text-xl font-bold mb-4">Регистрация</h2>

          {/* Сообщение */}
          {message && (
              <div className={`p-3 mb-4 rounded text-white ${message.type === "success" ? "bg-green-500" : "bg-red-500"}`}>
                {message.text}
              </div>
          )}

          {/* Слайдер переключения ролей */}
          <div className="flex justify-center mb-4">
            <button
                type="button"
                className={`px-4 py-2 w-1/2 text-center rounded-l ${formData.type === "inv" ? "bg-pink-600 text-white" : "bg-gray-700 text-gray-300"}`}
                onClick={() => setFormData({...formData, type: "inv"})}
            >
              Инвестор
            </button>
            <button
                type="button"
                className={`px-4 py-2 w-1/2 text-center rounded-r ${formData.type === "zaem" ? "bg-pink-600 text-white" : "bg-gray-700 text-gray-300"}`}
                onClick={() => setFormData({...formData, type: "zaem"})}
            >
              Заемщик
            </button>
          </div>

          {["name", "email", "phone", "password", "password_confirmation"].map((field) => (
            <input
                key={field}
                type={field.includes("password") ? "password" : field === "email" ? "email" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                placeholder={placeholders[field]}
                className="w-full p-2 mb-3 rounded bg-[#1a192a] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
            />
          ))}

          <div className="flex items-center mb-3">
            <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                className="mr-2"
                required
            />
            <label className="text-gray-300 text-sm">
              Я ознакомился и согласен с
              <a href="#" className="text-pink-400 ml-1">Условиями использования</a> и
              <a href="#" className="text-pink-400 ml-1">Политикой конфиденциальности</a>
            </label>
          </div>

          <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-pink-700 py-2 rounded text-white font-semibold hover:opacity-90 transition-all"
          >
            Зарегистрироваться
          </button>

          <p className="text-gray-400 text-center mt-3 text-sm">
            Уже зарегистрированы? <Link to="/login" className="text-pink-400">Войдите</Link>
          </p>
        </form>
      </div>
  );
};

export default RegistrationForm;
