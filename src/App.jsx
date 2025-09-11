import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Registrasi from "./pages/Registrasi";
import Talenthub from "./pages/Talenthub/Talenthub";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registrasi" element={<Registrasi />} />
        <Route path="/talenthub" element={<Talenthub />} />
      </Routes>
    </Router>
  );
}

export default App
