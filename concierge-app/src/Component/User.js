import React, { Component } from 'react';
import Texty from 'rc-texty';

class User extends Component {
    render() {
        return (
            <div className='shape tile_1st'>
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

export default User;