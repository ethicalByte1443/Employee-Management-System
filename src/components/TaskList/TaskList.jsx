import React from "react";

const TaskList = ({ tasks }) => {
  return (
    <div className="mt-10 px-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
        📋 Your Tasks
      </h2>

      {tasks.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-300">No tasks assigned.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tasks.map((task, index) => {
            // Set badge color based on task status
            let statusColor =
              task.completed
                ? "bg-green-100 text-green-700"
                : task.failed
                ? "bg-red-100 text-red-700"
                : task.active
                ? "bg-blue-100 text-blue-700"
                : "bg-yellow-100 text-yellow-700";

            // Set border color based on priority
            let borderColor =
              task.priority === "high"
                ? "border-red-500"
                : task.priority === "medium"
                ? "border-yellow-400"
                : "border-green-400";

            return (
              <div
                key={index}
                className={`border-l-4 ${borderColor} rounded-xl shadow-md bg-white dark:bg-zinc-900 p-5 hover:scale-[1.02] transition-all duration-200`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {task.title}
                  </h3>
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded ${statusColor}`}
                  >
                    {task.completed
                      ? "Completed"
                      : task.failed
                      ? "Failed"
                      : task.active
                      ? "Accepted"
                      : "New"}
                  </span>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {task.description}
                </p>

                <div className="flex flex-wrap text-xs mt-4 gap-3 text-gray-500 dark:text-gray-400">
                  <span className="inline-flex items-center gap-1">
                    📅 <span>{task.date}</span>
                  </span>
                  <span className="inline-flex items-center gap-1">
                    🗂️ <span>{task.category}</span>
                  </span>
                  <span className="inline-flex items-center gap-1">
                    ⚡ <span className="capitalize">{task.priority} Priority</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TaskList;
