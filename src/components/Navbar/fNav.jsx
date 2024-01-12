import { useState } from "react";
// import "./navbar.css";
import "./fnav.scss";
import { motion } from "framer-motion";

function Navbar() {
  const [isMobile, setMobile] = useState(false);

  const handleToggle = () => {
    setMobile(!isMobile);
  };

  return (
    <div className="myNav">
      <div className={`navbar ${isMobile ? "mobile" : ""}`}>
        <div className="logo">
          <motion.span
            className="logo"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Ger<span style={{ color: "grey" }}>ald</span>{" "}
          </motion.span>
        </div>
        <div className="menu-icon" onClick={handleToggle}>
          ☰
        </div>

        <div className={`nav-links ${isMobile ? "open" : ""}`}>
          <ul className="links">
            <li>About</li>
            <li>Skills</li>
            <li>Experience</li>
            <li>Projects</li>
          </ul>
          <button className="btn">view Github</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
