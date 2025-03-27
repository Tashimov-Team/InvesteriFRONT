import { useState } from "react";

const RequestResetCode = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8000/api/password-reset", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        setMessage({ type: "success", text: "Код отправлен на вашу почту." });
      } else {
        setMessage({ type: "error", text: "Ошибка при отправке кода." });
      }
    } catch {
      setMessage({ type: "error", text: "Ошибка сервера." });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <form className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md" onSubmit={handleEmailSubmit}>
        <h2 className="text-white text-xl font-bold mb-4">Запрос кода сброса</h2>
        {message && <div className={`p-3 mb-4 rounded text-white ${message.type === "success" ? "bg-green-500" : "bg-red-500"}`}>{message.text}</div>}
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Введите ваш email" required className="w-full p-2 mb-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500" />
        <button type="submit" className="w-full bg-pink-600 py-2 rounded text-white font-semibold hover:opacity-90">Отправить код</button>
      </form>
    </div>
  );
};

export default RequestResetCode