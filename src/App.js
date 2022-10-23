import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./Component/Landing";
import User from "./Component/User";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/User" element={<User />} />
      </Routes>
    </div>
  );
}
export default App;
