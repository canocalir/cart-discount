import React, { Component } from 'react';
import './Main.css';
import Checkout from '../Checkout/Checkout';


export default class Main extends Component {
  render() {
    return (
      <div className="main-container">
      <Checkout/>
      </div>
    )
  }
}
