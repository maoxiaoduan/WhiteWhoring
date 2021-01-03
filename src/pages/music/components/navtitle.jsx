import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { NavBar, Icon } from "antd-mobile";
import { Modal, Button } from "antd";
import Xiaolian from "../../../assets/img/white.jpg";
import store from "../../../store/index";
class Navtxt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txt: '',
      modal1Visible: false,
      modal2Visible: false,
    };
    store.subscribe(this.handleStoreChange); //监听store变化
  }
  setModal2Visible(modal2Visible, index) {
    this.setState({ modal2Visible });
    if (index) {
      this.props.history.push({
        state: { name: "ok" },
        pathname: "/movie",
      });
    }
  }

  handleStoreChange = () => {
    // console.log(this.props);
    this.setState({
      txt: store.getState().titleTxt,
    });
  };
  componentDidMount() {
    this.setState({
      txt: store.getState().titleTxt,
    });
  }
  render() {
    return (
      <div>
        <NavBar
          mode="black"
          style={{ background: "#00adb5" }}
          icon={<Icon type="search" />}
          onLeftClick={() => console.log("onLeftClick")}
          rightContent={[
            <>
              <Button
                type="primary"
                style={{ background: "#00adb5", borderColor: "#00adb5" }}
                onClick={() => this.setModal2Visible(true)}
              >
                <span className="iconfont icon-bofang1">去看电影</span>
              </Button>
              <Modal
                title="What are you 弄啥嘞？"
                centered
                visible={this.state.modal2Visible}
                onOk={() => this.setModal2Visible(false, 1)}
                onCancel={() => this.setModal2Visible(false)}
                cancelText="不弄啥"
                okText="洒家要去看电影"
              >
                <div
                  style={{
                    height: "20rem",
                    margin: "0",
                  }}
                >
                  <img src={Xiaolian} style={{ width: "100%" }} alt="" />
                </div>
              </Modal>
            </>,
          ]}
        >
          {this.state.txt}
        </NavBar>
      </div>
    );
  }
}

export default withRouter(Navtxt);
