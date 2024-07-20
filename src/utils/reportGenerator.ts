import { SensorData } from "@/data/sensorData";

const generateReport = (data: SensorData[]): string => {
  if (data.length === 0) {
    return "No hay datos disponibles para generar el informe.";
  }

  const latestData = data[data.length - 1];
  const avgHumidity = (
    data.reduce((sum, item) => sum + item.humidity, 0) / data.length
  ).toFixed(2);
  const avgTemperature = (
    data.reduce((sum, item) => sum + item.temperature, 0) / data.length
  ).toFixed(2);
  const avgPressure = (
    data.reduce((sum, item) => sum + item.pressure, 0) / data.length
  ).toFixed(2);
  const avgLuminosity = (
    data.reduce((sum, item) => sum + item.luminosity, 0) / data.length
  ).toFixed(2);

  return `
  Informe de Sensores:
  -------------------

  Última Lectura:
  - Fecha y Hora: ${new Date(latestData.timestamp).toLocaleString()}
  - Humedad: ${latestData.humidity.toFixed(2)}%
  - Temperatura: ${latestData.temperature.toFixed(2)}°C
  - Presión: ${latestData.pressure.toFixed(2)} hPa
  - Luminosidad: ${latestData.luminosity.toFixed(2)} lux

  Promedios:
  - Humedad: ${avgHumidity}%
  - Temperatura: ${avgTemperature}°C
  - Presión: ${avgPressure} hPa
  - Luminosidad: ${avgLuminosity} lux

  Análisis:
  - La humedad promedio es ${avgHumidity}%.
  - La temperatura promedio es ${avgTemperature}°C.
  - La presión promedio es ${avgPressure} hPa.
  - La luminosidad promedio es ${avgLuminosity} lux.
  `;
};

export default generateReport;
