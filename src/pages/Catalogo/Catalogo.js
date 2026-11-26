import CardProduto from '../../components/CardProduto/CardProduto';
import styles from './Catalogo.module.css';
import eyeCream from '../../assets/anua_eye_cream.jpg';
import moisturizer from '../../assets/anua_moisturizer.jpg';
import mist from '../../assets/anua_mist.jpg';

function Catalogo() {
  return (
    <section className={styles.catalogo}>
      <h2>CATÁLOGO</h2>
      <div className={styles.grade}>
        <CardProduto imagem={eyeCream} nome="Anua PDRN + Caffeine Eye Cream" categoria="Área dos olhos" preco="129,90" />
        <CardProduto imagem={moisturizer} nome="Anua Barrier Reboot Daily Moisturizer" categoria="Hidratante" preco="119,90" />
        <CardProduto imagem={mist} nome="Anua PDRN Hyaluronic Capsule Mist" categoria="Bruma facial" preco="99,90" />
      </div>
    </section>
  );
}

export default Catalogo;