import "./services.scss";
// import { motion } from "framer-motion";

/* eslint-disable */
function List({ title, body, btnTxt }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
      <button>{btnTxt}</button>
    </div>
  );
}

function Services() {
  return (
    <div className="section__padding section__margin services">
      <div className="textContainer">
        <p>
          I build outstanding user interfaces, <br />
          that capture users attention
        </p>
        <hr className="gradient__text" />
      </div>
      <div className="titleContainer">
        <div className="title">
          <img src="../images/code.jpeg" alt="" />
          <h1>
            I bring your <b>unique</b>{" "}
          </h1>
        </div>
        <div className="title">
          <h1>
            <b>ideals</b> to visual life
          </h1>
          <button>What I Do ?</button>
        </div>
      </div>
      <div className="listContainer">
        <List
          body={
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, vel ratione illum perspiciatis, quas a magni id dolorem libero, sit reprehenderit ad mollitia eligendi suscipit omnis exercitationem molestiae asperiores aut?"
          }
          btnTxt={"What i do"}
          title={"lets help you"}
        />
        <List
          body={
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, vel ratione illum perspiciatis, quas a magni id dolorem libero, sit reprehenderit ad mollitia eligendi suscipit omnis exercitationem molestiae asperiores aut?"
          }
          btnTxt={"What i do"}
          title={"lets help you"}
        />
        <List
          body={
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, vel ratione illum perspiciatis, quas a magni id dolorem libero, sit reprehenderit ad mollitia eligendi suscipit omnis exercitationem molestiae asperiores aut?"
          }
          btnTxt={"What i do"}
          title={"lets help you"}
        />
      </div>
      {/* <hr /> */}
    </div>
  );
}

export default Services;
