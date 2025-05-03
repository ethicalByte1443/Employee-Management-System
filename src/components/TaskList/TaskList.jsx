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
    {
      id: 4,
      title: 'Update API Docs',
      description: 'Revise and update the API documentation.',
      priority: 'Medium',
      dueDate: '2025-05-06',
    },
    {
      id: 5,
      title: 'Deploy Backend',
      description: 'Deploy backend services to production.',
      priority: 'High',
      dueDate: '2025-05-07',
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
      <div className="overflow-x-auto">
        <div className="flex gap-4 pb-4 min-w-full">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="min-w-[300px] max-w-[300px] h-[230px] flex flex-col justify-between p-5 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
            >
              {/* Header: Title and Priority */}
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{task.title}</h3>
                <span
                  className={`text-xs text-white px-2 py-0.5 rounded-full font-medium ${getPriorityColor(
                    task.priority
                  )}`}
                >
                  {task.priority}
                </span>
              </div>

              {/* Centered Description */}
              <div className="flex-1 flex items-center justify-center text-center px-2">
                <p className="text-gray-700 dark:text-gray-300 text-sm">{task.description}</p>
              </div>

              {/* Footer: Due Date */}
              <div className="text-right">
                <p className="text-xs text-gray-500 dark:text-gray-400">📅 Due: {task.dueDate}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskList;
