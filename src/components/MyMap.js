import React, { useEffect, useRef } from "react";
import Map from "ol/Map.js";
import View from "ol/View.js";
import OSM from "ol/source/OSM.js";
import TileLayer from "ol/layer/Tile.js";

const MyMap = () => {

  const loadMap = useRef(true);

  useEffect(() => {
    if (loadMap.current) {
      loadMap.current = false;
      console.log("useEffect was run!");
      new Map({
        layers: [new TileLayer({ source: new OSM() })],
        view: new View({
          center: [0, 0],
          zoom: 2,
        }),
        target: "map",
      });
    }
  }, []);
  return <div id="map" style={{ width: "90vh", height: "90vh" }}></div>;
};

export default MyMap;
