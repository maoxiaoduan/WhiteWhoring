import React, { Component } from "react";
import { NavLink, Switch, Route, withRouter, Redirect } from "react-router-dom";
import $ from "jquery";
import Video from "../views/video";
import Mine from "../views/mine";
import Boke from "../views/boke";
import Find from "../views/find";
import store from "../../../store/index";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  goHome = () => {
    this.props.history.push({ pathname: "/" });
    // console.log(this.props);
  };
  onChangeTxt = (id) => {
    let name = "";
    if (id === 1) {
      name = "短视频";
    }
    if (id === 2) {
      name = "我的";
    }
    if (id === 3) {
      name = "播客";
    }
    if (id === 4) {
      name = "发现";
    }
    // console.log(name, "onchange");
    const action = {
      type: "change_titleTxt",
      value: name,
    };
    store.dispatch(action);
  };
  render() {
    return (
      <>
        <ul id="navs" data-open="收起" data-close="菜单" style={{zIndex:'10'}}>
          <li>
            <span
              style={{
                background: "#3399CC",
                display: "block",
                borderRadius: "50%",
              }}
              onClick={this.goHome}
            >
              首页
            </span>
          </li>
          <li>
            <NavLink
              style={{ background: "#3399CC" }}
              to="/music/video"
              onClick={() => this.onChangeTxt(1)}
            >
              短视频
            </NavLink>
          </li>
          <li>
            <NavLink
              style={{ background: "#3399CC" }}
              to="/music/mine"
              onClick={() => this.onChangeTxt(2)}
            >
              我的
            </NavLink>
          </li>
          <li>
            <NavLink
              style={{ background: "#3399CC" }}
              to="/music/boke"
              onClick={() => this.onChangeTxt(3)}
            >
              播客
            </NavLink>
          </li>
          <li>
            <NavLink
              style={{ background: "#3399CC" }}
              to="/music/find"
              onClick={() => this.onChangeTxt(4)}
            >
              发现
            </NavLink>
          </li>
        </ul>
        <Switch>
          <Route path="/music/video" component={Video} />
          <Route path="/music/mine" component={Mine} />
          <Route path="/music/boke" component={Boke} />
          <Route path="/music/find" component={Find} />
          <Redirect to="/music/find"></Redirect>
        </Switch>
      </>
    );
  }
  componentDidMount() {
    let name = "";
    if (this.props.location.pathname === "/music/mine") {
      name = "我的";
    }
    if (this.props.location.pathname === "/music/find") {
      name = "发现";
    }
    if (this.props.location.pathname === "/music/video") {
      name = "短视频";
    }
    if (this.props.location.pathname === "/music/boke") {
      name = "播客";
    }
    const action = {
      type: "change_titleTxt",
      value: name,
    };
    store.dispatch(action);
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
