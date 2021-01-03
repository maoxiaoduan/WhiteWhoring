import React, { Component } from "react";
import xgPlayer from "xgplayer";
import axios from "axios";
class PreMv extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailUrl: "",
    };
  }
  componentDidMount() {
    console.log(this.props.detail);
    axios.get("/video/url?id=" + this.props.detailId).then((res) => {
      console.log(res.data, res, "preMv");
      this.setState({
        detailUrl: res.data.urls[0].url,
      });
      new xgPlayer({
        id: this.props.detailId,
        autoplay: false,
        volume: 0.3,
        url: this.state.detailUrl,
        poster: this.props.detail.coverUrl,
        playsinline: true,
        height: window.innerHeight,
        width: window.innerWidth,
      });
      console.log(this.state.detailUrl);
    });
  }
  render() {
    const { detail, detailId } = this.props;
    const { detailUrl } = this.state;
    return (
      <>
        <div>
          <div id={detailId}></div>
          {/* <img src={detail.coverUrl} alt="" />
          <p>{detail.title}</p>
          <span>{"点赞" + detail.praisedCount}</span> */}
          {/* <video src={detailUrl} autoplay controls></video> */}
        </div>
      </>
    );
  }
}

export default PreMv;
