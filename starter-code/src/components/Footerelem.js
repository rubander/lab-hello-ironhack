import React, { Component } from 'react'

export default class Footerelem extends Component {
  render() {
    return (
      <div className="footer-elem">
         <img src={this.props.img} />
      <h1>{this.props.h1}</h1>
      <p>{this.props.p}</p>
      </div>
    )
  }
}
