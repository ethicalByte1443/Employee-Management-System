import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ setLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submithandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://021f-2402-3a80-1f4f-bd0c-81db-60d5-8d46-8477.ngrok-free.app/", {
        email,
        password,
      });


      


      if (!response.data.success) {
        setError(response.data.message || "Invalid credentials.");
      } else {
        setLoggedIn(response.data.employee); // Assuming `user` contains name, type etc.
        navigate("/dashboard");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center background-radial-gradient overflow-hidden relative">
      {/* Radial background shapes */}
      <div
        className="absolute rounded-full shadow-2xl"
        style={{
          height: "220px",
          width: "220px",
          top: "-60px",
          left: "-130px",
          background: "radial-gradient(#44006b, #ad1fff)",
        }}
      />
      <div
        className="absolute shadow-2xl"
        style={{
          borderRadius: "38% 62% 63% 37% / 70% 33% 67% 30%",
          bottom: "-60px",
          right: "-110px",
          width: "300px",
          height: "300px",
          background: "radial-gradient(#44006b, #ad1fff)",
        }}
      />

      <div className="w-full max-w-4xl bg-glass rounded-xl shadow-lg flex flex-col md:flex-row overflow-hidden z-10">
        <div className="hidden md:block w-1/2 bg-indigo-100 dark:bg-gray-700">
          <img
            src="undraw_global-team_8jok (1).png"
            alt="Login Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 p-6 md:p-8 bg-white dark:bg-gray-800">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
            Welcome Back 👋
          </h2>
          <form onSubmit={submithandler} className="space-y-4">
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                type="email"
                autoComplete="username"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                type="password"
                autoComplete="current-password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="••••••••"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition duration-300"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        .background-radial-gradient {
          background-color: hsl(218, 41%, 15%);
          background-image: radial-gradient(
              650px circle at 0% 0%,
              hsl(218, 41%, 35%) 15%,
              hsl(218, 41%, 30%) 35%,
              hsl(218, 41%, 20%) 75%,
              hsl(218, 41%, 19%) 80%,
              transparent 100%
            ),
            radial-gradient(
              1250px circle at 100% 100%,
              hsl(218, 41%, 45%) 15%,
              hsl(218, 41%, 30%) 35%,
              hsl(218, 41%, 20%) 75%,
              hsl(218, 41%, 19%) 80%,
              transparent 100%
            );
        }

        .bg-glass {
          background-color: hsla(0, 0%, 100%, 0.9) !important;
          backdrop-filter: saturate(200%) blur(25px);
        }
      `}</style>
    </div>
  );
};

export default Login;
