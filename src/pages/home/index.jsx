import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";
import "./home.css";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div id="home">
        <div className="header">
          <h2>欢迎来到白嫖时代</h2>
        </div>
        <div className="content">
          <div className="movie">
            <NavLink to="/movie">VIP电影白嫖</NavLink>
          </div>
          <div className="music">
            <NavLink to="/music">
              <div className="landscape">
                <div className="img"></div>
              </div>
              <div className="filter"></div>
            </NavLink>
          </div>
        </div>
        <div className="footer">
          <h2>欢迎来到白嫖时代</h2>
        </div>
      </div>
    );
  }

}

export default withRouter(Home);
