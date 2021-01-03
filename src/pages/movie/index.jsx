import React, { Component } from 'react'
import './movie.css'
import { NavBar, NoticeBar, } from 'antd-mobile';
class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            num1:true,
            num2:0,
            src:'',
            url:'https://z1.m1907.cn/?jx=',
            bofang:''
         }
    }
    componentDidMount(){
        if(!this.props.location.state) {
            this.props.history.push('/404')
        }
    }
    lianjie=(e)=>{
        this.setState({
            src:e.target.value
        })
    }
    lujing=(e)=>{
        this.setState({
            url:e.target.value
        })
    }
    bofang=()=>{
        this.setState({
            bofang:this.state.url+this.state.src
        })
    }
    wy=()=>{
        this.props.history.push('/music')
    }
    render() { 
        return ( 
            <div className='movie_hread'>
                <NavBar
                    mode="dark"
                    leftContent="Back"
                    onLeftClick={() =>  this.props.history.go(-1)}
                    rightContent={[<span key='1' onClick={this.wy} >去网易</span>]}>
                    电影免费看
                </NavBar>
                <NoticeBar marqueeProps={{ loop: true, style: { padding: "0 7.5px" } }}>
                    使用方法：复制任意视频网站VIP链接，粘贴到视频地址栏，点击播放即可
                </NoticeBar>
                <form action="">
                    <input className='tex1' type="text" placeholder='请输入视频连接' onChange={this.lianjie} />
                    <select className='tex2'  name="" id="" onChange={this.lujing}>
                        <option value="https://z1.m1907.cn/?jx=">播放路径一</option>
                        <option value="http://jx.618g.com/?url=">播放路径二</option>
                        <option value="https://17kyun.com/api.php?url=">播放路径三</option>
                        <option value="https://okjx.cc/?url=">播放路径四</option>
                        <option value="http://api.baiyug.vip/index.php?url=">播放路径五</option>
                        <option value="http://17kyun.com/api.php?url=">播放路径六</option>
                    </select>
                    <input className='tex3'  type="button" value='搜索' onClick={this.bofang} />
                </form>
                <div className='bofang' ng-if="showInvoice" >
                    <iframe 
                        id="palybox"
                        src={this.state.bofang} 
                        frameBorder={this.state.num2} 
                        scrolling='no'
                        allowtransparency='true' 
                        allowFullScreen={this.state.num1}
                    />                       
                </div>
               <div className='wangzhan'>
                    <a href="https://www.iqiyi.com/" target='_blank'>爱奇艺视频</a>
                    <a href="https://v.qq.com/" target='_blank'>腾讯视频</a>
                    <a href="http://www.le.com/" target='_blank'>乐视视频</a>
                    <a href="https://www.mgtv.com/" target='_blank'>芒果视频</a>
                    <a href="https://www.tudou.com/" target='_blank'>土豆视频</a>
                    <a href="https://www.youku.com/" target='_blank'>优酷视频</a>
                    <a href="https://tv.sohu.com/" target='_blank'>搜狐视频</a>
                    <a href="https://www.pptv.com/" target='_blank'>PPTV视频</a>
                    <a href="https://www.919yy.com/" target='_blank'>全网影视搜索</a>
               </div>
            </div> 
        );
    }
}
export default Movie;