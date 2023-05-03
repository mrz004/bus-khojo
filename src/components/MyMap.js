import React, { useEffect, useRef } from "react";
import Map from "ol/Map.js";
import OSM from "ol/source/OSM.js";
import TileLayer from "ol/layer/Tile.js";
import View from "ol/View.js";
import VectorLayer from "ol/layer/Vector.js";
import VectorSource from "ol/source/Vector.js";
import Feature from "ol/Feature.js";
import { Point } from "ol/geom.js";
import { fromLonLat } from "ol/proj";
import Style from "ol/style/Style";
import Icon from "ol/style/Icon";

const MyMap = ({ apiUrl }) => {
  const mapLoaded = useRef(false);
  const map = useRef(null);
  const marker = useRef(null);
  const cods = useRef(null);

  useEffect(() => {
    if (mapLoaded.current) return;
    mapLoaded.current = true;
    cods.current = [0, 0];
    map.current = new Map({
      target: "map",
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: cods.current,
        zoom: 8,
      }),
    });

    marker.current = new VectorLayer({
      source: new VectorSource({
        features: [
          new Feature({
            geometry: new Point(fromLonLat(cods.current)),
          }),
        ],
      }),
      style: new Style({
        image: new Icon({
          // src: "/marker.png",
          src: "https://docs.maptiler.com/openlayers/default-marker/marker-icon.png",
          anchor: [0.5, 1],
        }),
      }),
    });

    map.current.addLayer(marker.current);

    // setInterval(async () => {
    //   const response = await fetch(apiUrl + "?id=1");
    //   const cods = await response.json();
    //   marker.current.getSource().clear();
    //   marker.current.getSource().addFeature(
    //     new Feature({
    //       geometry: new Point(fromLonLat(cods.current)),
    //     })
    //   );
    //   console.log(marker.current);
    // }, 1000);
  }, []);

  return <div id="map" style={{ width: "100%", height: "100%" }} />;
};

export default MyMap;
