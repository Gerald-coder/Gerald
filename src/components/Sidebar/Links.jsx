import { motion } from "framer-motion";

function Links() {
  const links = ["Homepage", "Services", "Portfolio", "Contact"];
  const variants = {
    open: { transition: { staggerChildren: 0.1 } },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
      duration: 0.5,
    },
  };
  const itemVariants = {
    open: { y: 0, opacity: 1 },
    closed: { y: 50, opacity: 0 },
  };
  return (
    <motion.div className="link" variants={variants}>
      {links.map((link) => {
        return (
          <motion.a
            href={`#${link}`}
            key={link}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {link}
          </motion.a>
        );
      })}
    </motion.div>
  );
}

export default Links;
