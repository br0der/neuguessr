// MapComponent.js
import React, { useState, useEffect, useRef } from 'react';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import 'ol/ol.css';

function MapC() {
    useEffect(() => {
        const osmLayer = new TileLayer({
            preload: Infinity,
            source: new OSM(),
        })

        const map = new Map({
            target: "map",
            layers: [osmLayer],
            view: new View({
                center: [71, 40],
                zoom: 8,
            }),
        });
      return () => map.setTarget(undefined)
    }, []);

    return (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=0.5" />
            <div style={{height:'300px',width:'400px'}} id="map"/>
        </>
    );
}

export default MapC;