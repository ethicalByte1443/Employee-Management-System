import React from "react";
import AdminHeader from "./AdminHeader";

const AdminWelcomePage = ({ loggedIn }) => {
  return (
    <>
      {/* Header Section */}
      <AdminHeader username={loggedIn.naam} />

      {/* Compact, Centered Welcome Section */}
      <div className="min-h-[80vh] flex items-center justify-center px-4 py-10  text-white">
        <div className="w-full max-w-5xl bg-gray-900 p-10 rounded-2xl shadow-2xl flex flex-col lg:flex-row items-center gap-10">
          {/* Admin Photo - Now vertically centered */}
          <div className="flex-shrink-0 p-16">
            <img
              src="aseem.jpg"
              alt="Admin"
              className="w-64 h-64 lg:w-56 lg:h-56 rounded-full border-4 border-blue-400 shadow-md"
            />
          </div>

          {/* Text + Column Buttons */}
          <div className="flex-1 w-full text-center lg:text-left">
            <h1 className="text-4xl font-extrabold mb-2 text-blue-400">
              👨‍💼 Welcome, {loggedIn.naam}
            </h1>
            <p className="text-gray-300 text-lg mb-6">
              Manage employee tasks, monitor progress, and ensure smooth
              workflow across the team.
            </p>

            <div className="flex flex-col gap-4 items-center lg:items-start">
              <button className="bg-gray-950 hover:bg-blue-500 w-full max-w-md text-white font-bold py-3 px-6 rounded-xl transition">
                📋 View All Tasks
              </button>
              <button className="bg-gray-950 hover:bg-blue-500 w-full max-w-md text-white font-bold py-3 px-6 rounded-xl transition">
                ➕ Create New Task
              </button>
              <button className="bg-gray-950 hover:bg-blue-500 w-full max-w-md text-white font-bold py-3 px-6 rounded-xl transition">
                👥 Manage Employees
              </button>
              <button className="bg-gray-950 hover:bg-blue-500 w-full max-w-md text-white font-bold py-3 px-6 rounded-xl transition">
                📊 View Reports
              </button>
              <button className="bg-gray-950 hover:bg-blue-500 w-full max-w-md text-white font-bold py-3 px-6 rounded-xl transition">
                ⚙️ Admin Settings
              </button>
              <button className="bg-gray-950 hover:bg-blue-500 w-full max-w-md text-white font-bold py-3 px-6 rounded-xl transition">
                🔒 Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminWelcomePage;
