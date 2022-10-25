import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./Component/Landing";
import PaginationContainer from "./Component/PaginationContainer";
import Navbar from "./Component/Navbar";
import About from "./Component/About";
import Register from "./Component/Register";
import Footer from "./Component/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/About" element={<About />} />
        <Route path="/User" element={<PaginationContainer />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
