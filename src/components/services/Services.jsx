import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

/* eslint-disable */
function List({ title, body, btnTxt }) {
  return (
    <motion.div
      variants={variants}
      className="box"
      whileHover={{
        backgroundColor: "gray",
        color: "black",
        fontWeight: "900",
        borderRadius: "10px",
      }}
    >
      <h1>{title}</h1>
      <p>{body}</p>
      <button>{btnTxt}</button>
    </motion.div>
  );
}

function Services() {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="section__padding section__margin services"
      variants={variants}
      initial="initial"
      whileInView="animate"
      //   ref={ref}
      //   animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I build outstanding user interfaces, <br />
          that capture users attention
        </p>
        <hr className="gradient__text" />
      </motion.div>
      <motion.div className="titleContainer">
        <div className="title">
          <img src="images/code.jpeg" alt="" />
          <h1>
            I bring your{" "}
            <motion.b whileHover={{ color: "orange" }}>unique</motion.b>{" "}
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>ideals</motion.b> to
            visual life
          </h1>
          <button>What I Do ?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer">
        <List
          body={
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, vel ratione illum perspiciatis, quas a magni id dolorem libero, sit reprehenderit ad mollitia eligendi suscipit omnis exercitationem molestiae asperiores aut?"
          }
          btnTxt={"What i do"}
          title={"lets help you"}
        />
        <List
          body={
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, vel ratione illum perspiciatis, quas a magni id dolorem libero, sit reprehenderit ad mollitia eligendi suscipit omnis exercitationem molestiae asperiores aut?"
          }
          btnTxt={"What i do"}
          title={"lets help you"}
        />
        <List
          body={
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, vel ratione illum perspiciatis, quas a magni id dolorem libero, sit reprehenderit ad mollitia eligendi suscipit omnis exercitationem molestiae asperiores aut?"
          }
          btnTxt={"What i do"}
          title={"lets help you"}
        />
      </motion.div>
      {/* <hr /> */}
    </motion.div>
  );
}

export default Services;
