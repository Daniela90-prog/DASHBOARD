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

    const sexuality = ["Heterosexual", "Bisexual", "Lesbiana", "Gay", "Sin información disposnible", "NS / NR"];
    const quantity = [50060, 2020, 1525, 703, 192, 58];
    const data = {
        labels: sexuality,
        datasets:[
            {
                Label: "Número de casos totales",
                data: quantity,
                borderColor: ["rgba(49, 140, 231, 1)"],
                borderWidth: 2,
                backgroundColor: ["rgba(49, 140, 231, 1)"],
            },
        ],
    }
    return(
        <div className="sexualOrientationGraphic">
            {/* Graphic container*/}
            <div className="sexualOrientationGraphicContainer">
                {/* Graphic */}
                <Line data={data} />
            </div>
        </div>
    );
};


export { SexualOrientationGraphic };
