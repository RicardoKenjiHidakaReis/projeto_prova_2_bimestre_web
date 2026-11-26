import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>Ricardo Cosméticos</h1>
      <ul className={styles.lista}>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/sobre">Sobre</NavLink></li>
        <li><NavLink to="/catalogo">Catálogo</NavLink></li>
        <li><NavLink to="/contato">Contato</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;