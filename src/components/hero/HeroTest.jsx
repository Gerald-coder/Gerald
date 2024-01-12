import "./hero.scss";

function Hero() {
  return (
    <div className="hero section__padding section__margin">
      {/* <div className="wrapper">
        <div className="textContainer">
          
        </div>
      </div>
      <div className="imageContainer">
        <img src="/images/gerry1.png" alt="" />
      </div> */}

      <div className="wrapper">
        <div className="textContainer left">
          <div className="title">
            <h2>Hi, I am</h2>
            <h2>
              Gerald Oduigwe <br />
            </h2>
            <h5>
              <span>a Software Engineer</span>
            </h5>
          </div>
          <p>
            I am a motivated and versatile individual, always eager to take on
            new challenges. With a passion for learning I am dedicated to
            delivering high-quality results. With a positive attitude and a
            growth mindset, I am ready to make a meaningful contribution and
            achieve great things.
          </p>
          <div className="buttons">
            <button>See Resume</button>
            <button>Contact me</button>
          </div>
          {/* <img src="/images/scroll.png" alt="" /> */}
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
