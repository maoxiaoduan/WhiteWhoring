import { createStore } from "redux";
// import 'antd/dist/antd.min.css';
import reducer from "./reducer";
//创建reducer 然后引入
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;