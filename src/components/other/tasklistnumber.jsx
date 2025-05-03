import React from 'react';

const TaskListNumber = ({ count = 0, label = "New Tasks", color = "from-red-400 to-red-600", borderColor = "border-red-300 dark:border-red-700" }) => {
  return (
    <div className={`flex flex-col justify-center items-center h-40 w-64 bg-gradient-to-r ${color} text-white rounded-xl shadow-md border ${borderColor} p-6`}>
      <h2 className="text-5xl font-extrabold mb-2">{count}</h2>
      <h3 className="text-lg font-semibold tracking-wide">{label}</h3>
    </div>
  );
};

export default TaskListNumber;
