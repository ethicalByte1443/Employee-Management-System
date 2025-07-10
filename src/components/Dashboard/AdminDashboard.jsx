import React, { useState } from 'react';
import AdminHeader from '../other/AdminHeader';
import CreateTaskList from '../other/CreateTaskList';
import AddEmployeeForm from '../other/AddEmployeeForm'; // ✅ assumed available
import ProfileInfo from '../other/ProfileInfo'; // ✅ we’ll define this next

const AdminDashboard = ({ loggedIn, handleLogout }) => {
  const [showCreateTask, setShowCreateTask] = useState(false);
  const [showAddEmployee, setShowAddEmployee] = useState(false);

  const handleShowCreateTask = () => {
    setShowCreateTask(true);
    setShowAddEmployee(false);
  };

  const handleShowAddEmployee = () => {
    setShowCreateTask(false);
    setShowAddEmployee(true);
  };

  return (
    <div className="min-h-screen background-radial-gradient text-white">
      <AdminHeader loggedIn={loggedIn} handleLogout={handleLogout} />

      <div className="flex flex-col lg:flex-row gap-6 p-6 animate-fade-in">
        {/* 📌 Left: Profile Info */}
        <div className="w-full lg:w-1/3 bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
          <ProfileInfo user={loggedIn} />
        </div>

        {/* ➕ Right: Action Section */}
        <div className="w-full lg:w-2/3 flex flex-col gap-4">
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={handleShowCreateTask}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow transition"
            >
              ➕ Create Task
            </button>
            <button
              onClick={handleShowAddEmployee}
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow transition"
            >
              👤 Add New Employee
            </button>
          </div>

          <div className="mt-6">
            {showCreateTask && <CreateTaskList />}
            {showAddEmployee && <AddEmployeeForm handleLogout={handleLogout} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
