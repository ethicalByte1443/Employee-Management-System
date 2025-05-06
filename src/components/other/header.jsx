import React from 'react';

const Header = ({ username, handleLogout }) => {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-md px-8 py-6 m-4 rounded-xl border border-gray-200 dark:border-gray-700">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-gray-800 dark:text-white tracking-wide">
          👋 Hello, <span className="text-4xl font-black text-blue-600 dark:text-blue-400">{username}!</span>
        </h1>
        <button 
        onClick={handleLogout}
        className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition duration-300">
          Log Out
        </button>
      </div>
    </header>
  );
};

export default Header;
