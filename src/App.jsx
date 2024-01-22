import "./app.scss";
// import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/hero/Hero";
import Navr from "./components/Navbar/fNav";
import Parallax from "./components/parallax/Parallax";
import { motion } from "framer-motion";

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
      <section>services</section>
      <motion.section className="parallax2__bg mountains">
        <Parallax type="portfolio" />
      </motion.section>
      <section>talk to me</section>
      <section>portfolio</section>
      <section id="Contact">contact</section>
      <section>footer</section>
    </div>
  );
}

export default App;
