import React, { useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import LandingPage from "./components/other/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(null); // Will store user data

  const handleLogout = () => {
    setLoggedIn(null);
  };

  useEffect(() => {
    if (loggedIn) {
      console.log("User logged in:", loggedIn);
    } else {
      console.log("User logged out.");
    }
  }, [loggedIn]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route
          path="/dashboard"
          element={
            loggedIn ? (
              loggedIn.user === "admin" ? (
                <AdminDashboard loggedIn={loggedIn} handleLogout={handleLogout} />
              ) : (
                <EmployeeDashboard loggedIn={loggedIn} handleLogout={handleLogout} />
              )
            ) : (
              <Login setLoggedIn={setLoggedIn} />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
