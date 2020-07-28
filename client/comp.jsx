/** @format */

import React, { Component } from "react";
import Random from "./comp2.jsx";
import Search2 from "./comp3.jsx";
import Fav from "./comp4.jsx";
const axios = require("axios");
class Main extends Component {
  constructor(props) {
    super(props);
    // ✅ Okay to use `this` now
    this.state = { quote: null, quoteAuthor: null, _id: null };
    this.func = this.func.bind(this);
    this.saveToFav = this.saveToFav.bind(this);
    this.showFavList = this.showFavList.bind(this);
  }
  func() {
    axios
      .get("https://quote-garden.herokuapp.com/quotes/random")
      .then((result) => {
        console.log(result);
        this.setState({
          quote: result.data.quoteText,
          quoteAuthor: result.data.quoteAuthor,
          _id: result.data._id,
        });
      });
  }
  saveToFav() {
    console.log('sucess!');
    axios.post('http://localhost:8080/post', {
      quote: this.state.quote,
      quoteAuthor: this.state.quoteAuthor, 
      _id: this.state._id 
    }).then(result => console.log(result.data));
  }
  showFavList() {
    console.log('sucess!');
    axios.get('http://localhost:8080/fav')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  }
  render() {
    return (
      <div>
        <div>
        <Random func={this.func} />
        <Search2 quote={this.state.quote} quoteAuthor={this.state.quoteAuthor} saveToFav={this.saveToFav} />
        <Fav showFavList={this.showFavList}/>
         
          </div>
      </div>
    );
  }
}

export default Main;
