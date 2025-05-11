import React, { useState } from "react";
import Header from "../other/header";
import TaskListNumber from "../other/tasklistnumber";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ loggedIn, handleLogout }) => {
  const { naam, email, tasks: initialTasks = [] } = loggedIn;
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState("All");
  const [selectedTask, setSelectedTask] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const taskStats = {
    newTasks: tasks.filter((task) => task.newTask).length,
    completed: tasks.filter((task) => task.completed).length,
    accepted: tasks.filter((task) => task.active).length,
    failed: tasks.filter((task) => task.failed).length,
  };

  const filteredTasks = tasks.filter((task) => {
    switch (filter) {
      case "New":
        return task.newTask;
      case "Completed":
        return task.completed;
      case "Accepted":
        return task.active;
      case "Failed":
        return task.failed;
      default:
        return true;
    }
  });

  const handleTaskClick = (task, index) => {
    setSelectedTask(task);
    setSelectedIndex(index);
  };

  const updateTaskStatus = async (status) => {
    const updatedTasks = [...tasks];
    const updatedTask = {
      ...updatedTasks[selectedIndex],
      newTask: false,
      active: status === "Accepted",
      completed: status === "Completed",
      failed: status === "Failed",
    };

    updatedTasks[selectedIndex] = updatedTask;
    setTasks(updatedTasks);
    setSelectedTask(null);

    // ✅ API call to update task using email + naam + index
    try {
      const response = await fetch(
        "http://localhost:3000/api/employees/update-task-status",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            naam,
            index: selectedIndex,
            status: status.toLowerCase(),
          }),
        }
      );

      if (!response.ok) {
        console.error("Failed to update task in database");
      }
    } catch (err) {
      console.error("Error while updating task in DB:", err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col background-radial-gradient overflow-hidden relative text-white">
      <Header username={naam} handleLogout={handleLogout} />

      <div className="flex flex-wrap justify-center gap-6 px-6 mt-8 z-10">
        {["New", "Completed", "Accepted", "Failed"].map((type, idx) => (
          <div
            key={type}
            className={`animate-slide-up delay-${
              75 * (idx + 1)
            } cursor-pointer`}
            onClick={() => setFilter(type)}
          >
            <TaskListNumber
              count={
                taskStats[`${type.toLowerCase()}Tasks`] ??
                taskStats[type.toLowerCase()]
              }
              label={type}
              color={
                type === "New"
                  ? "from-blue-500 to-indigo-600"
                  : type === "Completed"
                  ? "from-indigo-500 to-purple-600"
                  : type === "Accepted"
                  ? "from-cyan-500 to-blue-600"
                  : "from-rose-500 to-pink-600"
              }
              borderColor={
                type === "New"
                  ? "border-blue-300 dark:border-indigo-600"
                  : type === "Completed"
                  ? "border-indigo-400 dark:border-purple-600"
                  : type === "Accepted"
                  ? "border-cyan-400 dark:border-blue-600"
                  : "border-rose-400 dark:border-pink-600"
              }
            />
          </div>
        ))}
      </div>

      <div className="mt-10 px-6 z-10 animate-slide-up delay-500">
        <TaskList tasks={filteredTasks} onTaskClick={handleTaskClick} />
      </div>

      {selectedTask && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-40 z-50">
          <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-lg w-96">
            <h3 className="text-lg font-semibold mb-4 text-black dark:text-white">
              Update Task Status
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {selectedTask.title}
            </p>
            <div className="flex justify-between gap-2">
              {["Completed", "Accepted", "Failed"].map((status) => (
                <button
                  key={status}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded"
                  onClick={() => updateTaskStatus(status)}
                >
                  Mark as {status}
                </button>
              ))}
            </div>
            <button
              className="mt-4 text-sm text-gray-500 hover:underline"
              onClick={() => setSelectedTask(null)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeDashboard;
