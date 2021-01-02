import React, { Component } from 'react';
import {  NavLink,withRouter } from 'react-router-dom'
import tu404 from '../../assets/404.jpg'
import './notfound.css'
class NotFound extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="main-container">
                <div className="img-container container-item">
                    <img src={`${tu404}`}/>
                </div>
                <div className="text-container ">
                    <div className="code">404</div>
                    <div className="msg">你查看的页面貌似丢失了呢...</div>
                    <NavLink to="/" className="action">返回首页,查看更多内容.</NavLink>
                </div>
            </div>
                
            
        );
    }
}
 
export default withRouter(NotFound);