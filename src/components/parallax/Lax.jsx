import { useRef } from "react";
import "./lax.scss";
import { useScroll, useTransform, motion } from "framer-motion";

function Lax() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  return (
    <div className="parallax" ref={ref}>
      <motion.h1 style={{ y: textY }}>what i do</motion.h1>
      <motion.div className="imageBg" style={{ y: backgroundY }} />
      <div className="imageBg2" />
    </div>
  );
}

export default Lax;
