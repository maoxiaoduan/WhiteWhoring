import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { NavBar, Icon } from "antd-mobile";
import { Modal, Button } from "antd";
import Xiaolian from "../../../assets/img/white.jpg";
class Navtxt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal1Visible: false,
      modal2Visible: false,
    };
  }
  setModal2Visible(modal2Visible, index) {
    this.setState({ modal2Visible });
    console.log("456");
    if (index) {
      console.log("741852");
      this.props.history.push({ pathname: "/movie" });
    }
  }
  goMovie = () => {
    console.log(this.props);
    this.props.history.push({ pathname: "/movie" });
  };
  render() {
    return (
      <div>
        <NavBar
          mode="black"
          icon={<Icon type="search" style={{}} />}
          onLeftClick={() => console.log("onLeftClick")}
          rightContent={[
            <>
              <Button
                type="primary"
                style={{ background: "#108ee9", borderColor: "#108ee9" }}
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
                okText='洒家要去看电影'
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
          NavBar
        </NavBar>
      </div>
    );
  }
}

export default withRouter(Navtxt);
