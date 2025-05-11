import React, { useState } from "react";
import Header from "../other/header";
import TaskListNumber from "../other/tasklistnumber";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ loggedIn, handleLogout }) => {
  const { naam, tasks = [] } = loggedIn;
  const [filter, setFilter] = useState("All");

  const taskStats = {
    newTasks: tasks.filter((task) => task.newTask).length,
    completed: tasks.filter((task) => task.completed).length,
    accepted: tasks.filter((task) => task.active).length,
    failed: tasks.filter((task) => task.failed).length,
  };

  // Filter tasks based on selected filter
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
        return true; // All
    }
  });

  return (
    <div className="min-h-screen flex flex-col background-radial-gradient overflow-hidden relative text-white">
      {/* Background Shapes */}
      <div
        className="absolute rounded-full shadow-2xl animate-fade-in"
        style={{
          height: "220px",
          width: "220px",
          top: "-60px",
          left: "-130px",
          background: "radial-gradient(#44006b, #ad1fff)",
        }}
      />
      <div
        className="absolute shadow-2xl animate-fade-in"
        style={{
          borderRadius: "38% 62% 63% 37% / 70% 33% 67% 30%",
          bottom: "-60px",
          right: "-110px",
          width: "300px",
          height: "300px",
          background: "radial-gradient(#44006b, #ad1fff)",
        }}
      />

      {/* Header */}
      <Header username={naam} handleLogout={handleLogout} />

      {/* Task Summary Cards */}
      <div className="flex flex-wrap justify-center gap-6 px-6 mt-8 z-10">
        <div className="animate-slide-up delay-75 cursor-pointer" onClick={() => setFilter("New")}>
          <TaskListNumber
            count={taskStats.newTasks}
            label="New Tasks"
            color="from-blue-500 to-indigo-600"
            borderColor="border-blue-300 dark:border-indigo-600"
          />
        </div>

        <div className="animate-slide-up delay-150 cursor-pointer" onClick={() => setFilter("Completed")}>
          <TaskListNumber
            count={taskStats.completed}
            label="Completed"
            color="from-indigo-500 to-purple-600"
            borderColor="border-indigo-400 dark:border-purple-600"
          />
        </div>

        <div className="animate-slide-up delay-200 cursor-pointer" onClick={() => setFilter("Accepted")}>
          <TaskListNumber
            count={taskStats.accepted}
            label="Accepted"
            color="from-cyan-500 to-blue-600"
            borderColor="border-cyan-400 dark:border-blue-600"
          />
        </div>

        <div className="animate-slide-up delay-300 cursor-pointer" onClick={() => setFilter("Failed")}>
          <TaskListNumber
            count={taskStats.failed}
            label="Failed"
            color="from-rose-500 to-pink-600"
            borderColor="border-rose-400 dark:border-pink-600"
          />
        </div>
      </div>

      {/* Task List */}
      <div className="mt-10 px-6 z-10 animate-slide-up delay-500">
        <TaskList tasks={filteredTasks} />
      </div>

      {/* CSS Animations (unchanged) */}
      <style jsx>{`
        /* background, animations... (same as before) */
      `}</style>
    </div>
  );
};

export default EmployeeDashboard;
