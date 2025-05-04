import React from 'react'
import { useState } from 'react'

const Login = ({handleLogin}) => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const submithandler = (e) => {
        e.preventDefault();
        handleLogin(email, password);
        console.log(email, password);
        console.log("Submit handler called");
    }


  return (
    <div className="flex items-center justify-center min-h-screen  ">
      <div className="w-full max-w-sm p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-300 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">Login</h2>
        <form 
        onSubmit={(e) => {
            submithandler(e);
        }}
        className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
            value={email}
            onChange={(e) => {
                // console.log(email);
                setEmail(e.target.value);
            }}
              id="email"
              type="email"
              autoComplete="username"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
            value={password}
            onChange={(e) => {
                // console.log(password);
                setPassword(e.target.value);
            }}
              id="password"
              type="password"
              autoComplete="current-password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
