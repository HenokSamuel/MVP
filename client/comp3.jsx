/** @format */

import React, { Component } from "react";

class Search2 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {saveToFav} = this.props;
    if (this.props.quote !== null) {
      return (
        <div id="container">
          <p>{this.props.quote}</p>
          <p id='author'>{this.props.quoteAuthor}</p>
          <label>
            Save to favorties!<button onClick={saveToFav}></button>
          </label>
        </div>
      );
    }else{
        return (
            <div></div>
        )
    }
  }
}

export default Search2;
