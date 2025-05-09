import React, { useState, useEffect } from "react";
import axios from "axios";

const CreateTaskList = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");

  const categories = [
    "Design",
    "Development",
    "Marketing",
    "Testing",
    "Reporting",
  ];

  // Fetch employee names from backend
  useEffect(() => {
    axios
      .get("http://localhost:3000/employees")
      .then((res) => setEmployees(res.data))
      .catch((err) => console.error("Error fetching employees:", err));
  }, []);

  // Submit task to selected employee
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedEmployee) {
      alert("Please select an employee");
      return;
    }

    const task = {
      title,
      description,
      date: taskDate,
      category,
      priority,
      newTask: true,
      completed: false,
      failed: false,
      active: true,
    };

    try {
      await axios.post(
        `http://localhost:3000/api/employees/${selectedEmployee}/tasks`,
        task
      );
      alert("✅ Task Created Successfully");
      setTitle("");
      setDescription("");
      setTaskDate("");
      setCategory("");
      setSelectedEmployee("");
    } catch (error) {
      console.error("Task creation failed:", error);
      alert("❌ Error creating task");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 to-blue-950 px-4 overflow-hidden">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 md:p-10 rounded-2xl border border-blue-600 w-full max-w-6xl shadow-xl text-white"
      >
        <h2 className="text-2xl font-bold mb-6 border-b border-gray-700 pb-3 text-blue-400">
          ➕ Create New Task
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 font-semibold">Task Title</label>
            <input
              type="text"
              placeholder="Make a UI design"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Assign To</label>
            <select
              value={selectedEmployee}
              onChange={(e) => setSelectedEmployee(e.target.value)}
              className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Employee</option>
              {employees.map((emp) => (
                <option key={emp._id} value={emp._id}>
                  {emp.naam}
                </option>
              ))}
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block mb-2 font-semibold">Description</label>
            <textarea
              placeholder="Detailed description of task (Max 500 words)"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          <div>
            <label className="block mb-2 font-semibold">Date</label>
            <input
              type="date"
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Category</option>
              {categories.map((cat, i) => (
                <option key={i} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-2 font-semibold">Priority</label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Priority</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
        </div>

        <div className="md:col-span-2 flex justify-end mt-4">
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-700 to-blue-500 hover:from-purple-800 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-md transition duration-300"
          >
            ✅ Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTaskList;
