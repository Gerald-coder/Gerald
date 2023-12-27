import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../Sidebar/Sidebar";

function Navbar() {
  const variants = {
    visible: (i) => ({
      opacity: 1,
      y: 5,
      transition: { delay: i * 0.1 },
    }),
  };
  const lists = ["About", "Skills", "experience", "Project"];

  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          className="logo"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Ger <span style={{ color: "grey" }}>ald</span>
        </motion.span>
        <motion.div className="links" initial="hidden" animate="visible">
          {lists.map((item, i) => {
            return (
              <motion.a
                variants={variants}
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                href=""
                whileHover={{ scale: 1.2, color: "#854ce6" }}
                custom={i}
              >
                {item}
              </motion.a>
            );
          })}
        </motion.div>
        <button>github profile</button>
      </div>
    </div>
  );
}

export default Navbar;
