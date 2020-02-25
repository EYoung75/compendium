import React from "react";

const Home = () => {
  return (
    <div className="home">
      <div className="home__row">
        <div className="home__row__card">
          <h3>Bottled for your pleasure</h3>
          <h2>Potted Autobiography</h2>
          <img src={require("../assets/brain.png")}/>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            neque maxime rem? Dolores vel eligendi voluptate expedita dicta,
            autem incidunt obcaecati ipsam aperiam quia eos voluptas doloribus
            commodi quasi ad!
          </p>
        </div>
        <div className="home__row__card">
          <h3>Catalogued Actions</h3>
          <h2>Exhaustive Archives</h2>
          <img src={require("../assets/anchor.png")}/>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            neque maxime rem? Dolores vel eligendi voluptate expedita dicta,
            autem incidunt obcaecati ipsam aperiam quia eos voluptas doloribus
            commodi quasi ad!
          </p>
        </div>
        <div className="home__row__card">
          <h3>Mr. Young is currently receiving</h3>
          <h2>Drop a line</h2>
          <img src={require("../assets/dragonfly.png")}/>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            neque maxime rem? Dolores vel eligendi voluptate expedita dicta,
            autem incidunt obcaecati ipsam aperiam quia eos voluptas doloribus
            commodi quasi ad!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
