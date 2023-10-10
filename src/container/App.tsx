import React, { useState } from "react"
import "./App.css"
import { Login, Register, ResetPassword, ForgotPassword } from "../component"
import { Routes, Route, useLocation } from "react-router-dom";
import Authentication from "../component/Auth/Authentication"

function App() {
  const [location, setLocation] = useState();
  console.log(window.location.pathname, 'hdgdsfjhgsdf');
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Authentication><Login /></Authentication>}></Route>
        <Route path="/auth/login" element={<Authentication><Login /></Authentication>}></Route>
        <Route path="/auth/register" element={<Authentication><Register /></Authentication>}></Route>
        <Route path="/auth/forgotPassword" element={<Authentication><ForgotPassword /></Authentication>}></Route>
        <Route path="/auth/resetPassword" element={<Authentication><ResetPassword /></Authentication>}></Route>
      </Routes>
    </div>
  )
}

export default App
