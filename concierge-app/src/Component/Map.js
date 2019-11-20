import React, { Component, useState } from 'react'
import ReactMapboxGl, { Marker } from 'react-map-gl'
import DeckGL, { GeoJsonLayer } from "deck.gl";
import Geocoder from "react-map-gl-geocoder";
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'

import { FaMapPin } from 'react-icons/fa';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiamhldHBhdGVsIiwiYSI6ImNrMzM4ODEydjBzMXEzbXBtMHl4bGoxeHYifQ.b4wJbq3kJO2nk1xKnM_UqA';

class Map extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            viewport: {
                latitude: 34.05223,
                longitude: -118.24368,
                height: 500,
                width: 600,
                zoom: 10
            },
            searchResultLayer: null
        }
    }

    mapRef = React.createRef();
    componentDidMount() {
        window.addEventListener("resize", this.resize);
        this.resize();
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.resize);
    }

    resize = () => {
        this.handleViewportChange({
            width: window.innerWidth,
            height: window.innerHeight
        });
    };
    handleViewportChange = viewport => {
        this.setState({
            viewport: { ...this.state.viewport, ...viewport }
        });
    };

    handleGeocoderViewportChange = viewport => {
        const geocoderDefaultOverrides = { transitionDuration: 1000 };

        return this.handleViewportChange({
            ...viewport,
            ...geocoderDefaultOverrides
        });
    };

    handleOnResult = event => {
        this.setState({
            searchResultLayer: new GeoJsonLayer({
                id: "mapSearch-result",
                data: event.result.geometry,
                getFillColor: [0, 0, 0, 428],
                getRadius: 1000,
                pointRadiusMinPixels: 10,
                pointRadiusMaxPixels: 10
            })
        });
    };


    render() {
        const { viewport, searchResultLayer } = this.state;

        return (
            <div>
                <div className="compo_map">

                    <ReactMapboxGl

                        ref={this.mapRef}
                        {...viewport}
                        onViewportChange={this.handleViewportChange}
                        mapStyle='mapbox://styles/jhetpatel/ck33njsbn1u0v1csbd25lwrhr'
                        mapboxApiAccessToken={MAPBOX_TOKEN}
                    >

                        <Geocoder
                            mapRef={this.mapRef}
                            onResult={this.handleOnResult}
                            onViewportChange={this.handleGeocoderViewportChange}
                            mapboxApiAccessToken={MAPBOX_TOKEN}
                            position="top-left"
                        />
                        <DeckGL {...viewport} layers={[searchResultLayer]} />

                        <Marker latitude={viewport.latitude} longitude={viewport.longitude} offsetLeft={-20} offsetTop={-10}>
                            <FaMapPin src={FaMapPin} alt='You are here' fontSize="2em"  color="red"/>
                        </Marker>
                    </ReactMapboxGl>

                </div>

            </div>

        )

    }

}

export default Map;
