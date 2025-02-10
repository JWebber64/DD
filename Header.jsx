import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const Header = () => {
  const { user, logout } = useAuthContext();

  return (
    <header className="bg-gradient-to-r from-[#111613] via-[#2f3827] to-[#111613] p-4 rounded-b-lg text-[#dbe0da]">
      <div className="max-w-6xl mx-auto flex justify-between items-start">
        <div className="flex items-start">
          <img
            src="https://i.ibb.co/xSFBR6h9/logo1-ezgif-com-crop.png"
            alt="Diamond Data Logo"
            className="h-[40px] w-[40px] rounded-lg hover:scale-105 transition-transform mr-4"
          />
          <div className="bg-[#545e46] px-3 py-1 rounded-md shadow-md">
            <h1 className="text-xl font-bold text-[#dbe0da]">Diamond Data</h1>
          </div>
        </div>
        
        <nav className="grid grid-rows-2 gap-y-2">
          <div className="grid grid-cols-3 gap-x-4">
            <Link to="/league-info" className="hover:text-[#AA8B56] transition-colors">League Info</Link>
            <Link to="/league-admin" className="hover:text-[#AA8B56] transition-colors">League Admin</Link>
            <button onClick={logout} className="hover:text-[#AA8B56] transition-colors">Logout</button>
          </div>
          <div className="grid grid-cols-3 gap-x-4">
            <Link to="/team-info" className="hover:text-[#AA8B56] transition-colors">Team Info</Link>
            <Link to="/team-admin" className="hover:text-[#AA8B56] transition-colors">Team Admin</Link>
            <Link to="/score-sheets" className="hover:text-[#AA8B56] transition-colors">Score Sheets</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;