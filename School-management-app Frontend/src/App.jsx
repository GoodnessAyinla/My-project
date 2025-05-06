// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Portal from './pages/Portal'
import Signin from './pages/Signin'
import Signup from "./pages/Signup"






function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Portal />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </>
  );
}

export default App
