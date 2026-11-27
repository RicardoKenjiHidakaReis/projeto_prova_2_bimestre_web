import { Link } from 'react-router-dom';
import styles from './Home.module.css';

function Home() {
  return (
    <section className={styles.home}>
      <h2>BEM-VINDO(A) AO RICARDO COSMÉTICOS!</h2>
      <p>Skincare coreano para todos os tipos de pele.</p>
      <p>Trabalhamos com produtos da Anua, com hidratantes, cremes para a área dos olhos e brumas faciais.</p>
      <Link to="/catalogo">Ver catálogo</Link>
    </section>
  );
}

export default Home;