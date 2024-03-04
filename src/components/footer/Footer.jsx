import "./footer.scss";

export default function Footer() {
  return (
    <div className="footer section__padding section__margin">
      <div className="horizontalLine"/>
      <ul>
        <li>about</li>
        <li>services</li>
        <li>porfolio</li>
        <li>contact</li>
      </ul>
      <div className="socials">
        <p>linkedin</p>
        <p>twitter</p>
        <p>hashnode</p>
      </div>
      <p>gerry &copy; 2024</p>
    </div>
  );
}
