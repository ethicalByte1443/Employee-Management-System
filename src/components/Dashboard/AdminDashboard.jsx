import React from 'react';
import AdminHeader from '../other/AdminHeader';
import CreateTaskList from '../other/CreateTaskList';
const AdminDashboard = () => {
  return (
    <div className="min-h-screen text-white">
      <AdminHeader username="Aseem Pradhan" />
    
        <CreateTaskList />
    </div>
  );
};

export default AdminDashboard;
