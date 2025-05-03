import React from 'react';
import AdminHeader from '../other/AdminHeader';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen text-white">
      <AdminHeader username="Aseem Pradhan" />

      <div className="flex justify-center mt-6">
        <form className="bg-gray-800 p-6 rounded-xl border-2 border-blue-500 w-full max-w-sm shadow-md text-sm">
          <h2 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">➕ Create Task</h2>

          <div className="mb-3">
            <label className="block mb-1 font-medium">Task Title</label>
            <input
              type="text"
              placeholder="Make a UI design"
              className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-3">
            <label className="block mb-1 font-medium">Description</label>
            <textarea
              placeholder="Detailed description of task (Max 500 words)"
              rows="3"
              className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <div className="mb-3">
            <label className="block mb-1 font-medium">Date</label>
            <input
              type="date"
              className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-3">
            <label className="block mb-1 font-medium">Assign To</label>
            <input
              type="text"
              placeholder="Enter Employee Name"
              className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Category</label>
            <input
              type="text"
              placeholder="Design, Development, etc..."
              className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black hover:bg-gray-950 text-white font-semibold py-2 rounded-md transition duration-300"
          >
            Create Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboard;
