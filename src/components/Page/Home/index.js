import React, { Component, Fragment } from "react";
import About from "../About";
import Contact from "../Contact/index";
import Products from "../Products/index";
import "../../../class.css";
import Blog from "../../headblog/Blog";
import { Divider } from "@material-ui/core";
import AdSense from "react-adsense-ad";
// import Home from "../Home/index";




export default class extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <Blog />
          <Divider orientation="horizontal" />
        </div>
        <div className="App-head">
          <Products />
        </div>
        <Divider orientation="horizontal" />
        <color>
          <div className="App-head" style={{ minHeight: "60vh" }}>
            <Contact />
          </div>
        </color>
        <Divider orientation="horizontal" />
        <div className="bar" style={{ minHeight: "2vh" }}>
          <About />
        </div>

        <AdSense.Google
          client="ca-pub-7259356476688149"
          slot="1782696596"
          style={{ width: "auto", height: 100, float: "center" }}
          format=""
        />
      </Fragment>
    );
  }
}
