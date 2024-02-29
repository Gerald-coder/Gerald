import "./contact.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Contact() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <div className="contact section__margin section__padding">
      <div
        className="textContainer"
        // data-aos="zoom-in"
        // data-aos="fade-right"
        // data-aos="fade-left"
        data-aos="fade-up"
      >
        <h1 className="title" data-aos="fade-up">
          let&apos;s work together
        </h1>
        <div className="item" data-aos="fade-up">
          <h2>mail</h2>
          <span>paulsongerald00@gmail.com</span>
        </div>
        <div className="item" data-aos="fade-up">
          <h2>phone</h2>
          <span>+234 704 444 16</span>
          <br />
          <span>+234 810 397 80</span>
        </div>
      </div>
      <div className="formContainer" data-aos="fade-up">
        <form action="">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea rows={8} cols={80} placeholder="message"></textarea>
          <button data-aos="fade-left">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
