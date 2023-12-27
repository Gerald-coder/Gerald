import "./navbar.scss";
import { motion } from "framer-motion";
import { links } from "../../data/constants";
import Sidebar from "../Sidebar/Sidebar";

function Navbar() {
  const variants = {
    visible: (i) => ({
      opacity: 1,
      y: 5,
      transition: { delay: i * 0.1 },
    }),
  };
  return (
    <div className="navbar">
      {/* {sidebar} */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          className="logo"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Ger<span style={{ color: "grey" }}>ald</span>{" "}
        </motion.span>
        <div className="links">
          {links.map((link, i) => {
            return (
              <motion.a
                key={link.id}
                href={link.url}
                rel="noreferrer"
                target="_blank"
                variants={variants}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.2 }}
                custom={i}
              >
                <img
                  src={link.img}
                  width="35px"
                  height="35px"
                  alt={link.social}
                />
              </motion.a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
