import React, { Component } from "react";
import { Carousel, WingBlank } from "antd-mobile";
import axios from "axios";
import List from "../components/list";
import SongList from "../components/songlist";
import "./find.css";
class Find extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], imgHeight: 176 };
  }
  componentDidMount() {
    axios.get("/banner?type=2").then((res) => {
      //   console.log(res.data.banners, "get");
      setTimeout(() => {
        this.setState({
          data: res.data.banners,
        });
      }, 100);
    });
  }

  render() {
    return (
      <div className="find">
        <div className="lunbo">
          <WingBlank>
            <Carousel
              autoplay={true}
              infinite
              beforeChange={(index) => console.log(index)}
            >
              {this.state.data.map((val) => (
                <a
                  onChange={this.handleClick}
                  key={val}
                  href={`${val.url}`}
                  style={{
                    display: "inline-block",
                    width: "100%",
                    height: this.state.imgHeight,
                  }}
                >
                  <img
                    touchmove={this.handleClick}
                    src={`${val.pic}`}
                    alt=""
                    style={{ width: "100%", verticalAlign: "top" }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event("resize"));
                      this.setState({ imgHeight: "auto" });
                    }}
                  />
                </a>
              ))}
            </Carousel>
          </WingBlank>
        </div>
        <div className="List">
          <List />
          <SongList />
        </div>
      </div>
    );
  }
}

export default Find;
