import React from "react";
import Header from "../other/header";
import TaskListNumber from "../other/tasklistnumber";
import TaskList from "../TaskList/TaskList";
const EmployeeDashboard = () => {
  return (
    <>
      <Header username={"Aseem"} />
      <div className="flex flex-wrap justify-center gap-6 px-6">
        <TaskListNumber count={5} label="New Tasks" />
        <TaskListNumber
          count={2}
          label="Completed"
          color="from-yellow-400 to-yellow-600"
          borderColor="border-yellow-300 dark:border-yellow-700"
        />
        <TaskListNumber
          count={8}
          label="Accepted"
          color="from-green-400 to-green-600"
          borderColor="border-green-300 dark:border-green-700"
        />
        <TaskListNumber
          count={1}
          label="Failed"
          color="from-pink-500 to-pink-700"
          borderColor="border-pink-300 dark:border-pink-700"
        />
      </div>

      <div>
        <TaskList />
      </div>
    </>
  );
};

export default EmployeeDashboard;
