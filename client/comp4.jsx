/** @format */

import React, { Component } from "react";

class Fav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { showFavList, favList, makeQuoteOfDay, deleteQuote } = this.props;
    if (favList !== null) {
      const reversedArr = favList.reverse();
      return (
        <div>
          {reversedArr.map((obj) => {
            return (
              <div class="favDivs">
                <p>{obj.quote}</p>
                <p id="author">Quote by: {obj.author}</p>
                <button
                  onClick={() => {
                    makeQuoteOfDay(obj);
                  }}
                >
                  MakeQuouteOfDay
                </button><button onClick={() => {
                
                    deleteQuote(obj);
                  }}>Delete</button>
              </div>
            );
          })}
        </div>
      );
    }
    return <div></div>;
  }
}

export default Fav;
