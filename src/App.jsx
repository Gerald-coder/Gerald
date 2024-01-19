import "./app.scss";
// import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/hero/Hero";
import Navr from "./components/Navbar/fNav";
import Parallax from "./components/parallax/Parallax";

function App() {
  return (
    <div>
      <div style={{ marginTop: "8rem" }}>
        <Navr />
      </div>
      <section id="Navbar" className="hero__bg">
        <Hero />
      </section>
      <section className="parallax1__bg">
        <Parallax type="services" />
      </section>
      <section>services</section>
      <section className="parallax2__bg">
        <Parallax type="portfolio" />
      </section>
      <section>talk to me</section>
      <section>portfolio</section>
      <section id="Contact">contact</section>
      <section>footer</section>
    </div>
  );
}

export default App;
