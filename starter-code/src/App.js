import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Bodymain from "./components/Bodymain";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Navbar />
          <Bodymain />
          <Footer />
        </header>
      </div>
    );
  }
}

export default App;
