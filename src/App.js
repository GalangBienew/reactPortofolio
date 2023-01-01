// import About from "./Component/About/About";
import NavbarG from "./Component/pages/Navbar";
import "../src/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import ParticlesBg from "./Component/particles/particles";
// const Aboutus = lazy(() => import("./Component/About/About"));
const Aboutus = lazy(() => import("./Component/About/About.jsx"));
const Headerthis = lazy(() => import("./Component/Headerfirst/Headerthis"));
const Contact = lazy(() => import("./Component/Contact/Contact"));
const Project = lazy(() => import("./Component/Project/project"));

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarG />
        <ParticlesBg />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Aboutus />} />
            <Route path="/Headerthis" element={<Headerthis />} />
            <Route path="/Contactus" element={<Contact />} />
            <Route path="/project" element={<Project />} />
            <Route path="/" />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
