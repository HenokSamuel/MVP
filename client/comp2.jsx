import React, { Component } from 'react';

class Random extends Component {
  constructor(props) {
    super(props);
    // ✅ Okay to use `this` now
  
  }

  render() {
    const {func} = this.props;
    return (
      <div>
  <label>Random Generatior</label>
  <button onClick={func}>Click me!!!</button>
    </div>
    )
  } 
} 

export default Random;
