import EmployeeDetails from "./components/form.js";
import TAble from "./components/table.js";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="main">
      <center>
        <h2 className="main-header">EMPLOYEE DETAILS</h2>
      </center>
      <div>
        <Routes>
          <Route path="/" element={<EmployeeDetails />} />
          <Route path="table" element={<TAble />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
