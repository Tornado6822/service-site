export default function Contact() {
  return (
    <section className="bio-page py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Image */}
          <div className="col-12 col-md-4 text-center mb-4 mb-md-0">
            <div className="bio-image">
              <img src="./companyLogo" alt="test" />
            </div>
          </div>

          {/* Text */}
          <div className="col-12 col-md-8">
            <h1 className="fw-bold">{name}</h1>
            <h4 className="text-muted mb-3">test</h4>

            <p className="bio-text">test</p>
          </div>
        </div>
      </div>
    </section>
  );
}
