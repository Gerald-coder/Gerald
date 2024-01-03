import { useState } from "react";
// import "./navbar.css";
import "./fnav.scss";

function Navbar() {
  const [isMobile, setMobile] = useState(false);

  const handleToggle = () => {
    setMobile(!isMobile);
  };

  return (
    <div className="myNav">
      <div className={`navbar ${isMobile ? "mobile" : ""}`}>
        <div className="logo">Your Logo</div>
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
          <button>view Github</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
