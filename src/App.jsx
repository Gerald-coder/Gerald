import "./app.scss";
// import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/hero/Hero";
import Navr from "./components/Navbar/fNav";
import Parallax from "./components/parallax/Parallax";
import { motion } from "framer-motion";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  return (
    <div>
      <div style={{ marginTop: "8rem" }}>
        <Navr />
      </div>
      <section id="Navbar" className="hero__bg">
        <Hero />
      </section>
      <motion.section className="parallax1__bg mountains">
        <Parallax type="services" />
      </motion.section>
      <section className="service_bg">
        <Services />
      </section>
      <motion.section className="parallax2__bg mountains">
        <Parallax type="portfolio" />
      </motion.section>
      <Portfolio />
      <section id="Contact">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora nobis,
        odit officiis neque consequatur harum culpa cum aperiam! Autem, possimus
        nulla? Illo fugiat iure a sed, rerum id qui molestiae. Lorem ipsum dolor
        sit, amet consectetur adipisicing elit. Tempora nobis, odit officiis
        neque consequatur harum culpa cum aperiam! Autem, possimus nulla? Illo
        fugiat iure a sed, rerum id qui molestiae. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Tempora nobis, odit officiis neque
        consequatur harum culpa cum aperiam! Autem, possimus nulla? Illo fugiat
        iure a sed, rerum id qui molestiae. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Tempora nobis, odit officiis neque
        consequatur harum culpa cum aperiam! Autem, possimus nulla? Illo fugiat
        iure a sed, rerum id qui molestiae. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Tempora nobis, odit officiis neque
        consequatur harum culpa cum aperiam! Autem, possimus nulla? Illo fugiat
        iure a sed, rerum id qui molestiae. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Tempora nobis, odit officiis neque
        consequatur harum culpa cum aperiam! Autem, possimus nulla? Illo fugiat
        iure a sed, rerum id qui molestiae. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Tempora nobis, odit officiis neque
        consequatur harum culpa cum aperiam! Autem, possimus nulla? Illo fugiat
        iure a sed, rerum id qui molestiae. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Tempora nobis, odit officiis neque
        consequatur harum culpa cum aperiam! Autem, possimus nulla? Illo fugiat
        iure a sed, rerum id qui molestiae. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Tempora nobis, odit officiis neque
        consequatur harum culpa cum aperiam! Autem, possimus nulla? Illo fugiat
        iure a sed, rerum id qui molestiae. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Tempora nobis, odit officiis neque
        consequatur harum culpa cum aperiam! Autem, possimus nulla? Illo fugiat
        iure a sed, rerum id qui molestiae. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Tempora nobis, odit officiis neque
        consequatur harum culpa cum aperiam! Autem, possimus nulla? Illo fugiat
        iure a sed, rerum id qui molestiae. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Tempora nobis, odit officiis neque
        consequatur harum culpa cum aperiam! Autem, possimus nulla? Illo fugiat
        iure a sed, rerum id qui molestiae. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Tempora nobis, odit officiis neque
        consequatur harum culpa cum aperiam! Autem, possimus nulla? Illo fugiat
        iure a sed, rerum id qui molestiae. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Tempora nobis, odit officiis neque
        consequatur harum culpa cum aperiam! Autem, possimus nulla? Illo fugiat
        iure a sed, rerum id qui molestiae. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Tempora nobis, odit officiis neque
        consequatur harum culpa cum aperiam! Autem, possimus nulla? Illo fugiat
        iure a sed, rerum id qui molestiae. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Tempora nobis, odit officiis neque
        consequatur harum culpa cum aperiam! Autem, possimus nulla? Illo fugiat
        iure a sed, rerum id qui molestiae. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Tempora nobis, odit officiis neque
        consequatur harum culpa cum aperiam! Autem, possimus nulla? Illo fugiat
        iure a sed, rerum id qui molestiae. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Tempora nobis, odit officiis neque
        consequatur harum culpa cum aperiam! Autem, possimus nulla? Illo fugiat
        iure a sed, rerum id qui molestiae. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Tempora nobis, odit officiis neque
        consequatur harum culpa cum aperiam! Autem, possimus nulla? Illo fugiat
        iure a sed, rerum id qui molestiae. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Tempora nobis, odit officiis neque
        consequatur harum culpa cum aperiam! Autem, possimus nulla? Illo fugiat
        iure a sed, rerum id qui molestiae. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Tempora nobis, odit officiis neque
        consequatur harum culpa cum aperiam! Autem, possimus nulla? Illo fugiat
        iure a sed, rerum id qui molestiae. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Tempora nobis, odit officiis neque
        consequatur harum culpa cum aperiam! Autem, possimus nulla? Illo fugiat
        iure a sed, rerum id qui molestiae. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Tempora nobis, odit officiis neque
        consequatur harum culpa cum aperiam! Autem, possimus nulla? Illo fugiat
        iure a sed, rerum id qui molestiae. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Tempora nobis, odit officiis neque
        consequatur harum culpa cum aperiam! Autem, possimus nulla? Illo fugiat
        iure a sed, rerum id qui molestiae. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Tempora nobis, odit officiis neque
        consequatur harum culpa cum aperiam! Autem, possimus nulla? Illo fugiat
        iure a sed, rerum id qui molestiae. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Tempora nobis, odit officiis neque
        consequatur harum culpa cum aperiam! Autem, possimus nulla? Illo fugiat
        iure a sed, rerum id qui molestiae. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Tempora nobis, odit officiis neque
        consequatur harum culpa cum aperiam! Autem, possimus nulla? Illo fugiat
        iure a sed, rerum id qui molestiae. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Tempora nobis, odit officiis neque
        consequatur harum culpa cum aperiam! Autem, possimus nulla? Illo fugiat
        iure a sed, rerum id qui molestiae. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Tempora nobis, odit officiis neque
        consequatur harum culpa cum aperiam! Autem, possimus nulla? Illo fugiat
        iure a sed, rerum id qui molestiae. iure a sed, rerum id qui molestiae.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora nobis,
        odit officiis neque consequatur harum culpa cum aperiam! Autem, possimus
        nulla? Illo fugiat iure a sed, rerum id qui molestiae. iure a sed, rerum
        id qui molestiae. Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Tempora nobis, odit officiis neque consequatur harum culpa cum
        aperiam! Autem, possimus nulla? Illo fugiat iure a sed, rerum id qui
        molestiae. iure a sed, rerum id qui molestiae. Lorem ipsum dolor sit,
        amet consectetur adipisicing elit. Tempora nobis, odit officiis neque
        consequatur harum culpa cum aperiam! Autem, possimus nulla? Illo fugiat
        iure a sed, rerum id qui molestiae. iure a sed, rerum id qui molestiae.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora nobis,
        odit officiis neque consequatur harum culpa cum aperiam! Autem, possimus
        nulla? Illo fugiat iure a sed, rerum id qui molestiae. iure a sed, rerum
        id qui molestiae. Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Tempora nobis, odit officiis neque consequatur harum culpa cum
        aperiam! Autem, possimus nulla? Illo fugiat iure a sed, rerum id qui
        molestiae. iure a sed, rerum id qui molestiae. Lorem ipsum dolor sit,
        amet consectetur adipisicing elit. Tempora nobis, odit officiis neque
        consequatur harum culpa cum aperiam! Autem, possimus nulla? Illo fugiat
        iure a sed, rerum id qui molestiae. iure a sed, rerum id qui molestiae.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora nobis,
        odit officiis neque consequatur harum culpa cum aperiam! Autem, possimus
        nulla? Illo fugiat iure a sed, rerum id qui molestiae. iure a sed, rerum
        id qui molestiae. Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Tempora nobis, odit officiis neque consequatur harum culpa cum
        aperiam! Autem, possimus nulla? Illo fugiat iure a sed, rerum id qui
        molestiae. iure a sed, rerum id qui molestiae. Lorem ipsum dolor sit,
        amet consectetur adipisicing elit. Tempora nobis, odit officiis neque
        consequatur harum culpa cum aperiam! Autem, possimus nulla? Illo fugiat
        iure a sed, rerum id qui molestiae. iure a sed, rerum id qui molestiae.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora nobis,
        odit officiis neque consequatur harum culpa cum aperiam! Autem, possimus
        nulla? Illo fugiat iure a sed, rerum id qui molestiae. iure a sed, rerum
        id qui molestiae. Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Tempora nobis, odit officiis neque consequatur harum culpa cum
        aperiam! Autem, possimus nulla? Illo fugiat iure a sed, rerum id qui
        molestiae. iure a sed, rerum id qui molestiae. Lorem ipsum dolor sit,
        amet consectetur adipisicing elit. Tempora nobis, odit officiis neque
        consequatur harum culpa cum aperiam! Autem, possimus nulla? Illo fugiat
        iure a sed, rerum id qui molestiae. iure a sed, rerum id qui molestiae.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora nobis,
        odit officiis neque consequatur harum culpa cum aperiam! Autem, possimus
        nulla? Illo fugiat iure a sed, rerum id qui molestiae. iure a sed, rerum
        id qui molestiae. Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Tempora nobis, odit officiis neque consequatur harum culpa cum
        aperiam! Autem, possimus nulla? Illo fugiat iure a sed, rerum id qui
        molestiae.
      </section>
      <section>footer</section>
    </div>
  );
}

export default App;
