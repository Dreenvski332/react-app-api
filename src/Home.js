import React, { Component } from "react";

class Home extends Component {
  state = {
    text:
      "Press the button or type in the year you want to find out stuff about!",
  };
  fetchData = (year) => {
    fetch(`http://numbersapi.com/${year}/year?json`)
      .then((response) => response.json())
      .then((data) => this.setState({ text: data.text }));
  };
  userDateInput = (year) => {
    this.fetchData(year.target.value);
  };
  getRandomYear = () => {
    let year = Math.floor(Math.random() * 2022);
    this.fetchData(year);
    document.querySelector(".year_input").value = year;
  };
  render() {
    return (
      <div class="home_container">
        <div class="home_title">
          <h3>Here is your useless fact:</h3>
        </div>
        <div class="output_container">
          <div class="output">
            <p>{this.state.text}</p>
          </div>
        </div>
        <div class="input">
          <input class="year_input" onChange={this.userDateInput} type="text" />
          <button class="random_button" onClick={this.getRandomYear}>
            Random Year me.
          </button>
        </div>
      </div>
    );
  }
}
export default Home;
