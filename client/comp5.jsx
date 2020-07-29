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
        
        <div id='qDay'classfavDivs>
            <h1>Welcome to Quoter</h1>
            <h2>Quote of The Day</h2>
          <p>{this.props.quoteOfDay.quote}</p>
          <p id='author'>Quote by: {this.props.quoteOfDay.author}</p>
        
        

        </div>
      );
    }else{
        return (
            <div><h1>Welcome to Quoter</h1>
                <p>You need a Quote of a day to get you through the day!</p></div>
        )
    }
  }
}

export default QuoteOfDay;
