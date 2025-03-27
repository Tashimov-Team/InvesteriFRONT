import React, { useState } from 'react';
import { useAuth } from "../context/AuthContext.jsx";

const ZaemSideBar = () => {
    const { user, logout } = useAuth();
    const [isHovered, setIsHovered] = useState(false);

  return (
    <aside
      className={`fixed top-0 left-0 h-screen bg-[#201c2c] transition-all duration-300 ${
        isHovered ? 'w-48' : 'w-16'
      } p-2 flex flex-col gap-4`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src="/sidebarlogo.svg" alt="Logo" className="mb-4 w-20 h-8 mx-auto" />
      <div className="flex flex-col gap-4">
        <SidebarItem icon="/sidebar1.svg" label="Профиль" isVisible={isHovered} />
        <SidebarItem icon="/sidebar6.svg" label="Аккаунт" isVisible={isHovered} />
      </div>
      <div className="mt-auto">
        <SidebarItem onClick={logout} icon="/sidebarleave.svg" label="Выход" isVisible={isHovered} />
      </div>
    </aside>
  );
};

const SidebarItem = ({ icon, label, isVisible, onClick }) => (
  <div onClick={onClick} className="flex items-center gap-4 cursor-pointer p-2 hover:bg-purple-700 rounded-lg transition-all">
    <img src={icon} alt="" className="w-6 h-6" />
    <span
      className={`text-white text-sm transition-all duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'
      }`}
    >
      {label}
    </span>
  </div>
);

export default ZaemSideBar;
