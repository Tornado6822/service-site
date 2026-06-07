import "./Services.css";

function Services() {
  return (
    <section id="services" className="d-flex justify-content-center py-5 mt-5">
      <div className="container">
        <h1 className="text-center mb-5 fw-bold">
          Comprehensive Ottawa Physiotherapist Solutions
        </h1>
        <div className="row align-items-center my-3">
          <div className="col-6 col-md-4">
            <div className="card">
              <div className="img-wrapper">
                <img src="./card1.webp" alt="Sports injury" />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center mb-4">
                  Sports Injury Rehab
                </h5>
                <p className="card-description">
                  Recover safely and efficiently from sports-related injuries.
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4">
            <div className="card">
              <div className="img-wrapper">
                <img src="./card2.webp" alt="Sports injury" />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center mb-4">Manual Therapy</h5>
                <p className="card-description">
                  Restore movement and reduce discomfort with hands-on
                  therapeutic techniques.
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4">
            <div className="card">
              <div className="img-wrapper">
                <img src="./card3.webp" alt="Sports injury" />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center mb-4">Senior Mobility</h5>
                <p className="card-description">
                  Enhance balance, strength, and confidence to support safe and
                  independent living.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row align-items-center my-3">
          <div className="col-6 col-md-4">
            <div className="card">
              <div className="img-wrapper">
                <img src="./card4.webp" alt="Sports injury" />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center mb-4">Acupuncture</h5>
                <p className="card-description">
                  Relieve pain and promote healing through targeted acupuncture
                  treatments.
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4">
            <div className="card">
              <div className="img-wrapper">
                <img src="./card5.webp" alt="Sports injury" />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center mb-4">
                  Chronic Pain Management
                </h5>
                <p className="card-description">
                  Reduce persistent pain and improve your quality of life
                  through personalized treatment.
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4">
            <div className="card">
              <div className="img-wrapper">
                <img src="./card6.webp" alt="Sports injury" />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center mb-4">
                  Posture and Movement Assessment
                </h5>
                <p className="card-description">
                  Improve mobility and prevent injuries by identifying movement
                  and posture imbalances.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
