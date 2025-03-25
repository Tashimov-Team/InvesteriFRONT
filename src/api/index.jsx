import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Интерцептор для обработки 401 ошибки
api.interceptors.response.use(
    response => response,
    error => {
        if (error.response?.status === 401) {
            localStorage.removeItem('authToken');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default api;

export const auth = {
    login: (data) => api.post('/api/login', data),
    logout: () => api.post('/api/logout'),
    getUser: () => api.get('/api/user'),
};
