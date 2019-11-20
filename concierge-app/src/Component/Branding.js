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
        const animation = {

            rotateY: 360,
            origin: 'center center',
            yoyo: true,
            opacity: 1,

        }
        this.animate = {
            img_1: [
                {
                    ...animation, duration: 3100
                },
                { opacity: 0 }
            ],

            img_2: [
                {
                    ...animation, delay: 300, duration: 3000
                },
                { opacity: 0 }
            ],
            img_3: [
                {
                    ...animation, delay: 400, duration: 2000
                },
                { opacity: 0 }
            ],
            img_4: [
                { ...animation, delay: 500, duration: 1000 },
                { opacity: 0 }
            ],
            img_5: [
                { opacity: 0.4 },
                { ...animation, delay: 700, duration: 3000 },
                { opacity: 1 }
            ],

        }
        return (
            <div className="logo">
                <TweenOne animation={this.animate.img_1} style={{ marginLeft: '-225px' }}>
                    <img src={vv_1} height='180.4em' />

                </TweenOne>
                <TweenOne animation={this.animate.img_2} >
                    <img src={vv_2} height='180.6em' />

                </TweenOne>
                <TweenOne animation={this.animate.img_3}>
                    <img src={vv_3} height='183em' />
                </TweenOne>
                <TweenOne animation={this.animate.img_4}>
                    <img src={vv_4} height='183em' />
                </TweenOne>
                <TweenOne animation={this.animate.img_5}>
                    <img src={logo} height='183.8em' alt="logo" />
                </TweenOne>

            </div>

        )
    }
}

export default Branding