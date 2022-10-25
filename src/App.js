import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./Component/Landing";
import PaginationContainer from "./Component/PaginationContainer";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/User" element={<PaginationContainer />} />
      </Routes>
    </div>
  );
}
export default App;
