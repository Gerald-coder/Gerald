import "./portfolio.scss";
/* eslint-disable */

const items = [
  {
    id: 1,
    title: "React Ecommerce",
    image:
      "https://images.pexels.com/photos/20333415/pexels-photo-20333415/free-photo-of-deckchairs-and-umbrellas-on-beach.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde nihil laborum a sapiente inventore, provident dolorem ipsa delectus nam voluptatibus dolorum doloribus? Eaque sequi, laboriosam inventore aut beatae eveniet odit!",
  },
  {
    id: 2,
    title: "Vanilla Ecommerce",
    image:
      "https://images.pexels.com/photos/20333415/pexels-photo-20333415/free-photo-of-deckchairs-and-umbrellas-on-beach.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde nihil laborum a sapiente inventore, provident dolorem ipsa delectus nam voluptatibus dolorum doloribus? Eaque sequi, laboriosam inventore aut beatae eveniet odit!",
  },
];

const Single = ({ item }) => {
  return <section className="section__padding">{item.title}</section>;
};

function Portfolio() {
  return (
    <div className="portfolio section__margin">
      <div className="progress">
        <h1>Featured Works</h1>
        <div className="progressBar"></div>
      </div>
      {items.map((item) => {
        return <Single item={item} key={item.id} />;
      })}
    </div>
  );
}

export default Portfolio;
