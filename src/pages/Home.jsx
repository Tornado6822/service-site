import "./Home.css";
import Header from "../Header.jsx";

export default function Home() {
  return (
    <>
      <header className="d-flex justify-content-between align-items-center p-3">
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

        <div>
          <button className="btn btn-primary">Book Now</button>
        </div>
      </header>
      <Header />
    </>
  );
}
