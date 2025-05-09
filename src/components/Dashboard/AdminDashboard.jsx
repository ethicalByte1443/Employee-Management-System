import React from 'react';
import AdminHeader from '../other/AdminHeader';
import CreateTaskList from '../other/CreateTaskList';
const AdminDashboard = ( { loggedIn , handleLogout}) => {
  return (
    <div className="min-h-screen text-white">
        <AdminHeader loggedIn={loggedIn} handleLogout={handleLogout} />
    
        <CreateTaskList />
    </div>
  );
};

export default AdminDashboard;
