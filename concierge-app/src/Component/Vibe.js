import React, { Component, useState } from 'react'
import Texty from 'rc-texty'
import { FaArrowRight } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
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
        console.log(event.target.value)
        this.setState({
            selectedVibe: event.target.value
        })
    }

    render() {

        return (
            <div className='shape tile_4th'>
                <div className="data_place">

                    <Texty
                        type='scaleY'
                        mode='smooth'
                        style={{ fontSize: '1.2rem', marginBottom: '15px' }}>
                        {'vibe: ' + this.state.selectedVibe}
                    </Texty>
                </div>

                <div className='shape subtile'>
                    <Button variant="outline-none" onClick={this.handleShow}>
                        <FaArrowRight style={{ marginTop: '95px', fontSize: '1.4rem', textAlign: 'center' }} />
                    </Button>

                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Select vibe</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <div className='row'>
                                {
                                    this.state.vibeName.map((vibename, id) => (
                                        <div key={id} className='col-12 vibe'>
                                            <input
                                                type="radio"
                                                name="viebeRadio"
                                                id="radio`${id}`"
                                                checked={this.state.selectedVibe === this.state.vibeName[vibename.id].vibeName}
                                                value={vibename.vibeName}
                                                onChange={this.handleChange} />
                                            <label>{vibename.vibeName}</label>
                                        </div>
                                    ))
                                }
                            </div>
                        </Modal.Body>

                    </Modal>

                </div>

            </div>

        )
    }

}

export default Vibe