// src/components/MapComponent.tsx
import React, { useEffect, useRef } from "react";
import mapboxgl, { GeoJSONSourceRaw, Marker, NavigationControl, Point } from "mapbox-gl";
import { useState } from "react";
import { api } from "~/utils/api";
import { useSession } from "next-auth/react";

interface MovingObject {
    id: number;
    name: string;
    coordinates: number[];
}


let marker: Marker | null;
marker = null;

const MapComponent: React.FC = () => {
    const mapContainer = useRef<HTMLDivElement>(null);
    
    const { data: sessionData } = useSession();

    const editMarker = api.guess.create.useMutation({});
    const test = api.post.hello.useQuery(
        { text: "brady" }
    );

    useEffect(() => {
        mapboxgl.accessToken = "pk.eyJ1IjoiYnJvZGVyIiwiYSI6ImNsdjAydnA4OTFpYnUyam53aGttdTY2YXEifQ.RbaS01yNmJsVRsCKgpEP2A";

        if (mapContainer.current) {
            

            const bounds = [
                [-71, 42], // Southwest coordinates
                [-72, 43] // Northeast coordinates
            ];
        
            const map = new mapboxgl.Map({
                container: mapContainer.current,
                style: "mapbox://styles/broder/clv02zzsz00zu01nrgbirc6w3",
                center: [-71.08829, 42.34009],
                zoom: 14,
                maxZoom: 18,
                minZoom: 14,
            });
            const control = new NavigationControl({
                showZoom: false,
                showCompass: false
            });
            map.addControl(control, 'top-right');

            map.on('click', (e) => {
                if (marker != null) {
                    marker.remove();
                }
                var element = document.querySelector("#guess");
                element?.classList.remove("btn-outline");
                marker = new mapboxgl.Marker({
                    color: "#FF0000",
                    scale: 0.5
                })
                marker.setLngLat([e.lngLat.lng, e.lngLat.lat])
                marker.addTo(map);
                console.log(marker)
            })

            // Clean up on unmount
            return () => map.remove();
        }
    }, []);

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <div
                    ref={mapContainer}
                    style={{ width: "400px", height: "300px" }}
                />
            </figure>
            <div className="card-body">
                <button 
                    id="guess" 
                    className="btn btn-outline btn-primary"
                    onClick={
                        () => {
                            if (marker == null) {
                                console.log(marker)
                                console.log("marker not found")
                            }
                            else {
                                console.log(marker?.getLngLat().lat + " " + marker?.getLngLat().lng)
                                // api.guess.create.useMutation({}).mutate({
                                //     challenge: "1",
                                //     latitude: marker?.getLngLat().lat,
                                //     longitude: marker?.getLngLat().lng
                                // })} 
                                console.log(test.data?.greeting);
                                editMarker.mutate({
                                    challenge: "1",
                                    latitude: marker?.getLngLat().lat,
                                    longitude: marker?.getLngLat().lng, 
                                })
                            }
                        }}
                >Guess!</button>
            </div>
        </div>
    );
};

export default MapComponent;