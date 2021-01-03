import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";
import {
  NoticeBar,
  Carousel,
  Modal,
  Button,
  List,
  WhiteSpace,
} from "antd-mobile";
import movietu from "../../assets/movie.jpg";
import movietu1 from "../../assets/movietu1.jpg";
import movietu2 from "../../assets/movietu2.jpg";
import movietu3 from "../../assets/movietu3.jpg";
import shou from "../../assets/shou.JPG";
import "./home.css";

function closest(el, selector) {
  const matchesSelector =
    el.matches ||
    el.webkitMatchesSelector ||
    el.mozMatchesSelector ||
    el.msMatchesSelector;
  while (el) {
    if (matchesSelector.call(el, selector)) {
      return el;
    }
    el = el.parentElement;
  }
  return null;
}
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal2: false,
    };
  }
  showModal = (key) => (e) => {
    e.preventDefault(); // 修复 Android 上点击穿透
    this.setState({
      [key]: true,
    });
  };
  onClose = (key) => () => {
    this.setState({
      [key]: false,
    });
  };

  onWrapTouchStart = (e) => {
    if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
      return;
    }
    const pNode = closest(e.target, ".am-modal-content");
    if (!pNode) {
      e.preventDefault();
    }
  };
  alert = Modal.alert;
  showAlert = () => {
    const alertInstance = this.alert(
      "警告",
      " 此产品仅供学习参考，禁止任何以盈利为目的使用和传播，违者后果自负！",
      [
        {
          text: "取消",
          onPress: () => console.log("cancel"),
          style: "default",
        },
        {
          text: "确定",
          onPress: () =>
            this.props.history.push(
              {
                pathname: "/movie",
                state: { name: "ok" },
              },                                         
            ),
        },
      ]
    );
    setTimeout(() => {
      // 可以调用close方法以在外部close
      console.log("auto close");
      alertInstance.close();
    }, 50000);
  };
  render() {
    return (
      <div id="home">
        <div className="header">
          <h2>欢迎来到白嫖时代</h2>
        </div>
        <div className="content">
          <div className="movie">
            <div className="navlink">
              <Button onClick={this.showAlert}>
                <img src={`${shou}`} alt="" />
                点击去看电影
              </Button>
            </div>
            <div className="jiaoc">
              <Button onClick={this.showModal("modal2")}>使用教程</Button>
              <WhiteSpace />
              <Modal
                popup
                visible={this.state.modal2}
                onClose={this.onClose("modal2")}
                animationType="slide-down"
              >
                <List
                  renderHeader={() => <div>使用教程</div>}
                  className="popup-list"
                >
                  {[
                    "1、找到想看的电影/电视剧的连接",
                    "2、复制地址栏的电影/电视剧的连接地址",
                    "3、将复制的地址连接粘贴到本项目的搜索栏",
                    "4、点击播放",
                    "如果不能正常播放点击切换播放路径试一试",
                    "注意：必须同意本项目的警告事项否则无法正常观看",
                  ].map((i, index) => (
                    <List.Item key={index}>{i}</List.Item>
                  ))}
                </List>
              </Modal>
            </div>
            <div className="notbar">
              <NoticeBar
                marqueeProps={{ loop: true, style: { padding: "0 7.5px" } }}
              >
                郑重提示:
                此产品仅供学习参考，禁止任何以盈利为目的使用和传播，违者后果自负！！！
              </NoticeBar>
            </div>
            <div className="swidth">
              <Carousel autoplay={true} infinite={true}>
                <img src={movietu} style={{ width: "100%"  }} alt="" />
                <img src={movietu1} style={{ width: "100%" }} alt="" />
                <img src={movietu2} style={{ width: "100%" }} alt="" />
                <img src={movietu3} style={{ width: "100%" }} alt="" />
              </Carousel>
            </div>
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
