import React, { Component, useState } from 'react'
import ReactMapboxGl, { Marker } from 'react-map-gl'
import { FaMapPin } from 'react-icons/fa';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiamhldHBhdGVsIiwiYSI6ImNrMzM4ODEydjBzMXEzbXBtMHl4bGoxeHYifQ.b4wJbq3kJO2nk1xKnM_UqA';

class Map extends Component {

    constructor (props) {
        super(props)
        this.state= {
            viewport:{
                latitude: 33.942791,
                longitude: -118.410042,
                height: 500,
                width: 800,
                zoom: 10
            }
        }
    }
 
    
    render(){

        return (
            <div>
                <div className="compo_map">
    
                    <ReactMapboxGl
                        {...this.state.viewport}
                        latitude={33.942791}
                        longitude={-118.410042}
                        zoom={10}
                        width={500}
                        height={800}
                        bearing={20}
                        transitionDuration={200}
                        attributionControl={false}
                        mapStyle='mapbox://styles/jhetpatel/ck33njsbn1u0v1csbd25lwrhr'
                        mapboxApiAccessToken={MAPBOX_TOKEN}
                        onViewportChange={(viewport) => this.setState({ viewport })}
                    >
                        <Marker  latitude={33.942791} longitude={-118.410042} offsetLeft={-20} offsetTop={-10}>
                            <FaMapPin src={FaMapPin} alt='You are here' fontSize="2em" />
                        </Marker>
                    </ReactMapboxGl>
    
                </div>
    
            </div>
    
        )

    }
    
}

export default Map;
