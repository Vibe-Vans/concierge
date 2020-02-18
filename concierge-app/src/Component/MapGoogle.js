import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper, Polyline } from 'google-maps-react';
import logo from "../Assets/logo.png";
import pickup from "../Assets/ic-marker-1.png";
import dropoff from "../Assets/ic-marker-2.png";

import '../Assets/scss/maps.scss'
import { connect } from "react-redux";

const GOOGLE_MAP_API_KEY = "AIzaSyBg3YpSre6FHSjquc8FqpOniPI_9ZID1Co"

class MapGoogle extends Component {

    constructor(props) {
        super(props)
        this.state = {
            markers: [],
            routes: [],
            activeMarker: {},
            showingInfoWindow: false,
            center: { lat: props.lat, lng: props.lng },
        }
        this.onMarkerClick = this.onMarkerClick.bind(this)
        this.onMapClicked = this.onMapClicked.bind(this)
    }


  

    // calculateDistance = (destination) => {

    //     console.log("destination...", destination)

    //     const { google } = this.props;
    //     const DirectionsService = new google.maps.DirectionsService();
    //     DirectionsService.route({
    //         origin: new google.maps.LatLng(this.state.center.lat, this.state.center.lng),
    //         destination: new google.maps.LatLng(destination.lat, destination.lng),
    //         travelMode: google.maps.TravelMode.DRIVING,
    //     }, (result, status) => {
    //         if (status === google.maps.DirectionsStatus.OK) {
    //             this.setState({
    //                 route: result.routes[0].overview_polyline.map(p => { return { lat: p.lat(), lng: p.lng() } })
    //             });
    //         } else {
    //             console.error(`error fetching directions ${result}`);
    //             console.log(result)
    //         }
    //     });

    // }
    componentWillMount() {

        if (this.props.startCord.lat === undefined) {

            this.setState({
                center: this.props.center,
                markers: [
                    {
                        cord: this.props.center,
                        title: "VibeVans",
                        iconUrl: logo
                    }
                ]
            })
        }
        else
            this.setState({
                center: this.props.startCord,
                markers: [
                    {
                        cord: this.props.startCord,
                        title: this.props.startAddress,
                        iconUrl: pickup
                    },
                    {
                        cord: this.props.endCord,
                        title: this.props.endAddress,
                        iconUrl: dropoff
                    }]
            })

    }


    onMarkerClick(props, marker, e) {

        this.setState({
            title: marker.title,
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        })
    }
    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };

    getMapOptions = (maps) => {
        return {
            disableDefaultUI: true,
            mapTypeControl: true,
            streetViewControl: true,
            scaleControl: true,
            rotateControl: true,
            styles: [{
                featureType: 'poi',
                elementType: 'labels',
                stylers: [{ visibility: 'on' }]
            }],
        };
    };

    render() {

        const { google} = this.props;

        const style = {
            width: '100vw',
            height: '100vh',
            marginLeft: 'auto',
            marginRight: 'auto'
        }

        // var decodePath = new google.maps.geometry.encoding.decodePath(endcoded_data)
        // console.log("DECODE... ", decodePath)

        return (
            <div>

                {/* <input id="pac-input" className="controls" type="text" placeholder="Search Box" /> */}

                <Map
                    item
                    yesIWantToUseGoogleMapApiInternals
                    xs={17}
                    google={this.props.google}
                    desc={this.props.desc}
                    zoom={14}
                    style={style}
                    options={this.getMapOptions}
                    setMapOptions
                    initialCenter={this.state.center}
                    onClick={this.onMapClicked}
                    // onReady={() => this.calculateDistance(this.props.endCord)}
                    >

                    {
                        this.state.markers.map((marker, i) => (
                            <Marker key={i}
                                onClick={this.onMarkerClick}
                                title={marker.title}

                                // name={'00000'}
                                position={marker.cord}

                                icon={{
                                    url: marker.iconUrl,
                                    anchor: new google.maps.Point(32, 32),
                                    scaledSize: new this.props.google.maps.Size(45, 35),

                                }}
                                animation={this.props.google.maps.Animation.DROP}
                            />
                        ))
                    }

                    <Polyline
                        // path={decodePath}
                        path={this.state.routes}
                        options={{
                            geodesic: true,
                            strokeColor: '#000ffd',
                            strokeOpacity: 0.8,
                            strokeWeight: 6,
                            // icons: [{
                            //         icon: 'P',
                            //         offset: "0",
                            //         repeat: "20px"
                            //     }
                            // ]
                        }}
                    // strokeColor='#000ffd'
                    // strokeOpacity={0.8}
                    // strokeWeight={6} 
                    />


                    {

                        <InfoWindow
                            marker={this.state.activeMarker}
                            visible={this.state.showingInfoWindow}>
                            <div style={{ color: 'red' }}>
                                <h4>{this.state.title}</h4>
                            </div>
                        </InfoWindow>

                    }

                </Map>
            </div>

        )
    }
}

const LoadingContainer = (props) => (
    <div>Map Loading..</div>
)

const mapStateToProps = (state) => {
    // console.log("MAPTOSTATE   ", state.mapRed.center, "  ", state.mapRed.startCord)

    return {
        center: state.mapRed.center,
        startCord: state.mapRed.startCord,
        endCord: state.mapRed.endCord,
        startAddress: state.mapRed.startAdd,
        endAddress: state.mapRed.endAdd,
        polyline: state.mapRed.polyline
    }
}

export default GoogleApiWrapper({
    // apiKey: process.envl.GOOGLE_MAP_API_KEY,
    apiKey: GOOGLE_MAP_API_KEY,
    LoadingContainer: LoadingContainer,
    mapStateToProps: mapStateToProps

})(connect(mapStateToProps, null)(MapGoogle))