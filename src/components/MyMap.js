import React, { useEffect, useRef } from "react";

import Feature from "ol/Feature.js";
import Map from "ol/Map.js";
import Point from "ol/geom/Point.js";
import TileJSON from "ol/source/TileJSON.js";
import VectorSource from "ol/source/Vector.js";
import View from "ol/View.js";
import { Icon, Style } from "ol/style.js";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer.js";

const MyMap = ({ apiKey }) => {
  const mapLoaded = useRef(false);
  // const updateMap = (map, lat, lon) => {};

  useEffect(() => {
    if (mapLoaded.current) return;
    mapLoaded.current = true;

    const iconFeature = new Feature({
      geometry: new Point([0, 0]),
      name: "School Bus",
    });

    const iconStyle = new Style({
      image: new Icon({
        anchor: [0.5, 46],
        anchorXUnits: "fraction",
        anchorYUnits: "pixels",
        src: "./pin.png",
      }),
    });

    iconFeature.setStyle(iconStyle);

    const vectorSource = new VectorSource({
      features: [iconFeature],
    });

    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });

    const rasterLayer = new TileLayer({
      source: new TileJSON({
        url: "https://a.tiles.mapbox.com/v3/aj.1x1-degrees.json?secure=1",
        crossOrigin: "",
      }),
    });
    
    new Map({
      layers: [rasterLayer, vectorLayer],
      target: document.getElementById("map"),
      view: new View({
        center: [0, 0],
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
