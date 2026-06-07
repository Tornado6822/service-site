import "./Team.css";

function Team() {
  return (
    <section id="team" className="d-flex justify-content-center py-5">
      <div className="container">
        <h1 className="fw-bold my-5 text-center">Meet Our Team</h1>
        <hr className="mb-5" />
        <div className="row">
          <div className="col-6 col-md-4 d-flex justify-content-center">
            <div className="card d-flex align-items-center">
              <div className="bio-img-wrapper">
                <img src="./bio1.webp" alt="Sarah Mitchell" />
              </div>
              <div className="card-body"></div>
              <h5 className="card-title">Sarah Mitchell</h5>
              <hr />
              <p className="card-description">Lead Physiotherapist</p>
              <button className="btn btn-primary btn-bio">Learn More</button>
            </div>
          </div>
          <div className="col-6 col-md-4 d-flex justify-content-center">
            <div className="card d-flex align-items-center">
              <div className="bio-img-wrapper">
                <img src="./bio2.webp" alt="David Chen" />
              </div>
              <div className="card-body"></div>
              <h5 className="card-title">David Chen</h5>
              <hr />
              <p className="card-description">Sports Physiotherapist</p>
              <button className="btn btn-primary btn-bio">Learn More</button>
            </div>
          </div>
          <div className="col-6 col-md-4 d-flex justify-content-center">
            <div className="card d-flex align-items-center">
              <div className="bio-img-wrapper">
                <img src="./bio3.webp" alt="Michael Foster" />
              </div>
              <div className="card-body"></div>
              <h5 className="card-title">Michael Foster</h5>
              <hr />
              <p className="card-description">Acupuncture Specialist</p>
              <button className="btn btn-primary btn-bio">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
