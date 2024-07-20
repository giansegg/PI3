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

export const getDataForZone = (zone: string) => {
  return generateRandomData();
};
