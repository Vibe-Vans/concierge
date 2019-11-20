import React, { Component, useState } from 'react'
import Texty from 'rc-texty'
import { FaFly } from 'react-icons/fa';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Modal from 'react-bootstrap/modal';


class Vibe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            vibeName: props.vibe.vibe,
            show: false,
            selectedVibe: props.vibe.vibe[0].vibeName
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);

    }

    handleClose = () => { this.setState({ show: false }) };
    handleShow = () => { this.setState({ show: true }) };

    handleChange = (event) => {
        this.setState({
            selectedVibe: event.target.value
        })
    }

    render() {

        return (
            <div className="shape tile_4th" >
             <select className="select_vibe">
               { 
                this.state.vibeName.map((vibename, id) => (
                    <option key={id}  value={vibename.vibeName}>
                
                           {vibename.vibeName}
                      
                    </option>))
                }
            </select>
            
             
    

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
                            <FaFly style={{ marginTop: '95px', fontSize: '1.4rem', textAlign: 'center' }} />
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

    </div>

        )
    }

}

export default Vibe