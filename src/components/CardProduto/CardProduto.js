import styles from './CardProduto.module.css';

function CardProduto({ imagem, nome, categoria, preco }) {
  return (
    <div className={styles.card}>
      <img src={imagem} alt={nome} className={styles.imagem} />
      <h3>{nome}</h3>
      <p>Categoria: {categoria}</p>
      <p className={styles.preco}>R$ {preco}</p>
    </div>
  );
}

export default CardProduto;
