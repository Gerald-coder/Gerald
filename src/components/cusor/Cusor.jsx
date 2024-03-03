import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./cusor.scss";

function Cusor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  console.log(position);
  return (
    <motion.div
      className="cusor"
      animate={{ x: position.x - 50, y: position.y - 50 }}
    ></motion.div>
  );
}

export default Cusor;
