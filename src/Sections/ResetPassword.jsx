import React from 'react'

const ResetPassword = () => {
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [message, setMessage] = useState(null);
  
    const handlePasswordReset = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch("http://127.0.0.1:8000/api/password-reset/confirm", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, code, newPassword }),
        });
        if (response.ok) {
          setMessage({ type: "success", text: "Пароль успешно изменен!" });
          setEmail("");
          setCode("");
          setNewPassword("");
        } else {
          setMessage({ type: "error", text: "Ошибка при сбросе пароля." });
        }
      } catch {
        setMessage({ type: "error", text: "Ошибка сервера." });
      }
    };
  
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
        <form className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md" onSubmit={handlePasswordReset}>
          <h2 className="text-white text-xl font-bold mb-4">Сброс пароля</h2>
          {message && <div className={`p-3 mb-4 rounded text-white ${message.type === "success" ? "bg-green-500" : "bg-red-500"}`}>{message.text}</div>}
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Введите ваш email" required className="w-full p-2 mb-3 rounded bg-gray-700 text-white border border-gray-600" />
          <input type="text" value={code} onChange={(e) => setCode(e.target.value)} placeholder="Введите код" required className="w-full p-2 mb-3 rounded bg-gray-700 text-white border border-gray-600" />
          <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="Новый пароль" required className="w-full p-2 mb-3 rounded bg-gray-700 text-white border border-gray-600" />
          <button type="submit" className="w-full bg-green-600 py-2 rounded text-white font-semibold hover:opacity-90">Сменить пароль</button>
        </form>
      </div>
    );
};

export default ResetPassword;