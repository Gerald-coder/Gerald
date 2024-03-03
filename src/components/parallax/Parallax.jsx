import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

/* eslint-disable */

function Parallax({ type }) {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <div className="parallax" ref={ref}>
      <motion.h1 style={{ y: yText }}>
        {type === "services" ? "What I do ?" : "What I did ?"}
      </motion.h1>
      {/* <div className="mountains"></div> */}
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "services" ? "images/planets.png" : "images/sun.png"
          })`,
        }}
      ></motion.div>
      <motion.div className="stars" style={{ x: yBg }}>
        {" "}
      </motion.div>
    </div>
  );
}

export default Parallax;
