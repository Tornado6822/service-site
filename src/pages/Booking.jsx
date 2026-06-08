import "./Booking.css";
import Header from "../Header.jsx";
import { useState } from "react";

function Booking() {
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmed(true);
  };

  if (confirmed) {
    return (
      <>
        <Header />
        <section className="appointment-section py-5">
          <div className="container text-center">
            <h1 className="mb-3">Appointment Request Received</h1>

            <p>Thank you for choosing Thrive Physiotherapy.</p>

            <p>You will receive an email with the details shortly.</p>

            <button
              className="btn btn-primary mt-3"
              onClick={() => setConfirmed(false)}
            >
              Submit Another Request
            </button>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Header />
      <section className="appointment-section py-5">
        <div className="container appointment-container">
          <h1 className="fw-bold mb-5">Request An Appointment</h1>

          <form className="appointment-form" onSubmit={handleSubmit}>
            {/* Location */}
            <div className="mb-4">
              <label className="form-label">Select a Location</label>
              <select className="form-select">
                <option>Select</option>
                <option>Orleans</option>
                <option>Barrhaven</option>
                <option>Carling</option>
              </select>
            </div>

            {/* Date */}
            <div className="mb-4">
              <label className="form-label">Select Date</label>
              <input type="date" className="form-control" />
            </div>

            {/* Time */}
            <div className="mb-4">
              <label className="form-label">Select Time</label>
              <input type="time" className="form-control" />
            </div>

            {/* Name */}
            <div className="row mb-4">
              <div className="col-md-6 mb-3 mb-md-0">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                />
              </div>
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </div>

            {/* Phone */}
            <div className="mb-5">
              <label className="form-label">Phone</label>
              <input type="tel" className="form-control" placeholder="Phone" />
            </div>

            {/* Button */}
            <button type="submit" className="btn btn-success w-100 py-2">
              Confirm
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Booking;
