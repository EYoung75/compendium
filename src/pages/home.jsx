import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="home__row">
        <Link to="/about" exact className="home__row__card">
          <h3>In his own words</h3>
          <h2>Derived Autobiography</h2>
          <img src={require("../assets/brain.png")} />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            neque maxime rem? Dolores vel eligendi voluptate expedita dicta,
            autem incidunt obcaecati ipsam aperiam quia eos voluptas doloribus
            commodi quasi ad!
          </p>
        </Link>
        <Link to="/work" className="home__row__card">
          <h3>Catalogued Endeavors</h3>
          <h2>Definitive Archives</h2>
          <img src={require("../assets/anchor.png")} />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            neque maxime rem? Dolores vel eligendi voluptate expedita dicta,
            autem incidunt obcaecati ipsam aperiam quia eos voluptas doloribus
            commodi quasi ad!
          </p>
        </Link>
        <Link to="/contact" className="home__row__card">
          <h3>Mr. Young is currently receiving</h3>
          <h2>Drop a line</h2>
          <img src={require("../assets/dragonfly.png")} />

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            neque maxime rem? Dolores vel eligendi voluptate expedita dicta,
            autem incidunt obcaecati ipsam aperiam quia eos voluptas doloribus
            commodi quasi ad!
          </p>
        </Link>
        <Link to="/about" className="home__row__card">
          <h3>Catalogued Endeavors</h3>
          <h2>Definitive Archives</h2>
          <img src={require("../assets/anchor.png")} />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            neque maxime rem? Dolores vel eligendi voluptate expedita dicta,
            autem incidunt obcaecati ipsam aperiam quia eos voluptas doloribus
            commodi quasi ad!
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
