import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>PALTA<span>BOT</span></div>
      <ul className={styles.navLinks}>
        <li>Nosotros</li>
        <li>Software</li>
        <li>Alianzas</li>
        <li>Testimonios</li>
        <li>Blog</li>
        <li className={styles.contactButton}>+51 987 654 321</li>
      </ul>
    </nav>
  );
}