import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LoginForm = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await login(formData.email, formData.password);
      navigate("/myprofile");
    } catch (error) {
      setError("Ошибка входа: " + (error.message || "проверьте данные"));
    } finally {
      setLoading(false);
    }
  };

  return (
      <div className="min-h-screen flex items-center justify-center bg-[#070816]">
        <form
            onSubmit={handleSubmit}
            className="bg-[#242136] p-8 rounded-lg shadow-lg w-full max-w-sm"
        >
          <h2 className="text-white text-2xl font-bold mb-6">Вход</h2>

          {error && <p className="text-red-500 mb-4">{error}</p>}

          <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-3 mb-4 rounded bg-transparent text-white border border-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
          />

          <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Пароль"
              className="w-full p-3 mb-6 rounded bg-transparent text-white border border-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
          />

          <button
              type="submit"
              className="w-full bg-pink-600 hover:bg-pink-700 py-3 rounded text-white font-semibold shadow-md shadow-pink-600/40 transition-all"
              disabled={loading}
          >
            {loading ? "Вход..." : "Войти"}
          </button>

          <div className="text-center mt-6 text-gray-400 text-sm">
            <p className="mb-1">Впервые?</p>
            <Link to="/register" className="text-pink-400 block mb-1">
              Зарегистрируйтесь
            </Link>
            <a href="#" className="text-pink-400 block">
              Забыли пароль?
            </a>
          </div>
        </form>
      </div>
  );
};

export default LoginForm;
