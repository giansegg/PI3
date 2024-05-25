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
          <h2 className = {styles.titletrabajar}>¿QUÉ ES PALTA<span className={styles.bold}>BOT</span>?</h2>
          <p className = {styles.fontnormalword1}>PaltaBot te ayudara a recopilar datos sobre la zona en la que planeas cultivar el “oro” verde, nosotros nos encargamos de darte los datos necesarios e importantes para el desarrollo correcto de tu cultivo para que tu puedas tomar mejores decisiones con la información obtenida.</p>
          <div className={styles.featureCards}>
            <div className={styles.featureCard}>
              <h3>Siembra</h3>
              <div className={styles.heroImage}><Image src="/images/harvest.png" alt="Image 2" width={100} height={100} /></div>
              <p>(1er paso)</p>

              <button className={styles.contactButton}>VER MÁS</button>
            </div>
            <div className={styles.featureCard}>
              <h3>Analiza</h3>
              <div className={styles.heroImage}><Image src="/images/agriculture.png" alt="Image 1" width={100} height={100} /></div>
              <p>(2do paso)</p>

              <button className={styles.contactButton} >VER MÁS</button>
            </div>
            <div className={styles.featureCard}>
              <h3>Potencia</h3>
              <div className={styles.heroImage}><Image src="/images/lightning-electric-energy.png" alt="Image 3" width={100} height={100} /></div>
              <p>(3er paso)</p>

              <button className={styles.contactButton} >VER MÁS</button>
            </div>
            <div className={styles.featureCard}>
              <h3>Cultiva</h3>
              <div className={styles.heroImage}><Image src="/images/tractor.png" alt="Image 3" width={100} height={100} /></div>
              <p>(4to paso)</p>

              <button className={styles.contactButton} >VER MÁS</button>
            </div>
          </div>
        </section>

        <section className={styles.howItWorks}>
          <h2 className = {styles.titletrabajar}>¿CÓMO TRABAJAR CON NOSOTROS?</h2>
          <div className={styles.steps}>
            <div className={styles.step}>
              <span className = {styles.fontnumber}>1</span>
              <h3>Explora nuestro software</h3>
              <p className={styles.fontnormalword2} >Explora nuestra plataforma y conoce las características y funcionalidades que ofrecemos.</p>
            </div>
            <div className={styles.step}>
              <span className = {styles.fontnumber}>2</span>
              <h3>Contacto y Consulta</h3>
              <p className={styles.fontnormalword2} >Ponte en contacto con nuestro equipo a través de nuestro formulario en línea o por correo electrónico.</p>
            </div>
            <div className={styles.step}>
              <span className = {styles.fontnumber}>3</span>
              <h3>Agenda una demostración</h3>
              <p className={styles.fontnormalword2} >Programa una demostración personalizada de nuestro software, donde te guiaremos a través de sus características clave y responderemos a todas tus preguntas.</p>
            </div>
            <div className={styles.step}>
              <span className = {styles.fontnumber}>4</span>
              <h3>Implementación y Capacitación</h3>
              <p className={styles.fontnormalword2} >Una vez que hayas decidido trabajar con nosotros, te proporcionaremos todo el soporte necesario para implementar el software en tu operación. Incluye las sesiones de capacitación.</p>
            </div>
            <div className={styles.step}>
              <span className = {styles.fontnumber}>5</span>
              <h3>Soporte Continuo</h3>
              <p className={styles.fontnormalword2} >Nuestro compromiso no acaba después de la implementación de nuestro software. El soporte está a tu disposición.</p>
            </div>
          </div>
          <button className={styles.contactButton}>CONTACTANOS</button>
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
