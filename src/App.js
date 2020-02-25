import React from "react";
import "./main.scss";
import Header from "./components/header.jsx";
import Home from "./pages/home.jsx";
import Work from "./pages/work.jsx";
import About from "./pages/about.jsx";
import Contact from "./pages/contact.jsx";
import { Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/work" exact component={Work} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </div>
    );
  }
}

export default App;
