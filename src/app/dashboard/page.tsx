"use client";

import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import { useState, useEffect } from "react";
import Charts from "@/components/Charts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getDataForZone, checkAlerts } from "@/data/SensorData";
import dynamic from "next/dynamic";
import generateReport from "@/utils/reportGenerator";

const Map = dynamic(() => import("@/components/Map"), { ssr: false });

type SensorData = {
  timestamp: string;
  humidity: number;
  temperature: number;
  pressure: number;
  luminosity: number;
};

export default function Dashboard() {
  const { isAuthenticated } = useAuth();
  const [selectedSection, setSelectedSection] = useState("sensors");
  const [selectedZone, setSelectedZone] = useState("Zona 1");
  const [zoneData, setZoneData] = useState<Record<string, SensorData[]>>({
    "Zona 1": [],
    "Zona 2": [],
    "Zona 3": [],
    "Zona 4": [],
  });
  const [alerts, setAlerts] = useState<
    { zone: string; alert: string; timestamp: string }[]
  >([]);

  useEffect(() => {
    const updateData = () => {
      const newZoneData = {
        "Zona 1": getDataForZone("Zona 1"),
        "Zona 2": getDataForZone("Zona 2"),
        "Zona 3": getDataForZone("Zona 3"),
        "Zona 4": getDataForZone("Zona 4"),
      };
      setZoneData(newZoneData);

      const allAlerts = [
        ...checkAlerts(newZoneData["Zona 1"]).map((alert) => ({
          zone: "Zona 1",
          alert,
          timestamp:
            newZoneData["Zona 1"][newZoneData["Zona 1"].length - 1].timestamp,
        })),
        ...checkAlerts(newZoneData["Zona 2"]).map((alert) => ({
          zone: "Zona 2",
          alert,
          timestamp:
            newZoneData["Zona 2"][newZoneData["Zona 2"].length - 1].timestamp,
        })),
        ...checkAlerts(newZoneData["Zona 3"]).map((alert) => ({
          zone: "Zona 3",
          alert,
          timestamp:
            newZoneData["Zona 3"][newZoneData["Zona 3"].length - 1].timestamp,
        })),
        ...checkAlerts(newZoneData["Zona 4"]).map((alert) => ({
          zone: "Zona 4",
          alert,
          timestamp:
            newZoneData["Zona 4"][newZoneData["Zona 4"].length - 1].timestamp,
        })),
      ];
      setAlerts(allAlerts);

      // Mostrar notificaciones por nuevas alertas
      allAlerts.forEach((alert) => {
        toast(`Nueva alerta en ${alert.zone}: ${alert.alert}`);
      });
    };

    updateData();
    const interval = setInterval(updateData, 5000); // Actualizar cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  const handleDownloadReport = () => {
    const data = zoneData[selectedZone];
    const report = generateReport(data);
    const blob = new Blob([report], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `Reporte_${selectedZone}_${new Date().toLocaleDateString()}.txt`;
    link.click();
  };

  if (!isAuthenticated) {
    if (typeof window !== "undefined") {
      window.location.href = "/login";
    }
    return null;
  }
  const renderContent = () => {
    switch (selectedSection) {
      case "sensors":
        return (
          <div>
            <h2 className="text-4xl font-bold mb-8 text-center">
              Mis Sensores
            </h2>
            <div className="flex flex-wrap justify-evenly items-center gap-5">
              {Object.entries(zoneData).map(([zone, data]) => (
                <div
                  key={zone}
                  className="bg-gray-700 p-6 rounded-lg text-center transition-transform duration-300 min-h-[300px] min-w-[300px] hover:scale-105"
                >
                  <h3 className="text-2xl font-semibold mb-4">{zone}</h3>
                  <p className="mt-12 flex flex-col justify-center text-center leading-loose">
                    Humedad:{" "}
                    <span className="font-bold text-red-500">
                      {data[data.length - 1]?.humidity.toFixed(2)}%
                    </span>
                    <br />
                    Temperatura:{" "}
                    <span className="font-bold">
                      {data[data.length - 1]?.temperature.toFixed(2)}°C
                    </span>
                    <br />
                    Luminosidad:{" "}
                    <span className="font-bold">
                      {data[data.length - 1]?.luminosity.toFixed(2)} lux
                    </span>
                    <br />
                    Presión:{" "}
                    <span className="font-bold">
                      {data[data.length - 1]?.pressure.toFixed(2)} hPa
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      case "graphs":
        return (
          <div>
            <div className="flex justify-center mb-4">
              <button
                onClick={() => setSelectedZone("Zona 1")}
                className={`px-4 py-2 mx-2 rounded ${
                  selectedZone === "Zona 1"
                    ? "bg-green-500 text-white"
                    : "bg-gray-700 text-white"
                }`}
              >
                Zona 1
              </button>
              <button
                onClick={() => setSelectedZone("Zona 2")}
                className={`px-4 py-2 mx-2 rounded ${
                  selectedZone === "Zona 2"
                    ? "bg-green-500 text-white"
                    : "bg-gray-700 text-white"
                }`}
              >
                Zona 2
              </button>
              <button
                onClick={() => setSelectedZone("Zona 3")}
                className={`px-4 py-2 mx-2 rounded ${
                  selectedZone === "Zona 3"
                    ? "bg-green-500 text-white"
                    : "bg-gray-700 text-white"
                }`}
              >
                Zona 3
              </button>
              <button
                onClick={() => setSelectedZone("Zona 4")}
                className={`px-4 py-2 mx-2 rounded ${
                  selectedZone === "Zona 4"
                    ? "bg-green-500 text-white"
                    : "bg-gray-700 text-white"
                }`}
              >
                Zona 4
              </button>
            </div>
            <Charts zone={selectedZone} />
          </div>
        );
      case "alerts":
        return (
          <div className="p-6">
            <h2 className="text-4xl font-bold mb-4 text-center">Alertas</h2>
            {alerts.length > 0 ? (
              <ul className="list-disc list-inside text-red-500">
                {alerts.map((alert, index) => (
                  <li key={index} className="mb-2 p-2 bg-red-800 rounded-lg">
                    <div className="text-white">
                      <span className="font-bold">{alert.zone}</span>:{" "}
                      {alert.alert}
                    </div>
                    <div className="text-sm text-gray-300">
                      Hora: {new Date(alert.timestamp).toLocaleTimeString()}
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-green-500 text-center">No hay alertas</p>
            )}
          </div>
        );
      case "zones":
        return (
          <div className="flex flex-col justify-center items-center p-6 h-full w-full">
            <h2 className="text-4xl font-bold mb-4 text-center">
              Mapa de Zonas
            </h2>
            <div className="w-full flex justify-center">
              <Map />
            </div>
          </div>
        );
      case "history":
        return (
          <div className="p-6">
            <h2 className="text-4xl font-bold mb-4 text-center">Historial</h2>
            <div className="flex justify-center">
              <button
                onClick={handleDownloadReport}
                className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:bg-green-600"
              >
                Descargar Informe
              </button>
            </div>
          </div>
        );
      default:
        return <div>Sección no encontrada</div>;
    }
  };

  return (
    <div className="flex h-full bg-gray-900 text-white">
      <ToastContainer />
      <aside className="w-64 bg-gray-800 p-4 flex flex-col items-center h-full">
        <div className="flex flex-row gap-5 items-center mb-8">
          <Image src="/logo.svg" alt="PaltaBot Logo" width={50} height={50} />
          <strong>PaltaBot</strong>
        </div>
        <nav className="flex flex-col gap-4">
          <button
            onClick={() => setSelectedSection("sensors")}
            className={`hover:text-green-500 ${
              selectedSection === "sensors" ? "text-green-500" : ""
            }`}
          >
            Mis Dispositivos
          </button>
          <button
            onClick={() => setSelectedSection("zones")}
            className={`hover:text-green-500 ${
              selectedSection === "zones" ? "text-green-500" : ""
            }`}
          >
            Zonas
          </button>
          <button
            onClick={() => setSelectedSection("history")}
            className={`hover:text-green-500 ${
              selectedSection === "history" ? "text-green-500" : ""
            }`}
          >
            Historial
          </button>
          <button
            onClick={() => setSelectedSection("graphs")}
            className={`hover:text-green-500 ${
              selectedSection === "graphs" ? "text-green-500" : ""
            }`}
          >
            Gráficas
          </button>
          <button
            onClick={() => setSelectedSection("alerts")}
            className={`hover:text-green-500 ${
              selectedSection === "alerts" ? "text-green-500" : ""
            }`}
          >
            Alertas
          </button>
        </nav>
      </aside>
      <main className="flex-1 p-10 overflow-auto">{renderContent()}</main>
    </div>
  );
}
