import React from "react";
import AdminHeader from "./AdminHeader";

const AllTask = () => {
  // Sample data (this would ideally come from an API or props)
  const tasks = [
    {
      id: 1,
      title: "Design Dashboard UI",
      description: "Create a modern dashboard UI for employees.",
      priority: "High",
      dueDate: "2025-05-10",
      assignedTo: "Aseem",
      category: "Design",
    },
    {
      id: 2,
      title: "Fix API Authentication",
      description: "Resolve token expiration issue in login API.",
      priority: "Medium",
      dueDate: "2025-05-08",
      assignedTo: "Raj",
      category: "Development",
    },
    {
      id: 3,
      title: "Write Test Cases",
      description: "Add unit tests for employee module.",
      priority: "Low",
      dueDate: "2025-05-12",
      assignedTo: "Priya",
      category: "Testing",
    },
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-500";
      case "Medium":
        return "bg-yellow-500";
      case "Low":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <>
      <AdminHeader username="Aseem Pradhan" />
      <div className="p-6 min-h-screen text-white">
        <h2 className="text-2xl font-bold mb-6 text-center">
          📋 All Employee Tasks
        </h2>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="bg-gray-800 border border-gray-700 rounded-xl p-5 shadow-md hover:shadow-lg transition"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">{task.title}</h3>
                <span
                  className={`text-xs text-white px-2 py-1 rounded-full font-medium ${getPriorityColor(
                    task.priority
                  )}`}
                >
                  {task.priority}
                </span>
              </div>
              <p className="text-gray-300 text-sm mb-2">{task.description}</p>
              <div className="text-gray-400 text-xs space-y-1 mt-4">
                <p>📅 Due: {task.dueDate}</p>
                <p>👤 Assigned To: {task.assignedTo}</p>
                <p>🗂️ Category: {task.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllTask;
