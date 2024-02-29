import "./contact.scss";

function Contact() {
  return (
    <div className="contact section__margin section__padding">
      <div className="textContainer">
        <h1 className="title"> let&apos;s work together</h1>
        <div className="item">
          <h2>mail</h2>
          <span>paulsongerald00@gmail.com</span>
        </div>
        <div className="item">
          <h2>phone</h2>
          <span>+234 704 444 16</span>
          <span>+234 810 397 80</span>
        </div>
      </div>
      <div className="formContaie">
        <form action="">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea rows={8} placeholder="message"></textarea>
        </form>
      </div>
    </div>
  );
}

export default Contact;
