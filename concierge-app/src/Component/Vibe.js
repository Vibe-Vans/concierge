import React, { Component, useState } from 'react'
import Texty from 'rc-texty'
import { GiLightBulb } from 'react-icons/gi';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button'

class Vibe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collapseTile: false,
            show: false,
            vibe: props.vibe.vibe,
            defaultVibe: props.vibe.vibe[0].vibeName

        }
        this.handleInput = this.handleInput.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.showHide = this.showHide.bind(this);

    }

    handleClose = () => {
        this.setState({ show: false })
    };
    handleShow = () => {
        this.setState({ show: true })
    };

    handleInput = (e) => {
        console.log(e.target.textContent)
        this.setState({defaultVibe: e.target.textContent})
    }


   showHide = (event) => {
    event.preventDefault();
        this.setState({ collapseTile: !this.state.collapseTile})
    }

    render() {

        return (
          
            <button
                className='shape tile_4th data-place'
                onClick={this.showHide}>

                <div className='data-place' style={{marginTop:'75px'}}>

                    <Texty type='scaleY' mode='smooth'>
                         { 'vibe: '+ this.state.defaultVibe}
                    </Texty>
         

                <Collapse
                    in={this.state.collapseTile}
                    style={{marginTop:'70px'}}
                   >
                        <div>
                            {
                                this.state.vibe.map((vibe,id) => (
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

                {/* <button className='shape tile_4th' onClick={this.handleShow}>
                    <div className="data_place">

                        <Texty
                            type='scaleY'
                            mode='smooth'
                            style={{ fontSize: '1.2rem', marginBottom: '15px' }}>
                            {'vibe: ' + this.state.selectedVibe}
                        </Texty>
                    </div>

                    <div className='shape subtile'>
                        <div variant="outline-none" >
                            <GiLightBulb  style={{ marginTop: '95px', fontSize: '1.4rem', textAlign: 'center' }} />
                        </div >

                    </div>
                </button>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Select vibe</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <div>
                            {
                                this.state.vibeName.map((vibename, id) => (
                                    <div key={id} className='vibe'>
                                        <input
                                            type="radio"
                                            name="viebeRadio"
                                            id="radio`${id}`"
                                            checked={this.state.selectedVibe === this.state.vibeName[vibename.id].vibeName}
                                            value={vibename.vibeName}
                                            onChange={this.handleChange} />
                                        <label>
                                            <Texty
                                                type='mask-bottom'
                                                mode='smooth'
                                            >{vibename.vibeName}
                                            </Texty>
                                        </label>
                                    </div>
                                ))
                            }
                        </div>
                    </Modal.Body>

                </Modal> */} 
                
        </button>

        )
    }
}

export default Vibe
