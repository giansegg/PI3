import styles from '../styles/ContactForm.module.css';

export default function ContactForm() {
  return (
    <form className={styles.contactForm}>
      <input type="text" placeholder="Nombres y Apellidos" />
      <input type="text" placeholder="Celular" />
      <input type="email" placeholder="Correo Electrónico" />
      <textarea placeholder="Mensaje" />
      <button type="submit">ENVIAR</button>
    </form>
  );
}
