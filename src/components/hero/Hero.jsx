import "./hero.scss";

function Hero() {
  return (
    <div className="section__padding section__margin hero">
      <div className="wrapper">
        <div className="left">
          <div>
            Hi, I am <br /> Gerald Oduigwe
          </div>

          <div>
            <span>a Software Engineer</span>
          </div>
          <p>
            I am a motivated and versatile individual, always eager to take on
            new challenges. With a passion for learning I am dedicated to
            delivering high-quality results. With a positive attitude and a
            growth mindset, I am ready to make a meaningful contribution and
            achieve great things.
          </p>
          <div className="buttons">
            <button className="btn">See Resume</button>
            <button>Contact me</button>
          </div>
        </div>
        <div className="right">
          <img
            src="/images/gerry2.png"
            alt="hero"
            height="400px"
            width="500px"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
