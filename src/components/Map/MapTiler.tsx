import React from 'react'
import { MapContainer, TileLayer } from "react-leaflet";
import style from '../../styles/Home.module.css';
import 'leaflet/dist/leaflet.css';

function MapTiler() {
    return (
        <MapContainer className={style.map} center={[42.33940,-71.08872]} zoom={16} scrollWheelZoom={true}>
            <TileLayer
                url='https://api.maptiler.com/maps/winter-v2/{z}/{x}/{y}.png?key=0tsiIVVlcnXll4AcNQSd'
                attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
            ></TileLayer>
        </MapContainer>
    )
}

export default MapTiler
