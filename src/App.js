// import About from "./Component/About/About";
import NavbarG from "./Component/pages/Navbar";
import "../src/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
const About = lazy(() => import("./Component/About/About"));
const Headerthis = lazy(() => import("./Component/Headerfirst/Headerthis"));
const Contact = lazy(() => import("./Component/Contact/Contact"));
const Project = lazy(() => import("./Component/Project/project"));

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarG />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/Headerthis" element={<Headerthis />} />
            <Route path="/Contactus" element={<Contact />} />
            <Route path="/project" element={<Project />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
