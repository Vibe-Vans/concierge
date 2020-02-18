import React, { Component } from 'react'
import Texty from 'rc-texty'
import Collapse from 'react-bootstrap/Collapse';

class Vibe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collapseTile: false,
            show: false,
            vibe: props.vibe.vibe,
            defaultVibe: props.vibe.vibe[0].vibeName

        }
    }

    handleClose = () => {
        this.setState({ show: false })
    };
    handleShow = () => {
        this.setState({ show: true })
    };

    handleInput = (e) => {
        console.log(e.target.textContent)
        this.setState({ defaultVibe: e.target.textContent })
    }


    showHide = (event) => {
        event.preventDefault();
        this.setState({ collapseTile: !this.state.collapseTile })
    }

    render() {

        return (

            <button
                className='shape tile_4th data-place'
                onClick={this.showHide}>

                <div className='data-place' style={{ marginTop: '75px' }}>

                    <Texty type='scaleY' mode='smooth'>
                        {'vibe: ' + this.state.defaultVibe}
                    </Texty>


                    <Collapse
                        in={this.state.collapseTile}
                        style={{ marginTop: '70px' }}
                    >
                        <div>
                            {
                                this.state.vibe.map((vibe, id) => (
                                    <div
                                        key={id}
                                        className='vibe'
                                        value={vibe.vibeName}
                                        onClick={this.handleInput}>
                                        {vibe.vibeName}
                                    </div>
                                ))
                            }
                        </div>

                    </Collapse>
                </div>

            </button>

        )
    }
}

export default Vibe