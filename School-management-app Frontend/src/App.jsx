// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Portal from './pages/Portal'
import Signin from './pages/Signin'
Signin




function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Portal />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </>
  );
}

export default App
