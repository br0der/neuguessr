'use client'
import { useEffect, useRef, useState } from 'react';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
// import Map1 from './Map1'
function DualMap() {
  const map1Container = useRef();
  // const [map1Object, setMap1Object] = useState(null);

  return (
    <div className="flex h-[100vh] gap-[2px] bg-white/70" >
      <div className='relative w-1/2   border border-transparent'>
        <div id="map"></div>
        <script type="module" src="./main.js"></script>
      </div>
    </div>
  );
}
export default DualMap;