import React, { useState } from "react"
import "./App.css"
import { Login, Register, ResetPassword, ForgotPassword, Home, Profile, EmployeeProfile } from "../component"
import { Routes, Route, useLocation } from "react-router-dom";
import Authentication from "../component/Auth/Authentication"
import AuthGuard from "../guard/AuthGuard";


function App() {
  const [location, setLocation] = useState();
  console.log(window.location.pathname, 'hdgdsfjhgsdf');
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Authentication><Login /></Authentication>}></Route>
        <Route path="/login" element={<Authentication><Login /></Authentication>}></Route>
        <Route path="/register" element={<Authentication><Register /></Authentication>}></Route>
        <Route path="/forgotPassword" element={<Authentication><ForgotPassword /></Authentication>}></Route>
        <Route path="/resetPassword" element={<Authentication><ResetPassword /></Authentication>}></Route>
        <Route path="/home" element={<AuthGuard><Home /></AuthGuard>}></Route>
        <Route path="/profile" element={<AuthGuard><Profile/></AuthGuard>}></Route>
        <Route path="/employeeprofile" element={<AuthGuard><EmployeeProfile/></AuthGuard>}></Route>
      </Routes>
    </div>
  )
}

export default App
