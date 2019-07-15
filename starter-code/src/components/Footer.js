import React, { Component } from "react";
import Footerelem from "./Footerelem";

export default class Footer extends Component {
  constructor() {
    super();
    this.elements = [
      {
        img: "./images/icon1.png",
        h1: "Declarative",
        p: "React makes it painless to create interactive UIs."
      },
      {
        img: "/images/icon2.png",
        h1: "Components",
        p: "Build encapsulated components that manage their state."
      },
      {
        img: "/images/icon3.png",
        h1: "Single-Way",
        p: "A set of immutable values are passed to the component's."
      },
      {
        img: "images/icon4.png",
        h1: "JSX",
        p: "Statically-typed, designed to run on modern browser."
      }
    ];
  }

  render() {
    return (
      <div className="footer">
        {this.elements.map((element, idx) => (
          <Footerelem
            key={idx}
            img={element.img}
            h1={element.h1}
            p={element.p}
          />
        ))}
      </div>
    );
  }
}
