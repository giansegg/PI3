"use client";

import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import Link from "next/link";

export default function Dashboard() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    if (typeof window !== "undefined") {
      window.location.href = "/login";
    }
    return null;
  }

  return (
    <div className="flex h-full bg-gray-800 text-white">
      <aside className="w-64 bg-gray-900 p-4 flex flex-col items-center h-full">
        <div className="flex flex-row gap-5 items-center mb-8">
          <Image src="/logo.svg" alt="PaltaBot Logo" width={50} height={50} />
          <strong>PaltaBot</strong>
        </div>
        <nav className="flex flex-col gap-4">
          <Link href="/devices" className="hover:text-green-500">
            Mis Dispositivos
          </Link>
          <Link href="/zones" className="hover:text-green-500">
            Zonas
          </Link>
          <Link href="/history" className="hover:text-green-500">
            Historial
          </Link>
          <Link href="/graphs" className="hover:text-green-500">
            Gráficas
          </Link>
        </nav>
      </aside>
      <main className="flex-1 p-10 overflow-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Mis Sensores</h2>
        <div className="flex flex-wrap justify-evenly items-center gap-5">
          <div className="bg-gray-700 p-6 rounded-lg text-center transition-transform duration-300 min-h-[400px] min-w-[300px] hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4">Zona 1</h3>
            <p className="mt-12 flex flex-col justify-center text-center leading-loose">
              Humedad: <span className="font-bold text-red-500">Crítica</span>
              <br />
              Temperatura: <span className="font-bold">30°C</span>
              <br />
              Luminosidad: <span className="font-bold">1000 lux</span>
              <br />
              Presión: <span className="font-bold">1000 hPa</span>
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg text-center transition-transform duration-300 min-h-[400px] min-w-[300px] hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4">Zona 2</h3>
            <p className="mt-12 flex flex-col justify-center text-center leading-loose">
              Humedad: <span className="font-bold text-red-500">Crítica</span>
              <br />
              Temperatura: <span className="font-bold">30°C</span>
              <br />
              Luminosidad: <span className="font-bold">1000 lux</span>
              <br />
              Presión: <span className="font-bold">1000 hPa</span>
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg text-center transition-transform duration-300 min-h-[400px] min-w-[300px] hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4">Zona 3</h3>
            <p className="mt-12 flex flex-col justify-center text-center leading-loose">
              Humedad: <span className="font-bold text-red-500">Crítica</span>
              <br />
              Temperatura: <span className="font-bold">30°C</span>
              <br />
              Luminosidad: <span className="font-bold">1000 lux</span>
              <br />
              Presión: <span className="font-bold">1000 hPa</span>
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg text-center transition-transform duration-300 min-h-[400px] min-w-[300px] hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4">Zona 4</h3>
            <p className="mt-12 flex flex-col justify-center text-center leading-loose">
              Humedad: <span className="font-bold text-red-500">Crítica</span>
              <br />
              Temperatura: <span className="font-bold">30°C</span>
              <br />
              Luminosidad: <span className="font-bold">1000 lux</span>
              <br />
              Presión: <span className="font-bold">1000 hPa</span>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
