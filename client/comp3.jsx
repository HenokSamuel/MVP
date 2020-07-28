/** @format */

import React, { Component } from "react";

class Search2 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { saveToFav } = this.props;
    if (this.props.quote !== null) {
      return (
        <div id="container" class="favDivs">
          <p>{this.props.quote}</p>
          <p id="author">Quote by: {this.props.quoteAuthor}</p>

          <button onClick={saveToFav}>Save to favorties!</button>

          <button onClick={this.props.showFavList}>Show Favorite List!</button>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default Search2;
