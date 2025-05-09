import React, { useState, useEffect } from "react";
import axios from "axios";

const CreateTaskList = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState('');


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
    <div className="flex justify-center mt-6">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-6 rounded-xl border-2 border-blue-500 w-full max-w-sm shadow-md text-sm"
      >
        <h2 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">
          ➕ Create Task
        </h2>

        <div className="mb-3">
          <label className="block mb-1 font-medium">Task Title</label>
          <input
            type="text"
            placeholder="Make a UI design"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-3">
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            placeholder="Detailed description of task (Max 500 words)"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="block mb-1 font-medium">Date</label>
          <input
            type="date"
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
            className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-3">
          <label className="block mb-1 font-medium">Assign To</label>
          <select
            value={selectedEmployee}
            onChange={(e) => setSelectedEmployee(e.target.value)}
            className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
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

        <div className="mb-4">
          <label className="block mb-1 font-medium">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
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

        <div className="mb-4">
          <label className="block mb-1 font-medium">Priority</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Priority</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>


        <button
          type="submit"
          className="w-full bg-black hover:bg-gray-950 text-white font-semibold py-2 rounded-md transition duration-300"
        >
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTaskList;
