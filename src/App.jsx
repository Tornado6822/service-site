import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import NavBar from "./Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/*}<NavBar />{*/}
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
