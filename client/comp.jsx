/** @format */

import React, { Component } from "react";
import Random from "./comp2.jsx";
import Search2 from "./comp3.jsx";
import Fav from "./comp4.jsx";
import QuoteOfDay from "./comp5.jsx";
const axios = require("axios");
class Main extends Component {
  constructor(props) {
    super(props);
    // ✅ Okay to use `this` now
    this.state = {
      quote: null,
      quoteAuthor: null,
      _id: null,
      favList: null,
      quoteOfDay: null,
    };
    this.func = this.func.bind(this);
    this.saveToFav = this.saveToFav.bind(this);
    this.showFavList = this.showFavList.bind(this);
    this.makeQuoteOfDay = this.makeQuoteOfDay.bind(this);
    this.deleteQuote = this.deleteQuote.bind(this);
   
  }
  func() {
    axios
      .get("https://quote-garden.herokuapp.com/quotes/random")
      .then((result) => {
        // console.log(result);
        this.setState({
          quote: result.data.quoteText,
          quoteAuthor: result.data.quoteAuthor,
          _id: result.data._id,
        });
      });
  }
  saveToFav() {
    // console.log('sucess!');
    axios
      .post("http://localhost:8080/post", {
        quote: this.state.quote,
        quoteAuthor: this.state.quoteAuthor,
        _id: this.state._id,
      })
      .then((result) => console.log(result.data));
  }
  showFavList() {
    console.log("sucess!");
    axios
      .get("http://localhost:8080/fav")
      .then((response) => {
        console.log(response);
        this.setState({
          favList: response.data,
        });
        console.log(this.state.favList, 88);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  makeQuoteOfDay(obj) {
    console.log("makeQuoteOfDay was clicked!");
    axios
      .post("http://localhost:8080/quoteOfDay", obj)
      .then((result) => console.log(result.data));
  }
  deleteQuote(obj) {
    console.log("deleteQuoted was clicked on!");
    axios.delete("http://localhost:8080/delete", { data: obj });
  }

  render() {
    return (
      <div>
        <div>
          <QuoteOfDay quoteOfDay={this.state.quoteOfDay} />
          <Random func={this.func} />
          <Search2
            showFavList={this.showFavList}
            quote={this.state.quote}
            quoteAuthor={this.state.quoteAuthor}
            saveToFav={this.saveToFav}
          />
          <Fav
            favList={this.state.favList}
            showFavList={this.showFavList}
            makeQuoteOfDay={this.makeQuoteOfDay}
            deleteQuote={this.deleteQuote}
          />
        </div>
      </div>
    );
  }
}

export default Main;
