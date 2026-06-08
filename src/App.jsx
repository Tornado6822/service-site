import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Booking from "./pages/Booking";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Booking" element={<Booking />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
