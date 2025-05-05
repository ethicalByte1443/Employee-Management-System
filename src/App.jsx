import React, { useContext, useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import AllTask from './components/other/AllTask'
import AdminWelcomePage from './components/other/AdminWelcomePage'
import './App.css'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  // useEffect(() => {
  //   // setLocalStorage()
  //   getLocalStorage()
  // }, [])

  const [user, setUser] = React.useState(null)
  const [empName, setEmpName] = React.useState()
  const [adminName, setAdminName] = React.useState()
  const [loggedIn, setLoggedIn] = React.useState(null)
  
  const AuthData = useContext(AuthContext)

  useEffect(() => {
    setLocalStorage()
  }, [])

  const handleLogin = (email, password) => {
    if (AuthData && AuthData.admin.find((user) => user.email === email && user.password === password))
    {
      const admin = AuthData.admin.find((user) => user.email === email && user.password === password)
      console.log(admin.naam); // This works reliably
      setAdminName(admin.naam)
      setUser('admin')
      setLoggedIn(admin)
    } else if (AuthData && AuthData.employee.find((user) => user.email === email && user.password === password)) {
      const employee = AuthData.employee.find((user) => user.email === email && user.password === password)
      setUser('employee')
      setEmpName(employee.naam)
      setLoggedIn(employee)
    }
    else {
      alert('Invalid credentials')
    }
  }

  console.log(loggedIn);

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}

      {user === 'admin' ? <AdminWelcomePage loggedIn={loggedIn}/> : user === 'employee' ? <EmployeeDashboard loggedIn={loggedIn} /> : null}


      {/* <AllTask /> */}

      {/* <AdminWelcomePage/> */}
    </>
  )
}

export default App
