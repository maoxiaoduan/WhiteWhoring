import React, { Component } from "react";
import MvList from "../components/mvlist";
import PreMv from "../components/premv";
import store from "../../../store/index";
import "./video.css";
import axios from "axios";
class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mvId: "",
      listNum: 0,
      list: [],
    };
    store.subscribe(this.handleStoreChange);
  }
  handleStoreChange = async () => {
    //async await 解决不同步问题
    await this.setState({
      mvId: store.getState().mvListId,
    });
    axios
      .get(`/video/group?id=${this.state.mvId}&offset=${this.state.listNum}`)
      .then((res) => {
        // console.log(res.data.datas, "liebiao");
        this.setState({
          list: res.data.datas,
        });
      });
    // console.log(this.state.mvId, "store");
  };

  render() {
    const { list } = this.state;
    return (
      <>
        <MvList />
        <div className="list" style={{display:'flex',flexWrap:'wrap'}}>
          {list.map((item, index) => {
            return (
              <PreMv
                detailId={item.data.vid}
                detail={list[index].data}
                key={item.data.vid}
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default Video;
