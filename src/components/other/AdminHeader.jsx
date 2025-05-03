import React from 'react';

const AdminHeader = ({ username }) => {
  return (
    <header className="bg-slate-50 dark:bg-slate-900 shadow-lg px-10 py-6 m-4 rounded-xl border border-slate-200 dark:border-slate-700">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white tracking-tight">
            Admin Dashboard Panel
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 tracking-wide">
            Logged in as <span className="text-teal-600 dark:text-cyan-400">{username}</span>
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-lg font-semibold text-teal-700 dark:text-cyan-400">{username}</p>
          </div>
          <button className="bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white font-medium py-2 px-5 rounded-lg shadow-md transition duration-300">
            Log Out
          </button>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
