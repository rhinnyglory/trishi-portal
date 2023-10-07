import React from "react"
import "./App.css"
import { Login, Register } from "../component"
import { Routes, Route, useLocation } from "react-router-dom"
import ResetPassword from "../component/ResetPassword/ResetPassword"
import ForgotPassword from "../component/ForgotPassword/ForgotPassword"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/resetpassword" element={<ResetPassword />}></Route>
        <Route path="/forgotPassword" element={<ForgotPassword />}></Route>
      </Routes>
    </div>
  )
}

export default App
