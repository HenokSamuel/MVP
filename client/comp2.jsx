/** @format */

import React, { Component } from "react";

class Random extends Component {
  constructor(props) {
    super(props);
    // ✅ Okay to use `this` now
  }

  render() {
    const { func } = this.props;
    return (
      <div>
        <label id='header'>Random Quote</label><br/>
        <button onClick={func}>Find Quote</button>
      </div>
    );
  }
}

export default Random;
