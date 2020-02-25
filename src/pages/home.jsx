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
            Born in 1996 in the small town of Texarkana, Texas and raised with
            the values one might expect from such humble beginnings.
          </p>
          <p className="home__row__card__link"> Continue Reading &rarr;</p>
        </Link>
        <Link to="/work" className="home__row__card">
          <h3>Catalogued Endeavors</h3>
          <h2>Pending Archives</h2>
          <img src={require("../assets/dragonfly.png")} />
          <p>
            Herein lies an inexhaustive series of projects I have worked on
            previously. Projects that leverage skills such as React.JS, CSS3,
            HTML5, Flutter ...
          </p>
          <p className="home__row__card__link"> Continue Reading &rarr;</p>
        </Link>
        <Link to="/contact" className="home__row__card">
          <h3>Mr. Young is currently receiving</h3>
          <h2>Drop a line</h2>
          <img src={require("../assets/anchor.png")} />

          <p>
            Here one will find the means to contact me or peruse my online
            presence through mediums like Instagram or some other form of social
            media.
          </p>
          <p className="home__row__card__link"> Take a peak &rarr;</p>
        </Link>
        <Link to="/about" className="home__row__card">
          <h3>Catalogued Endeavors</h3>
          <h2>Definitive Archives</h2>
          <img src={require("../assets/dragonfly.png")} />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae sed
            earum porro nostrum ullam quos magni laudantium ratione repellat
            atque, unde, adipisci quod.
          </p>
          <p className="home__row__card__link">Continue Reading &rarr;</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
