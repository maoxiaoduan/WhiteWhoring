import React, { Component } from "react";
import { NavLink, Switch, Route, withRouter,Redirect } from "react-router-dom";
import $ from "jquery";
import Video from "../views/video";
import Mine from "../views/mine";
import Boke from "../views/boke";
import Find from "../views/find";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  goHome = () => {
    this.props.history.push({ pathname: "/" });
    console.log(this.props);
  };
  render() {
    return (
      <>
        <ul id="navs" data-open="收起" data-close="菜单">
          <li>
              <span onClick={this.goHome}>首页</span>
          </li>
          <li>
            <NavLink to="/music/video">短视频</NavLink>
          </li>
          <li>
            <NavLink to="/music/mine">我的</NavLink>
          </li>
          <li>
            <NavLink to="/music/boke">播客</NavLink>
          </li>
          <li>
            <NavLink to="/music/find">发现</NavLink>
          </li>
        </ul>
        <Switch>
          <Route path="/music/video" component={Video} />
          <Route path="/music/mine" component={Mine} />
          <Route path="/music/boke" component={Boke} />
          <Route path="/music/find" component={Find} />
          <Redirect to='/music/find'></Redirect>
        </Switch>
      </>
    );
  }
  componentDidMount() {
    var ul = $("#navs"),
      li = $("#navs li"),
      i = li.length,
      n = i - 1,
      r = 120;
    ul.click(function () {
      $(this).toggleClass("active");
      if ($(this).hasClass("active")) {
        for (var a = 0; a < i; a++) {
          li.eq(a).css({
            "transition-delay": "" + 50 * a + "ms",
            "-webkit-transition-delay": "" + 50 * a + "ms",
            "-o-transition-delay": "" + 50 * a + "ms",
            transform:
              "translate(" +
              r * Math.cos((90 / n) * a * (Math.PI / 180)) +
              "px," +
              -r * Math.sin((90 / n) * a * (Math.PI / 180)) +
              "px",
            "-webkit-transform":
              "translate(" +
              r * Math.cos((90 / n) * a * (Math.PI / 180)) +
              "px," +
              -r * Math.sin((90 / n) * a * (Math.PI / 180)) +
              "px",
            "-o-transform":
              "translate(" +
              r * Math.cos((90 / n) * a * (Math.PI / 180)) +
              "px," +
              -r * Math.sin((90 / n) * a * (Math.PI / 180)) +
              "px",
            "-ms-transform":
              "translate(" +
              r * Math.cos((90 / n) * a * (Math.PI / 180)) +
              "px," +
              -r * Math.sin((90 / n) * a * (Math.PI / 180)) +
              "px",
          });
        }
      } else {
        li.removeAttr("style");
      }
    });
  }
}

export default withRouter(Menu);
