import React from 'react'
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Investors from './Pages/Investors';
import FAQ from './Pages/FAQ'
import Home from './Pages/Home'
import Zaem from './Pages/Zaem'
import Register from './Pages/Register';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import ZaemProfile from './Pages/ZaemProfile'
import MainLayout from "./Layouts/MainLayout";
import CleanLayout from "./Layouts/CleanLayout";
import {AuthProvider} from "./context/AuthContext.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";



function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="/zaem" element={<Zaem />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>

          <Route element={<CleanLayout />}>
            <Route path="/myprofile" element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
            } />
            <Route path="/myzaemprofile" element={<ZaemProfile />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;