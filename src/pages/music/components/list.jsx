import React, { Component } from "react";
import axios from "axios";
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    /* axios
      .get("/login/cellphone?phone=17634746536&password=xinjing123")
      .then((res) => {
        console.log(res, "login");
      }); */ /*  /video/detail?id=F17D884BC5B4C44A5D845FD566D445D9   userId: 1434041291*/
    axios.get("/mv/all").then((res) => {
      console.log(res.data.data, res, "find");
    });
    axios.get("/mv/url?id=10857678").then((res) => {
      console.log(res.data.data.url, "find5");
    });

    /* axios.get("/video/category/list").then((res) => {
      console.log(res, res.data.data, "find1");
    }); */

    /* axios.get("/video/group?id=1101&offset=1").then((res) => {
      console.log(res, "find4");
    }); */
    axios
      .get("/video/url?id=C04F8BF2E0D22AC890721FBE53F04D33s", {
        headers: { withCredentials: true },
      })
      .then((res) => {
        console.log(res.data.urls[0].url, res, "find2");
      });
    axios.get("/homepage/dragon/ball").then((res) => {
      //   console.log(res, "page");
      this.setState({
        data: res.data.data,
      });
    });
  }
  render() {
    const data = this.state.data;
    return (
      <>
        <ul style={{ overflow: "auto", display: "flex" }}>
          {data.map((item) => {
            return (
              <li
                key={item.id}
                style={{
                  listStyle: "none",
                  width: "5rem",
                  textAlign: "center",
                  margin: "0.3rem  0.8rem",
                  paddingRight: "0.3rem",
                }}
              >
                {/* <a href=""> */}
                <img
                  src={item.iconUrl}
                  alt=""
                  style={{
                    width: "3.5rem",
                    borderRadius: "50%",
                    backgroundColor: "#393e46",
                  }}
                />
                <p
                  style={{
                    margin: "0.3rem 0",
                    fontSize: ".8rem",
                    color: "#393e46",
                  }}
                >
                  {item.name}
                </p>
                {/* </a> */}
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default List;
