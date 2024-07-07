import React from 'react'
import {Routes, Route} from "react-router-dom";
import Home from './Home';
import Login from  "./login"

function App() {

  return (
    <>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/login" element={<Login />} ></Route>
      </Routes>
      
    </>
  )
}

export default App
