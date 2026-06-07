import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="container h-100">
          <div className="row h-100 align-items-start pt-5">
            <div className="col-12 col-md-5"></div>

            <div className="col-12 col-md-7 hero-content">
              <h1>Move Better. Feel Stronger.</h1>
              <p className="my-4">
                Personalized physiotherapy and rehabilitation services to help
                you recover from injury, reduce pain, and return to the
                activities you enjoy.
              </p>
              <button className="btn btn-primary">Book Appointment</button>
              <a href="#services">
                <button className="btn btn-primary mx-5">Find Out More</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
