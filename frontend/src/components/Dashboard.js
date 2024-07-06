import styles from "../styles/Dashboard.module.css";

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <h2>Mis Sensores</h2>

      <div className={styles.cards}>
        <div className={styles.card}>
          <h3>Zona 1</h3>
          <p>
            Humedad: Crítica
            <br />
            <br />
            Temperatura: 30°C
            <br />
            <br />
            Luminosidad: 1000 lux
            <br />
            <br />
            Presion:1000 hPa
            <br />
            <br />
          </p>
        </div>
        <div className={styles.card}>
          <h3>Zona 2</h3>
          <p>
            Humedad: Crítica
            <br />
            <br />
            Temperatura: 30°C
            <br />
            <br />
            Luminosidad: 1000 lux
            <br />
            <br />
            Presion:1000 hPa
            <br />
            <br />
          </p>
        </div>
        <div className={styles.card}>
          <h3>Zona 3</h3>
          <p>
            Humedad: Crítica
            <br />
            <br />
            Temperatura: 30°C
            <br />
            <br />
            Luminosidad: 1000 lux
            <br />
            <br />
            Presion:1000 hPa
            <br />
            <br />
          </p>
        </div>
        <div className={styles.card}>
          <h3>Zona 4</h3>
          <p>
            Humedad: Crítica
            <br />
            <br />
            Temperatura: 30°C
            <br />
            <br />
            Luminosidad: 1000 lux
            <br />
            <br />
            Presion:1000 hPa
            <br />
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}
