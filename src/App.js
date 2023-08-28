
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Productpage from "./page/Productpage/Productpage";
import Home from "./page/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/products/:id" element={<Productpage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
