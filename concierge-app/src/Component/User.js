import React, { Component } from 'react';
import Texty from 'rc-texty';
import { subscribe } from 'mqtt-react'

class User extends Component {
    render() {

        const {user, data} = this.props
        console.log(`...${data[0]}`)

        return (
            <div className='shape tile_1st'>
                <div className="data_place">
                    <Texty
                        type='scaleBig'
                        mode='random'
                        style={{ fontSize: '3.7rem', marginBottom: '25px' }}>
                        {user.name}
                    </Texty>

                    <Texty
                        type='mask-bottom'
                        mode='random'>{user.message}
                    </Texty>
                </div>

            </div>
        );
    }
}
User = subscribe({
    topic: 'space/input'
  })(User)
export default User;