import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Form from "./pages/Form/Form";
import Table from "./pages/Table/Table";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>

      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='' element={<Form />} />
        <Route path='' element={<Table />} />
      </Routes>
      </div>
  
      
    
  );
}

export default App;
