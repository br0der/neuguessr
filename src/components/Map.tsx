import "mapbox-gl/dist/mapbox-gl.css"

import ReactMapGl, {
    Layer,
    Marker,
    NavigationControl,
    Source,
  } from "react-map-gl";
import { useState } from "react";
import mapboxgl from "mapbox-gl";

const TOKEN = process.env.REACT_APP_TOKEN

export const Map = () => {
    const [viewPort, setViewPort] = useState({
        latitude: 28.6448,
        longitude: 77.216,
        zoom: 6
    });
    mapboxgl.accessToken = 'pk.eyJ1IjoiYnJvZGVyIiwiYSI6ImNsdjAydnA4OTFpYnUyam53aGttdTY2YXEifQ.RbaS01yNmJsVRsCKgpEP2A';
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 9, // starting zoom
    });

    return (
        <>
        <div id='map' style={{width: "400px", height: "300px;"}}></div>
        </>
    );
};