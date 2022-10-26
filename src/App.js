import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./Component/Landing";
import PaginationContainer from "./Component/PaginationContainer";
import Navbar from "./Component/Navbar";
import About from "./Component/About";
import Register from "./Component/Register";
import Footer from "./Component/Footer";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Landing count={count} setCount={setCount} />}
        />
        <Route path="/about" element={<About />}>
          <Route path="user" element={<PaginationContainer />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
