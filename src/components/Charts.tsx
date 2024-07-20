import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useState, useEffect } from "react";
import { getDataForZone } from "@/data/SensorData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type SensorData = {
  timestamp: string;
  humidity: number;
  temperature: number;
  pressure: number;
  luminosity: number;
};

const Charts = ({ zone }: { zone: string }) => {
  const [data, setData] = useState<SensorData[]>([]);

  useEffect(() => {
    const sensorData = getDataForZone(zone);
    setData(sensorData);

    const interval = setInterval(() => {
      const newSensorData = getDataForZone(zone);
      setData(newSensorData);
    }, 5000); // Actualizar cada 5 segundos

    return () => clearInterval(interval);
  }, [zone]);

  const lineData = (
    dataField: keyof SensorData,
    label: string,
    color: string
  ) => ({
    labels: data.map((d) => new Date(d.timestamp).toLocaleTimeString()),
    datasets: [
      {
        label,
        data: data.map((d) => d[dataField]),
        borderColor: color,
        backgroundColor: color,
        fill: false,
      },
    ],
  });

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="charts-container">
      <h2 className="text-2xl font-bold mb-4">
        Análisis de Datos de Sensores - {zone}
      </h2>
      <div className="chart mb-8" style={{ height: "300px" }}>
        <h3 className="text-xl font-semibold mb-2">Humedad</h3>
        <Line
          data={lineData("humidity", "Humedad (%)", "rgba(75, 192, 192, 1)")}
          options={chartOptions}
        />
      </div>
      <div className="chart mb-8" style={{ height: "300px" }}>
        <h3 className="text-xl font-semibold mb-2">Temperatura</h3>
        <Line
          data={lineData(
            "temperature",
            "Temperatura (°C)",
            "rgba(255, 99, 132, 1)"
          )}
          options={chartOptions}
        />
      </div>
      <div className="chart mb-8" style={{ height: "300px" }}>
        <h3 className="text-xl font-semibold mb-2">Presión</h3>
        <Line
          data={lineData("pressure", "Presión (hPa)", "rgba(54, 162, 235, 1)")}
          options={chartOptions}
        />
      </div>
      <div className="chart mb-8" style={{ height: "300px" }}>
        <h3 className="text-xl font-semibold mb-2">Luminosidad</h3>
        <Line
          data={lineData(
            "luminosity",
            "Luminosidad (lux)",
            "rgba(255, 206, 86, 1)"
          )}
          options={chartOptions}
        />
      </div>
    </div>
  );
};

export default Charts;
