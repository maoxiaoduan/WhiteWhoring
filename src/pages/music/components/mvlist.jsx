import React, { Component } from "react";
import { Tabs, WhiteSpace } from "antd-mobile";
import store from "../../../store/index";
import axios from "axios";
class MvList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      list: [],
    };
  }
  componentDidMount() {
    axios.get("/video/category/list").then((res) => {
      console.log(res.data.data, "find");
      let arr = [];
      for (let i = 0; i < res.data.data.length; i++) {
        arr.push({ title: res.data.data[i].name });
      }
      console.log(arr);
      this.setState({
        data: arr,
        list: res.data.data,
      });
      const action = {
        type: "chang_mvListId",
        value: res.data.data[0].id,
      };
      store.dispatch(action);
    });
  }
  detail = (id, index) => {
    console.log(id, index);
  };

  render() {
    // const data = this.state.data;
    const { data, list } = this.state;
    const tabs = data;
    return (
      <>
        <WhiteSpace />
        <Tabs
          swipeable
          tabs={tabs}
          onChange={(tab, index) => {
            const action = {
              type: "chang_mvListId",
              value: list[index].id,
            };
            store.dispatch(action);
          }}
          renderTabBar={(props) => <Tabs.DefaultTabBar {...props} page={4} />}
        ></Tabs>
        <WhiteSpace />
      </>
    );
  }
}

export default MvList;
