import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="sticky-top custom-nav d-flex align-items-center">
      <div className="container">
        <nav className="navbar d-flex justify-content-evenly">
          <Link className="nav-link fw-semibold" to="/">
            Home
          </Link>
          <a href="#services" className="nav-link fw-semibold">
            Services
          </a>
          <a href="#team" className="nav-link fw-semibold">
            Our Team
          </a>
          <a href="#footer" className="nav-link fw-semibold">
            About Us
          </a>
          <a href="#footer" className="nav-link fw-semibold">
            Contact Us
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Header;
