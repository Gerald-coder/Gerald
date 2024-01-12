import "./app.scss";
// import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/hero/Hero";
import Navr from "./components/Navbar/fNav";

function App() {
  return (
    <div>
      <div style={{ marginTop: "8rem" }}>
        <Navr />
      </div>
      <section id="Navbar" className="hero__bg">
        <Hero />
      </section>
      {/* <section>parralax</section>
      <section>services</section>
      <section>talk to me</section>
      <section>portfolio</section>
      <section id="Contact">contact</section>
      <section>footer</section> */}
    </div>
  );
}

export default App;
