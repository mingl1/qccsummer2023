import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./components/Form";
// import About from "./components/About";
// import Contact from "./components/Contact";
import Place from "./components/Place";
import Navbar from "./components/Navbar";
import React from "react";
const App = function() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Place name="Home" />}></Route>
            <Route path="/About" element={<Place name="About us" />}></Route>
            <Route path="/Contact" element={<Place name="Contact" />}></Route>
            <Route path="/Form" element={<Form />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
