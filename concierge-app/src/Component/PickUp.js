import React, { useState } from 'react'
import Texty from 'rc-texty';
// import Map from './Map';
import MapGoogle from './MapGoogle'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/modal';
import { FaMapMarked } from 'react-icons/fa';

const PickUp = (props) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <div className='shape tile_2nd'>

            <div className="data_place">
                <Texty
                    type='scaleBig'
                    mode='smooth'
                    style={{ fontSize: '1.8rem', marginBottom: '15px' }}>
                    {props.pickup.pickup.address1}
                </Texty>

                <Texty
                    type='left'
                    mode='smooth'
                    style={{ fontSize: '1.5rem', marginBottom: '15px' }}>
                    {props.pickup.pickup.city + ' ' + props.pickup.pickup.state}
                </Texty>

            </div>
            <div className='shape subtile'>
                <Button variant="outline-none" onClick={handleShow}>
                    <FaMapMarked style={{ marginTop: '65px', fontSize: '2.2rem', textAlign: 'center' }} />
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{props.pickup.pickup.city + ' ' + props.pickup.pickup.state}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        {/* <Map lat={props.pickup.pickup.latitude} log={props.pickup.pickup.longitude} /> */}
                        <MapGoogle lat={props.pickup.pickup.latitude} lng={props.pickup.pickup.longitude}/>
                    </Modal.Body>

                </Modal>

            </div>
        </div>


    )

}

export default PickUp