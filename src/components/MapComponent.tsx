// src/components/MapComponent.tsx
import React, { useEffect, useRef } from "react";
import mapboxgl, { GeoJSONSourceRaw } from "mapbox-gl";

interface MovingObject {
  id: number;
  name: string;
  coordinates: number[];
}

const MapComponent: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null);

  const movingObjects: MovingObject[] = [
    // Define your moving objects here
  ];

  useEffect(() => {
    mapboxgl.accessToken = "pk.eyJ1IjoiYnJvZGVyIiwiYSI6ImNsdjAydnA4OTFpYnUyam53aGttdTY2YXEifQ.RbaS01yNmJsVRsCKgpEP2A";

    if (mapContainer.current) {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/broder/clv02zzsz00zu01nrgbirc6w3",
        center: [-71.08829, 42.34009],
        zoom: 14,
        maxZoom: 18,
        minZoom: 14,
      });

      // Add zoom controls
      map.addControl(new mapboxgl.NavigationControl(), "top-left");

      // Add your custom markers and lines here

      // Clean up on unmount
      return () => map.remove();
    }
  }, []);

  return (
    <div
      ref={mapContainer}
      style={{ width: "400px", height: "300px"}}
    />
  );
};

export default MapComponent;