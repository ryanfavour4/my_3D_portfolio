import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Document from "../pages/Document";
import Contact from "../pages/Contact";
import Works from "../pages/Works";
import Navbar from "../layout/Navbar";

function Router() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/document" element={<Document />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/works" element={<Works />} />
      </Routes>
    </div>
  );
}

export default Router;
