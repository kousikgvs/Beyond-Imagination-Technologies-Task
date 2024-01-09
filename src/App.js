import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login/Login';
import Dashboard from "./Dashboard/Dashboard"
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
