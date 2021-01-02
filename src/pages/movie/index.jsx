import React, { Component } from 'react'
import './movie.css'
class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            num1:true,
            num2:'no'
         }
    }
    componentDidMount(){
        if(!this.props.location.state) {
            this.props.history.push('/404')
        }
    }
    render() { 
       
        return ( 
            <div>
               {/*  <input type="text" placeholder="请输入连接" id="tex" />
                <input type="button" value="播放" id="but" /> */}
               {/*  <iframe
                    id="palybox" 
                    src="https://z1.m1907.cn/?jx=https://www.mgtv.com/b/356603/10726639.html" 
                    //allowFullScreen="true" 
                    allowtransparency="true" 
                    frameBorder={this.state.num1} 
                    scrolling={this.state.num2} 
                    width='100%' height="600px" >
                 </iframe> */}
                 <div className='bofang' ng-if="showInvoice" >
                    <iframe 
                        id="palybox"
                        src="https://z1.m1907.cn/?jx=https://www.mgtv.com/b/356603/10726639.html" 
                        frameBorder="0" 
                        scrolling='no' 
                        allowtransparency='true' 
                        allowFullScreen={this.state.num1}
                        />                       
                </div>
               
            </div> 
        );
    }
}
 
export default Movie;