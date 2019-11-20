import React, { Component } from 'react';
import TweenOne from 'rc-tween-one';

import '../App.scss';
import '../Assets/scss/main.scss'

import logo from '../Assets/image/Concierge-app.png';
import vv_1 from '../Assets/image/VV-1.svg';
import vv_2 from '../Assets/image/VV-2.svg';
import vv_3 from '../Assets/image/VV-3.svg';
import vv_4 from '../Assets/image/VV-4.svg';
import { FaCentercode } from 'react-icons/fa';

class Branding extends Component {
    render() {
        const animate2 ={
            scale:1.4,
            yoyo: true,
            transformOrigin:'center',
            duration:4000,
            scale:0
        }
        this.anim2 ={
            img_1:[
                {...animate2, delay:0},
           
            ]
        }
        const animation = {

            rotateY: 360,
            origin: 'center center',
            yoyo: true,
            opacity: 1,
            opacity: 0 

        }
        this.animate = {
            img_1:
                {...animation, duration: 3100},
         
            img_2: 
                {...animation, delay: 300, duration: 3000},
        
            img_3:{ ...animation, delay: 400, duration: 2000},
            
            img_4: { ...animation, delay: 500, duration: 1000 },
           
            img_5: [
                { opacity: 0.3 },
                { ...animation, delay: 100, duration: 2000 },
                { opacity: 1 }
            ],

        }
        return (
            <div className="logo">

            { /*First Animation */}
           
{/* height='180.4em'  */}
  {/* height='180.6em' */}
   {/* height='183em'  */}
      {/* height='183em' */}
          {/* height='183.8em' */}
                <TweenOne animation={this.animate.img_1} style={{ marginLeft: '-200px' }}>
                    <img src={vv_1} />
                     
                </TweenOne>
                <TweenOne animation={this.animate.img_2} >
                    <img src={vv_2} />
                  
                </TweenOne>
                <TweenOne animation={this.animate.img_3}>
                    <img src={vv_3} />
                   
                </TweenOne>
                <TweenOne animation={this.animate.img_4}>
                    <img src={vv_4}/>
                 
                </TweenOne>
                <TweenOne animation={this.animate.img_5}>
                    <img src={logo}  height='150.8em' alt="logo" />
                
                </TweenOne>


           { /*Second Animation */}
{/* 
           <TweenOne animation={animate2} style={{ marginLeft: '-225px' }}>
                    <img src={vv_1} height='170.4em' />
            </TweenOne> */}


            </div>

        )
    }
}

export default Branding