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
        console.log(this.props.location,'movie');
        if(!this.props.location.state) {
            this.props.history.push('/404')
        }
    }
    render() { 
       
        return ( 
            <div>
                 <div className='bofang' ng-if="showInvoice" >
                   {/*  <iframe 
                        id="palybox"
                        src="https://z1.m1907.cn/?jx=https://www.mgtv.com/b/356603/10726639.html" 
                        frameBorder="0" 
                        scrolling='no' 
                        allowtransparency='true' 
                        allowFullScreen={this.state.num1}
                        />      */}                  
                </div>
               
            </div> 
        );
    }
}
 
export default Movie;