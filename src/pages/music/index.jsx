import React, { Component } from "react";
import Menu from "./components/menu";
import NavTxt from "./components/navtitle";
import "./music.css";

class Music extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <NavTxt />
        网抑模块
        <Menu />
      </div>
    );
  }
}

export default Music;
