import React, { Component } from 'react';
import Texty from 'rc-texty';
import {subscribe} from 'mqtt-react'

class User extends Component {
    render() {
        const {data} = this.props
        console.log('mqtt...dta', data)
        return (
            <div className='shape tile_1st' style={{background:`${data}`}}>
                <div className="data_place">
                    <Texty
                        type='scaleBig'
                        mode='random'
                        style={{ fontSize: '3.7rem', marginBottom: '25px' }}>
                        {this.props.user.name}
                    </Texty>

                    <Texty
                        type='mask-bottom'
                        mode='random'>{this.props.user.message}
                    </Texty>
                </div>

            </div>
        );
    }
}


User = subscribe({
    topic:'@demo/color'
  })(User)
export default User;