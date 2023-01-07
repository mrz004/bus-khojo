import React, { useEffect, useRef } from "react";

import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';


const MyMap = ({ apiKey }) => {
  const mapLoaded = useRef(false);
  // const updateMap = (map, lat, lon) => {};

  useEffect(() => {
    if (mapLoaded.current) return;
    mapLoaded.current = true;

    new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [16.867634, 74.570389],
        zoom: 3,
      }),
    });

    // setInterval(() => {
    // const { lat, lon } = { lat: 0, lon: 0 };
    // updateMap(map, lat, lon);
    // }, 5000);
  }, []);

  return <div id="map" style={{ width: "100%", height: "100%" }}></div>;
};

export default MyMap;
