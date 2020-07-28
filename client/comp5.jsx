/** @format */

import React, { Component } from "react";

class QuoteOfDay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {saveToFav} = this.props;
    if (this.props.quoteOfDay !== null) {
      return (
        <div id="container">
          <p>{this.props.quoteOfDay.quote}</p>
          <p id='author'>Quote by: {this.props.quoteOfDay.author}</p>
        
         <button onClick={saveToFav}>Update</button>

        </div>
      );
    }else{
        return (
            <div></div>
        )
    }
  }
}

export default QuoteOfDay;
