import React, { useState } from "react";
import Header from "../other/header";

const AddEmployeeForm = ({ handleLogout }) => {
  const [formData, setFormData] = useState({
    naam: "",
    email: "",
    password: "",
    type: "employee",
  });

  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/api/employees", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, tasks: [] }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(true);
        setMessage("🎉 Employee added successfully!");
        setFormData({ naam: "", email: "", password: "" });
      } else {
        setSuccess(false);
        setMessage(data.error || "⚠️ Failed to add employee.");
      }
    } catch (error) {
      setSuccess(false);
      setMessage("🚨 Server error while adding employee.");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col background-radial-gradient overflow-hidden relative text-white">
      <Header username="Admin" handleLogout={handleLogout} />

      <div className="flex justify-center mt-16 px-4 z-10 animate-fade-in">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md backdrop-blur-md bg-white/10 dark:bg-zinc-900/30 p-6 rounded-2xl shadow-xl border border-white/20 dark:border-zinc-700 transition-all"
        >
          <h2 className="text-2xl font-bold text-center text-white mb-6">
            ✨ Add New Employee
          </h2>

          {message && (
            <p
              className={`text-sm text-center mb-4 ${
                success ? "text-green-400" : "text-red-400"
              }`}
            >
              {message}
            </p>
          )}

          {["naam", "email", "password"].map((field, idx) => (
            <div
              key={field}
              className={`mb-4 transform transition duration-300 ease-in-out ${
                idx % 2 === 0 ? "animate-slide-up" : "animate-slide-right"
              }`}
            >
              <input
                type={field === "email" ? "email" : field === "password" ? "password" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required
                placeholder={
                  field.charAt(0).toUpperCase() + field.slice(1)
                }
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              />
            </div>
          ))}

          <button
            type="submit"
            className="w-full py-3 mt-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold tracking-wide transition duration-300"
          >
            ➕ Add Employee
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEmployeeForm;
