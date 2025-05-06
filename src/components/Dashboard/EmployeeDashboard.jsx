import React from "react";
import Header from "../other/header";
import TaskListNumber from "../other/tasklistnumber";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ loggedIn, handleLogout }) => {
  const { naam, tasks = [] } = loggedIn;

  // Count tasks based on conditions
  const taskStats = {
    newTasks: tasks.filter((task) => task.newTask).length,
    completed: tasks.filter((task) => task.completed).length,
    accepted: tasks.filter((task) => task.active).length,
    failed: tasks.filter((task) => task.failed).length,
  };

  return (
    <>
      <Header username={naam} handleLogout={handleLogout}/>

      <div className="flex flex-wrap justify-center gap-6 px-6">
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

      <div>
        <TaskList tasks={tasks} />
      </div>
    </>
  );
};

export default EmployeeDashboard;
