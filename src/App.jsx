import "./app.scss";
// import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/hero/Hero";
import Navr from "./components/Navbar/fNav";
import Parallax from "./components/parallax/Parallax";
import { motion } from "framer-motion";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";

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
      {/* <Portfolio /> */}
      {/* <section id="Contact">
        <Contact />
      </section> */}
      <section>footer</section>
    </div>
  );
}

export default App;
