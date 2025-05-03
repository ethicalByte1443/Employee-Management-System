import React from 'react';

const TaskList = () => {
  const tasks = [
    {
      id: 1,
      title: 'Design Dashboard Layout',
      description: 'Create a responsive layout for the new employee dashboard.',
      priority: 'High',
      dueDate: '2025-05-05',
    },
    {
      id: 2,
      title: 'Fix Login Bug',
      description: 'Resolve the issue where users cannot login with special characters.',
      priority: 'Medium',
      dueDate: '2025-05-03',
    },
    {
      id: 3,
      title: 'Write Unit Tests',
      description: 'Add unit tests for the user authentication module.',
      priority: 'Low',
      dueDate: '2025-05-10',
    },
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return 'bg-red-500';
      case 'Medium':
        return 'bg-yellow-500';
      case 'Low':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">📝 Task List</h2>
      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="p-5 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {task.title}
              </h3>
              <span
                className={`text-sm text-white px-3 py-1 rounded-full font-medium ${getPriorityColor(
                  task.priority
                )}`}
              >
                {task.priority}
              </span>
            </div>
            <p className="text-gray-700 dark:text-gray-300">{task.description}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              📅 Due: {task.dueDate}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
