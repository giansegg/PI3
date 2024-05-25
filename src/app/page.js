import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.title}>PALTA<span className={styles.bold}>BOT</span></h1>
          <p className={styles.description}>¡Descubre cómo podemos llevar tu producción de palta al siguiente nivel!</p>
          <button className={styles.registerButton}>REGÍSTRATE</button>
          <div className={styles.heroImages}>

          </div>
        </section>

        <section className={styles.features}>
          <h2>¿QUÉ ES PALTA<span className={styles.bold}>BOT</span>?</h2>
          <p>PaltaBot te ayudara a recopilar datos sobre la zona en la que planeas cultivar el “oro” verde, nosotros nos encargamos de darte los datos necesarios e importantes para el desarrollo correcto de tu cultivo para que tu puedas tomar mejores decisiones con la información obtenida.</p>
          <div className={styles.featureCards}row>
            <div className={styles.featureCard}>
              <h3>Siembra</h3>
              <p>(1er paso)</p>
              <div className={styles.heroImage}><Image src="/images/harvest.png" alt="Image 2" width={100} height={100} /></div>

              <button>VER MÁS</button>
            </div>
            <div className={styles.featureCard}>
              <h3>Analiza</h3>
              <p>(2do paso)</p>
              <div className={styles.heroImage}><Image src="/images/agriculture.png" alt="Image 1" width={100} height={100} /></div>

              <button>VER MÁS</button>
            </div>
            <div className={styles.featureCard}>
              <h3>Potencia</h3>
              <p>(3er paso)</p>
              <div className={styles.heroImage}><Image src="/images/lightning-electric-energy.png" alt="Image 3" width={100} height={100} /></div>

              <button>VER MÁS</button>
            </div>
            <div className={styles.featureCard}>
              <h3>Cultiva</h3>
              <p>(4to paso)</p>
              <div className={styles.heroImage}><Image src="/images/tractor.png" alt="Image 3" width={100} height={100} /></div>

              <button>VER MÁS</button>
            </div>
          </div>
        </section>

        <section className={styles.contact}>
          <h2>CONTACTANOS</h2>
          <ContactForm />
        </section>
      </main>

      <footer className={styles.footer}>
        <p>Derechos reservados por PaltaBot</p>
      </footer>
    </div>
  );
}
