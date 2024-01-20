import "./parallax.scss";

/* eslint-disable */

function Parallax({ type }) {
  return (
    <div className="parallax section__margin section__padding">
      <h1>{type === "services" ? "What I do ?" : "What I did ?"}</h1>
      {/* <div className="mountains"></div> */}
      <div className="planets"></div>
      <div className="stars"></div>
    </div>
  );
}

export default Parallax;
