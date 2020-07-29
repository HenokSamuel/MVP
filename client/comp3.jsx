/** @format */

import React, { Component } from "react";

class RandomModule extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { saveToFav, postDay, randomQuote } = this.props;
    if (this.props.quote !== null) {
      return (
        <div id="container" class="favDivs">
          <p>{this.props.quote}</p>
          <p id="author">Quote by: {this.props.quoteAuthor}</p>

          <button onClick={saveToFav}>Save to Favorties List!</button>

          <button onClick={this.props.showFavList}>Show Favorites List!</button>
          <button onClick={()=>{
              postDay(randomQuote)
          }}>Make this Quote of The Day!</button>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default RandomModule;
