import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./Component/Landing";
import PaginationContainer from "./Component/PaginationContainer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/User" element={<PaginationContainer />} />
      </Routes>
    </div>
  );
}
export default App;
