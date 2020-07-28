/** @format */

import React, { Component } from "react";

class Fav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      const {showFavList} = this.props;
      return(
    <div>
        <button onClick={showFavList}>Show Favorite List</button>
    </div>
      )
//     if (this.props.quote !== null) 
}
}

export default Fav;
