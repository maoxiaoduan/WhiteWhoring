import React, { Component } from "react";
import axios from "axios";

class SongList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    axios.get("/personalized?limit=8").then((res) => {
    //   console.log(res, "find");
      this.setState({
        data: res.data.result,
      });
    });
  }
  detail=(id)=>{
      console.log(id);
  }
  more=(id)=>{
      console.log(id);
  }
  render() {
    const data = this.state.data;
    return (
      <>
        <div style={{position:'relative',marginBottom:'.5rem',display:'flex',justifyContent:'space-between'}}>
          <h3 style={{}}>&nbsp;&nbsp;推荐歌单</h3>
          <span style={{width:'3.5rem',border:'1px solid #cecece',borderRadius:'.6rem',textAlign:'center'}} onClick={()=>this.more(1)}>更多&nbsp;&gt;</span>
        </div>
        <ul style={{ display: "flex", overflow: "auto" }}>
          {data.map((item) => {
            return (
              <li
                key={item.id}
                style={{
                  width: "8rem",
                  display: "block",
                  margin: "0.2rem 0.5rem",
                  paddingRight: ".2rem",
                  position: "relative",
                }}
                onClick={()=>this.detail(item.id)}
              >
                <p
                  style={{
                    position: "absolute",
                    color: "white",
                    top: "0.1rem",
                    backgroundColor: "rgba(122, 122, 122, 0.5)",
                    borderRadius: ".5rem",
                    padding: ".2rem",
                    right: ".2rem",
                  }}
                >
                  <span
                    className="iconfont icon-bofang"
                    style={{ marginRight: ".1rem" }}
                  ></span>
                  <span
                    style={{
                      position: "relative",
                      width: "1rem",
                    }}
                  >
                    {item.playCount}
                  </span>
                </p>

                <img src={item.picUrl} alt="" style={{ width: "8rem",borderRadius:'1rem' }} />
                <p
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis", //显示省略号
                    display: "-webkit-box",
                    WebkitLineClamp: "2", //块元素显示的文本行数
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {item.name}
                </p>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default SongList;
