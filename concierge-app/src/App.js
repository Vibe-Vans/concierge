import React, { Component } from 'react';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';

import './fonts/bf8628d2-1ae0-4645-ba3f-3ce62d8d907c.ttf';


import User from './Component/User'
import PickUp from './Component/PickUp';
import Driver from './Component/Driver';
import Vibe from './Component/Vibe';

import Branding from './Component/Branding';
import './App.scss';
import './Assets/scss/main.scss'
import { data } from './fakeData.json'

class App extends Component {

  render() {

    const animProps = {
      yoyo: true,
      repeat: -1,
      duration: 3000,
      ease: 'easeInQuad',
    }

    this.animate = {
      tile_1: [
        { top: '0px'},
        { y: '-15px', ...animProps },
        { y: 0, ...animProps }

      ],
      tile_2: [
        { top: '120px', delay: 20 },
        { y: '-14px', ...animProps },
        { y: 0, ...animProps },
      ],
      tile_3: [
        { top: '220px', delay: 300 },
        { y: '-12px', ...animProps },
        { y: 0, ...animProps }
      ],
      tile_4: [
        { top: '300px', delay: 400 },
        { y: '-10px', ...animProps },
        { y: 0, ...animProps }
      ]
    }
    return (
      <div className='container-fluid'>
        <section className="sec_menu"> 
        <QueueAnim  delay={300} className="row">
       
          <div className="col-12">
            <TweenOne animation={this.animate.tile_1} style={{ position: 'relative', zIndex: 5 }}>
              <User user={
                data.user
              } />
            </TweenOne>
          </div>

          <div className="col-12">
            <TweenOne animation={this.animate.tile_2} style={{ position: 'relative', zIndex: 4 }}>
              <PickUp pickup={data} />
            </TweenOne>
          </div>

          <div className="col-12">
            <TweenOne animation={this.animate.tile_3} style={{ position: 'relative', zIndex: 3 }}>
              <Driver driver={data} />
            </TweenOne>

          </div>

          <div className="col-12">
            <TweenOne animation={this.animate.tile_4} style={{ position: 'relative', zIndex: 2 }}>
              <Vibe vibe={data} />
            </TweenOne>
          </div>
        </QueueAnim>
        </section>

        <section className="sec_btn">
          <button className='btn btn-primary  btn-lg'>{data.action.title}</button>
 
        </section>
        <section className="sec_logo">
        <div >
            <Branding />
        </div>
        
          
        </section>
        
        

{/* 
        <div className='row' style={{ marginTop: '600px' }}>
          <div className="col-12">
            <button className='btn btn-primary btn-lg'>Button</button>

          </div> */}
      
       

      </div>
    )

  }

}

export default App;

