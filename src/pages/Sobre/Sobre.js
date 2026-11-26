import styles from './Sobre.module.css';

function Sobre() {
  return (
    <section className={styles.sobre}>
      <h2>SOBRE NÓS</h2>
      <div className={styles.curriculo}>
        <h3>Ricardo</h3>
        <p>Estudante de Ciência da Computação no CESUPA.</p>
        <p>Este site foi feito para a prova prática de Desenvolvimento Web.</p>
      </div>
    </section>
  );
}

export default Sobre;