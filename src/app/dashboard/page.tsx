"use client";

import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import { useState, useEffect } from "react";
import Charts from "@/components/Charts";
import { getDataForZone } from "@/data/sensorData";

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

  useEffect(() => {
    const updateData = () => {
      setZoneData({
        "Zona 1": getDataForZone("Zona 1"),
        "Zona 2": getDataForZone("Zona 2"),
        "Zona 3": getDataForZone("Zona 3"),
        "Zona 4": getDataForZone("Zona 4"),
      });
    };

    updateData();
    const interval = setInterval(updateData, 5000); // Actualizar cada 5 segundos

    return () => clearInterval(interval);
  }, []);

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
      default:
        return <div>Sección no encontrada</div>;
    }
  };

  return (
    <div className="flex h-full bg-gray-900 text-white">
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
        </nav>
      </aside>
      <main className="flex-1 p-10 overflow-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Mis Sensores</h2>
        {renderContent()}
      </main>
    </div>
  );
}
