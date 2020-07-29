/** @format */

import React, { Component } from "react";
import Random from "./comp2.jsx";
import RandomModule from "./comp3.jsx";
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
      randomQuote: null,
      quoteOfDay: null
    };
    this.func = this.func.bind(this);
    this.saveToFav = this.saveToFav.bind(this);
    this.showFavList = this.showFavList.bind(this);
    this.makeQuoteOfDay = this.makeQuoteOfDay.bind(this);
    this.deleteQuote = this.deleteQuote.bind(this);
    this.postQuoteDay = this.postQuoteDay.bind(this);
    this.updateQuoteDay = this.updateQuoteDay.bind(this);
   
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
          randomQuote: result.data
        
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
    axios.delete("http://localhost:8080/delete", { data: obj }).then(()=>{
      this.showFavList();
    })
  }
  postQuoteDay(obj) {
    console.log(obj, 81)
    console.log("postQuote was clicked on!");
    axios
    .post("http://localhost:8080/postQuoteDay", obj)
    .then((result) => {
    console.log(result.data, 75555555);
    this.setState({quoteOfDay: result.data})
    console.log(this.state.quoteOfDay, 90);
    })
      
  }
  updateQuoteDay(obj) {
    console.log("updateQuote was clicked on!");
    axios
    .post("http://localhost:8080/update", obj).then((result) => {
     this.setState({
       quoteOfDay: result.data
     })
     this.showFavList();

    })
  }

  render() {
    return (
      <div>
        <div>
          <QuoteOfDay quoteOfDay={this.state.quoteOfDay} />
          <Random func={this.func} />
          <RandomModule
            randomQuote ={this.state.randomQuote}
            showFavList={this.showFavList}
            quote={this.state.quote}
            quoteAuthor={this.state.quoteAuthor}
            saveToFav={this.saveToFav}
            postDay = {this.postQuoteDay}
          />
          <Fav
            favList={this.state.favList}
            showFavList={this.showFavList}
            makeQuoteOfDay={this.makeQuoteOfDay}
            deleteQuote={this.deleteQuote}
             updateDay = {this.updateQuoteDay}
          />
        </div>
      </div>
    );
  }
}

export default Main;
