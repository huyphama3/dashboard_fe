"use client";
import jsVectorMap from "jsvectormap";
import React, { useEffect } from "react";
import "../../js/us-aea-en";
import "../../js/vietnam";
const MapOne: React.FC = () => {
  useEffect(() => {
    const mapElement = document.getElementById("mapOne");

    if (!mapElement) {
      console.error("Map element not found");
      return;
    }

    const vectorMapOne = new jsVectorMap({
      selector: "#mapOne",
      map: "vietnam",
      zoomButtons: true,

      regionStyle: {
        initial: {
          fill: "#0087",
        },
        hover: {
          fillOpacity: 1,
          fill: "#FF0000",
        },
      },
      regionLabelStyle: {
        initial: {
          fontFamily: "Roboto",
          fontWeight: "semibold",
          fill: "#fff",
        },
        hover: {
          cursor: "pointer",
        },
      },

      labels: {
        regions: {
          render(code: string) {
            return code.split("-")[1];
          },
        },
      },
    });

    return () => {
      if (vectorMapOne) {
        vectorMapOne.destroy();
      } else {
        console.error("Vector map instance not found during cleanup");
      }
    };
  }, []);

  return (
    <div className="col-span- rounded-[10px] bg-white p-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card xl:col-span-7">
      <h4 className="mb-7 text-body-2xlg font-bold text-dark dark:text-white">
        Region labels
      </h4>
      <div className="h-[422px]">
        <div id="mapOne" className="mapOne map-btn"></div>
      </div>
    </div>
  );
};

export default MapOne;
