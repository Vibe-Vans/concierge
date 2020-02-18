import React, { Component } from 'react'
import { Connector } from 'mqtt-react'
import { userdata } from './fakeData.json'
import TweenOne from 'rc-tween-one'
import QueueAnim from 'rc-queue-anim'

// import './fonts/bf8628d2-1ae0-4645-ba3f-3ce62d8d907c.ttf'

import User from './Component/User'
import PickUp from './Component/PickUp'
import Driver from './Component/Driver'
import Vibe from './Component/Vibe'

import Branding from './Component/Branding'
import './App.scss'
import './Assets/scss/main.scss'


class App extends Component {
  constructor(props) {
    super(props)

  }
  render() {
   
   const animProps = {
      yoyo: true,
      repeat: -1,
      duration: 3000,
      ease: 'easeInQuad',
    }

    this.animate = {
      tile_1: [
        { top: '0px' },
        { y: '-15px', ...animProps },
        { y: 0, ...animProps },
      ],
      tile_2: [
        { top: '120px', delay: 20 },
        { y: '-14px', ...animProps },
        { y: 0, ...animProps },
      ],
      tile_3: [
        { top: '220px', delay: 300 },
        { y: '-12px', ...animProps },
        { y: 0, ...animProps },
      ],
      tile_4: [
        { top: '300px', delay: 400 },
        { y: '-10px', ...animProps },
        { y: 0, ...animProps },
      ],
    }
    return (
      <Connector mqttProps="http://127.0.0.1:15675/ws">
        
        <div className="container-fluid">
          <section className="sec_menu">
            <QueueAnim delay={300} className="row">
              <div className="col-12">
                <div style={{ position: 'relative', zIndex: 5 }}>
                  <User user={userdata.user} />
                </div>
              </div>

              <div className="col-12">
                <TweenOne
                  animation={this.animate.tile_2}
                  style={{ position: 'relative', zIndex: 4 }}
                >
                  <PickUp pickup={userdata} />
                </TweenOne>
              </div>

              <div className="col-12">
                <TweenOne
                  animation={this.animate.tile_3}
                  style={{ position: 'relative', zIndex: 3 }}
                >
                  <Driver driver={userdata} />
                </TweenOne>
              </div>

              <div className="col-12">
                <TweenOne
                  animation={this.animate.tile_4}
                  style={{ position: 'relative', zIndex: 2 }}
                >
                  <Vibe vibe={userdata} />
                </TweenOne>
              </div>
            </QueueAnim>
          </section>

          <section className="sec_btn">
            <button className="btn btn-primary  btn-lg">
              {userdata.action.title}
            </button>
          </section>
          <section className="sec_logo">
            <div>
              <Branding />
            </div>
          </section>
        </div>
      </Connector>
    )
  }
}

export default App
