import "./app.scss";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/hero/Hero";
import Navr from "./components/Navbar/fNav";

function App() {
  return (
    <div>
      <section id="Navbar">
        <Navr />
        <Hero />
      </section>
      <section>parralax</section>
      <section>services</section>
      <section>parralax</section>
      <section>portfolio</section>
      <section>portfolio</section>
      <section>portfolio</section>
      <section id="Contact">contact</section>
      <section>footer</section>
    </div>
  );
}

export default App;
