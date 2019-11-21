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
    render(){
        const animate2 ={ 
            scale:.1,
            duration:800,
            ease:'easeInOutSine',
            yoyo: true
        }
        this.anim2 ={
            img_1:[
                {...animate2, scale:.2,translateZ:100,delay:0},
                {scale:1.2}
            ],
            img_2:[
                {...animate2, scale:.5,translateZ:170,delay:200},
                {scale:1.2}
            ],
            img_3:[
                {...animate2, scale:.8,translateZ:270,delay:300},
                {scale:1.2}
            ],
            img_4:[
                {...animate2, scale:.9,translateZ:370,delay:400},
                {scale:1.2}
            ]
        }
        const animation1 = {

            rotateY: 360,
            trandformOrigin: 'center',
            yoyo: true,
            opacity: 1,
            opacity: 0 

        }
        // this.animate = {
        //     img_1:
        //         {...animation1, duration: 3100},
         
            // img_2: 
            //     {...animation1, delay: 300, duration: 2500},
        
            // img_3:{ ...animation1, delay: 400, duration: 2000},
            
            // img_4: { ...animation1, delay: 500, duration: 1000 },
           
            // img_5: [
            //     { opacity: 0.3 },
            //     { ...animation, delay: 100, duration: 2000 },
            //     { opacity: 1 }
            // ],

        // }
        return (
            <div className="logo">

            { /*First Animation */}
           
{/* height='180.4em'  */}
  {/* height='180.6em' */}
   {/* height='183em'  */}
      {/* height='183em' */}
          {/* height='183.8em' */}
                {/* <TweenOne animation={this.animate.img_1}style={{ marginLeft: '-20px' }} >
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
                 
                </TweenOne> */}
                {/* <TweenOne animation={this.animate.img_5}>
                    <img src={logo}  height='150.8em' alt="logo" />
                
                </TweenOne> */}


           { /*Second Animation */}

           <TweenOne animation={ this.anim2.img_1} >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox='0 0 333 333' style={{ marginLeft: '-41.79px',marginTop: '5px'}}>
                <path d="M109.8,22.8C99.5,44.9,80.5,87.9,69.5,111.2c-1.5,3.2-2.3,4.2-3.5,4.3s-1.9-1.1-3.5-4.3c-11-23.3-30-66.3-40.3-88.4C17.6,12.8,9.9,5.2,0,0,10,21.9,32.9,72.5,44.4,97.1c4,8.3,12.2,29.5,21.5,29.9h.3c9.2-.4,17.5-21.6,21.4-29.9C99.1,72.5,122.1,21.9,132.1,0A48.8,48.8,0,0,0,109.8,22.8Z" fill="#780c04"/>
                </svg>
            </TweenOne>
            <TweenOne animation={this.anim2.img_2} >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox='0 0 333 333' style={{ marginLeft: '-50px', marginTop: '2.3px'}}>
                    <path d="M146,5.3c-10,21.9-33,72.5-44.5,97.1-3.9,8.4-12.2,29.8-21.5,30s-17.7-21.6-21.6-30C46.9,77.8,23.9,27.2,13.9,5.3A65.7,65.7,0,0,0,0,0C7.9,17.1,41.1,89.8,52.2,113.7c4.9,10.5,14.4,29.4,27.6,29.7h.3c13.2-.3,22.7-19.2,27.6-29.7C118.8,89.8,152,17.1,159.9,0A65.7,65.7,0,0,0,146,5.3Z" fill="#e32b16"/>
                </svg>
            </TweenOne>
            <TweenOne animation={this.anim2.img_3}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox='0 0 333 333' style={{ marginLeft: '-56.69px'}}>
                    <path d="M172.4,2.3c-7.8,17.1-41.1,89.8-52.2,113.7-4.9,10.5-14.4,29.6-27.7,29.7S69.7,126.5,64.7,116C53.6,92.1,20.4,19.4,12.5,2.3A92.5,92.5,0,0,0,0,0C4.4,9.4,48.3,105.1,58.6,127.2c4.5,9.7,15,29.4,33.7,29.5h.1a.1.1,0,0,1,.1-.1h.1c18.8-.1,29.3-19.8,33.8-29.5C136.7,105.1,180.6,9.4,185,0A97.1,97.1,0,0,0,172.4,2.3Z" fill="#f99718"/>
                </svg>
            </TweenOne>
            <TweenOne animation={this.anim2.img_4}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox='0 0 333 333'style={{ marginLeft: '-64px'}}>
                    <path d="M208.3,0a108.4,108.4,0,0,0-11.6.6c-4.4,9.5-48.3,105.2-58.6,127.2-4.5,9.8-15,29.5-33.9,29.6s-29.3-19.8-33.9-29.6C60,105.8,16.1,10.1,11.7.6A106.5,106.5,0,0,0,.2,0H0S54.9,119.3,64.2,139c5.9,12.6,16.4,29.3,39.9,29.4h.3c23.5-.1,34-16.8,39.9-29.4,9.3-19.7,64.2-139,64.2-139Z" fill="#f3d7b3"/>
                </svg>
            </TweenOne>
        

            </div>

        )
    }
}

export default Branding