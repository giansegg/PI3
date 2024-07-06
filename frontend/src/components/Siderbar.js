import styles from "../styles/Siderbar.module.css";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>PaltaBOT</div>
      <ul className={styles.navLinks}>
        <li>Mis Sensores</li>
        <li>Zonas</li>
        <li>Análisis</li>
        <li>Salir</li>
      </ul>
      <div className={styles.footer}>
        <img
          src="/images/logooo.svg"
          alt="Logo"
          className={styles.footerLogo}
        />
      </div>
    </div>
  );
}
