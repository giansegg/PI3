import Image from 'next/image';
import styles from '../styles/Navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Image src="/images/logooo.svg" alt="Logo" width={50} height={50} />
      <div className={styles.logo}>PALTA<span>BOT</span></div>
      <ul className={styles.navLinks}>
        <li>Nosotros</li>
        <li>Software</li>
        <li>Alianzas</li>
        <li>Testimonios</li>
        <li>Blog</li>
        <li>
          <Link href="/dashboard"> Sign In </Link>
        </li>
    
        <li className={styles.contactButton}>+51 987 654 321</li>
      </ul>
    </nav>
  );
}
