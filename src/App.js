import React from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Form from "./pages/Form/Form";
import Table from "./pages/Table/Table";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/> } />
        <Route path='/form' element={<Form/> } />
        <Route path='/table' element={<Table/> } />
      </Routes>
      </Router>

  
      
    
  );
}

export default App;
