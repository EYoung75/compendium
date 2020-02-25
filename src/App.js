import React from "react";
import "./main.scss";
import Header from "./components/header.jsx";
import Home from "./pages/home.jsx";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Home/>
      </div>
    );
  }
}

export default App;
