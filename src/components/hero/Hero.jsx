import "./hero.scss";
import { motion } from "framer-motion";

const textVariant = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};
const sliderVariant = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
      // staggerChildren: 0.5,
    },
  },
};

function Hero() {
  return (
    <div className="section__padding section__margin hero">
      <div className="wrapper">
        <motion.div
          className="left"
          variants={textVariant}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={textVariant}>
            Hi, I am <br /> Gerald Oduigwe
          </motion.div>

          <motion.div variants={textVariant}>
            <motion.span variants={textVariant}>
              a Software Engineer
            </motion.span>
          </motion.div>
          <motion.p variants={textVariant}>
            I am a motivated and versatile individual, always eager to take on
            new challenges. With a passion for learning I am dedicated to
            delivering high-quality results. With a positive attitude and a
            growth mindset, I am ready to make a meaningful contribution and
            achieve great things.
          </motion.p>
          <motion.div className="buttons" variants={textVariant}>
            <motion.button className="btn">See Resume</motion.button>
            <motion.button variants={textVariant}>Contact me</motion.button>
          </motion.div>
        </motion.div>
        <motion.div
          className="textSliderContainer"
          variants={sliderVariant}
          initial="initial"
          animate="animate"
        >
          Professioner Software Engineer
        </motion.div>
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
