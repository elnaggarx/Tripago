import React from "react";
import Home from "./routes/Home.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./routes/About.js";
import Service from "./routes/Service.js";
import Contact from "./routes/Contact.js";
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/service" element={<Service></Service>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
