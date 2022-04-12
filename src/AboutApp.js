import React, { Component } from "react";
import code from "./images/code.png";
import code1 from "./images/code1.png";

class AboutApp extends Component {
  render() {
    return (
      <div class="about_container">
        <div class="picture_box">
          <img
            src={code}
            alt="JS Code"
            height="100%"
            width="400"
            class="code_pic"
          />
          <img
            src={code1}
            alt="Also JS Code, but HTML'y"
            height="100%"
            width="400"
            class="code_pic"
          />
        </div>
        <div class="textbox_about">
          <h3>Mini-documentation!</h3>
          <p>API link:</p>
          <a href="http://numbersapi.com/#random/year">
            http://numbersapi.com/#random/year
          </a>
          <p>
            fetchData - basically it takes year from input or button, and puts
            it into API link. It updates object's state (text), to previously
            taken date. Said year is then put in API link in exchange for $year.
          </p>
          <p>
            userDateInput - takes data from user's input and calls to fetchData.
          </p>
          <p>
            getRandomYear - generates random number from 0.0 do 1.0, rounds it
            up and multiplies by 2022 - so that maximum year generated is not
            bigger then 2022.
          </p>
          <p>Everything's in english because data from API is in Kings.</p>
        </div>
      </div>
    );
  }
}
export default AboutApp;
