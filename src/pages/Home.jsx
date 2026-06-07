import "./Home.css";
import Header from "../Header.jsx";
import Hero from "../Hero.jsx";
import Services from "../Services.jsx";
import Team from "../Team.jsx";
import Footer from "../Footer.jsx";

import { FaFacebookSquare, FaInstagramSquare, FaYoutube } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <header
        id="home"
        className="d-flex justify-content-between align-items-center p-3"
      >
        <div className="d-flex align-items-center gap-2">
          <img
            src="./companyIcon.png"
            alt="Thrive Icon"
            className="rounded-circle"
            style={{ width: "100px", height: "auto" }}
          />

          <div className="d-flex flex-column">
            <h1 className="m-0 title fw-bold">THRIVE</h1>
            <h2 className="m-0 subTitle fw-semibold">PHYSIO & REHAB</h2>
          </div>
        </div>

        <div className="d-flex align-items-center gap-5">
          <button className="btn btn-primary">Book Now</button>
          <div className="d-flex align-items-center gap-3">
            <FaFacebookSquare className="icon" />
            <FaInstagramSquare className="icon" />
            <FaYoutube className="icon" />
          </div>
        </div>
      </header>
      <Header />
      <Hero />
      <Services />
      <Team />
      <Footer />
    </>
  );
}
