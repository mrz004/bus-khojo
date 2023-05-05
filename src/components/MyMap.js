import React, { useEffect, useRef } from "react";
import Map from "ol/Map.js";
import OSM from "ol/source/OSM.js";
import TileLayer from "ol/layer/Tile.js";
import View from "ol/View.js";
import VectorLayer from "ol/layer/Vector.js";
import VectorSource from "ol/source/Vector.js";
import Feature from "ol/Feature.js";
import { Point } from "ol/geom.js";
import { useGeographic } from "ol/proj";
import Style from "ol/style/Style";
import Icon from "ol/style/Icon";

const MyMap = ({ apiUrl }) => {
  const mapLoaded = useRef(false);
  const map = useRef(null);
  const marker = useRef(null);
  const collegCods = [74.63, 16.86];
  const oldCods = useRef(collegCods);

  useGeographic();

  useEffect(() => {
    if (mapLoaded.current) return;
    mapLoaded.current = true;

    map.current = new Map({
      target: "map",
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        // center: [0, 0],
        center: collegCods,
        zoom: 13,
      }),
    });

    marker.current = new VectorLayer({
      source: new VectorSource({
        features: [
          new Feature({
            // geometry: new Point(fromLonLat(collegCods)),
            geometry: new Point(oldCods.current),
          }),
        ],
      }),
      style: new Style({
        image: new Icon({
          src: "/marker.png",
          anchor: [0.5, 1],
        }),
      }),
    });

    // console.log(marker.current);

    map.current.addLayer(marker.current);

    setInterval(async () => {
      const response = await fetch(apiUrl + "&id=1");
      const cods = await response.json();
      console.log(cods);

      if (
        Math.abs(oldCods.current[0] - cods[0]) > 3 ||
        Math.abs(oldCods.current[1] - cods[1]) > 3
      ) {
        oldCods.current = cods;
        map.current.setView(
          new View({
            center: cods,
            zoom: 13,
          })
        );
      }

      marker.current.getSource().clear();
      marker.current.getSource().addFeature(
        new Feature({
          geometry: new Point(cods),
        })
      );
      // console.log(marker.current);
    }, 2000);
  });

  return <div id="map" style={{ width: "100%", height: "100%" }} />;
};

export default MyMap;
