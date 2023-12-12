import React from "react";
import './SexualOrientationGraphic.css';
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Title,
  Legend,
  Filler
);

const SexualOrientationGraphic = () => {
    return(
        <>
            <Line />
        </>
    );
};


export { SexualOrientationGraphic };
