type SensorData = {
  timestamp: string;
  humidity: number;
  temperature: number;
  pressure: number;
  luminosity: number;
};

const generateRandomData = () => {
  const data: SensorData[] = [];
  const now = new Date();

  for (let i = 0; i < 20; i++) {
    const timestamp = new Date(now.getTime() - i * 60000).toISOString(); // Datos cada minuto
    const humidity = Math.random() * 100;
    const temperature = Math.random() * 35;
    const pressure = 950 + Math.random() * 100;
    const luminosity = Math.random() * 1000;

    data.push({ timestamp, humidity, temperature, pressure, luminosity });
  }

  return data.reverse(); // Ordenar datos por tiempo
};

const getDataForZone = (zone: string): SensorData[] => {
  return generateRandomData();
};

const checkAlerts = (data: SensorData[]): string[] => {
  const alerts: string[] = [];
  const latestData = data[data.length - 1];

  // Condiciones menos estrictas para probar alertas
  if (
    latestData.humidity > 50 &&
    latestData.temperature >= 20 &&
    latestData.temperature <= 35 &&
    latestData.luminosity > 500 &&
    latestData.pressure < 1050
  ) {
    alerts.push(
      `Alerta de plaga en zona debido a alta humedad, temperatura moderada, alta luminosidad y baja presión. Hora: ${latestData.timestamp}`
    );
  }

  return alerts;
};

export { getDataForZone, checkAlerts };
