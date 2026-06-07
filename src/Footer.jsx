import "./Footer.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  return (
    <section id="footer" className="footer mt-5 py-3">
      <div className="container pt-5">
        <div className="row">
          <div className="col-12 col-md-4 mb-4">
            <h4>About Us</h4>
            <p>
              At Momentum Physiotherapy, we are dedicated to helping our
              patients move better, recover faster, and live healthier lives.
              Our experienced team provides personalized, evidence-based care in
              a welcoming environment, supporting individuals of all ages
              through injury recovery, pain management, and mobility
              improvement.
            </p>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <h4>Locations</h4>
            <p>BARRHAVEN 10-3091 Strandherd Drive Barrhaven, ON K2G 4R9</p>
            <p>
              ORLEANS & SURGICENTRE EAST 750 Taylor Creek Drive Orleans, ON K4A
              0Z9
            </p>
            <p>
              CARLING & SURGICENTRE WEST 100‐2255 Carling Avenue Ottawa, ON K2B
              7Z5
            </p>
          </div>

          <div className="col-12 col-md-4">
            <h4>Contact Info</h4>
            <p>
              <FaPhone className="me-2" />
              (613) 555-1234
            </p>
            <p>
              <FaEnvelope className="me-2" />
              info@thrivephysio.com
            </p>
            <p>
              <FaMapMarkerAlt className="me-2" />
              123 Main Street, Ottawa
            </p>
          </div>
        </div>
        <hr />

        <div className="text-center pt-3">
          © 2026 Thrive Physio & Rehab. All rights reserved.
        </div>
      </div>
      <div className="my-2 text-center">
        <small>Designed by Patrick Morel</small>
      </div>
    </section>
  );
}

export default Footer;
