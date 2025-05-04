import React from "react";
import Header from "../other/header";
import TaskListNumber from "../other/tasklistnumber";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ EmpName }) => {
  return (
    <>
      <Header username={EmpName} />
      
      <div className="flex flex-wrap justify-center gap-6 px-6">
        <TaskListNumber
          count={5}
          label="New Tasks"
          color="from-blue-500 to-indigo-600"
          borderColor="border-blue-300 dark:border-indigo-600"
        />
        
        <TaskListNumber
          count={2}
          label="Completed"
          color="from-indigo-500 to-purple-600"
          borderColor="border-indigo-400 dark:border-purple-600"
        />
        
        <TaskListNumber
          count={8}
          label="Accepted"
          color="from-cyan-500 to-blue-600"
          borderColor="border-cyan-400 dark:border-blue-600"
        />
        
        <TaskListNumber
          count={1}
          label="Failed"
          color="from-rose-500 to-pink-600"
          borderColor="border-rose-400 dark:border-pink-600"
        />
      </div>

      <div>
        <TaskList />
      </div>
    </>
  );
};

export default EmployeeDashboard;
