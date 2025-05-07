import React from "react";
import Header from "../other/header";
import TaskListNumber from "../other/tasklistnumber";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ loggedIn, handleLogout }) => {
  const { naam, tasks = [] } = loggedIn;

  const taskStats = {
    newTasks: tasks.filter((task) => task.newTask).length,
    completed: tasks.filter((task) => task.completed).length,
    accepted: tasks.filter((task) => task.active).length,
    failed: tasks.filter((task) => task.failed).length,
  };

  return (
    <div className="min-h-screen flex flex-col background-radial-gradient overflow-hidden relative text-white">
      {/* Radial background shapes */}
      <div
        className="absolute rounded-full shadow-2xl"
        style={{
          height: "220px",
          width: "220px",
          top: "-60px",
          left: "-130px",
          background: "radial-gradient(#44006b, #ad1fff)",
        }}
      />
      <div
        className="absolute shadow-2xl"
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
        <TaskListNumber
          count={taskStats.newTasks}
          label="New Tasks"
          color="from-blue-500 to-indigo-600"
          borderColor="border-blue-300 dark:border-indigo-600"
        />

        <TaskListNumber
          count={taskStats.completed}
          label="Completed"
          color="from-indigo-500 to-purple-600"
          borderColor="border-indigo-400 dark:border-purple-600"
        />

        <TaskListNumber
          count={taskStats.accepted}
          label="Accepted"
          color="from-cyan-500 to-blue-600"
          borderColor="border-cyan-400 dark:border-blue-600"
        />

        <TaskListNumber
          count={taskStats.failed}
          label="Failed"
          color="from-rose-500 to-pink-600"
          borderColor="border-rose-400 dark:border-pink-600"
        />
      </div>

      {/* Task List */}
      <div className="mt-10 px-6 z-10">
        <TaskList tasks={tasks} />
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .background-radial-gradient {
          background-color: hsl(218, 41%, 15%);
          background-image: radial-gradient(
              650px circle at 0% 0%,
              hsl(218, 41%, 35%) 15%,
              hsl(218, 41%, 30%) 35%,
              hsl(218, 41%, 20%) 75%,
              hsl(218, 41%, 19%) 80%,
              transparent 100%
            ),
            radial-gradient(
              1250px circle at 100% 100%,
              hsl(218, 41%, 45%) 15%,
              hsl(218, 41%, 30%) 35%,
              hsl(218, 41%, 20%) 75%,
              hsl(218, 41%, 19%) 80%,
              transparent 100%
            );
        }
      `}</style>
    </div>
  );
};

export default EmployeeDashboard;
