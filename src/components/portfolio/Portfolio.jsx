import { useRef } from "react";
import "./portfolio.scss";
import { useSpring, useScroll, motion, useTransform } from "framer-motion";
/* eslint-disable */

const items = [
  {
    id: 1,
    title: "React Ecommerce",
    image:
      "https://images.pexels.com/photos/20333415/pexels-photo-20333415/free-photo-of-deckchairs-and-umbrellas-on-beach.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde nihil laborum a sapiente inventore, provident dolorem ipsa delectus nam voluptatibus dolorum doloribus? Eaque sequi, laboriosam inventore aut beatae eveniet odit!",
  },
  {
    id: 2,
    title: "Vanilla Ecommerce",
    image:
      "https://images.pexels.com/photos/20333415/pexels-photo-20333415/free-photo-of-deckchairs-and-umbrellas-on-beach.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde nihil laborum a sapiente inventore, provident dolorem ipsa delectus nam voluptatibus dolorum doloribus? Eaque sequi, laboriosam inventore aut beatae eveniet odit!",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section className="section__padding" ref={ref}>
      <div className="container">
        <div className="imageContainer">
          <img src={item.image} alt={item.title.split[0]} />
        </div>
        <div className="textContainer" >
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
          <button>show demo</button>
        </div>
      </div>
    </section>
  );
};

function Portfolio() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio section__margin" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div
          style={{ scaleX: scaleX }}
          className="progressBar"
        ></motion.div>
      </div>
      {items.map((item) => {
        return <Single item={item} key={item.id} />;
      })}
    </div>
  );
}

export default Portfolio;
