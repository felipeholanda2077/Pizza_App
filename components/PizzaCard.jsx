import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";

const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/pizza.png" alt="" width="500" height="500" />
      <h1 className={styles.title}>FIORI DI ZUCCA</h1>
      <span className={styles.price}>R$59.90</span>
      <p className={styles.desc}>
        Pizza de mussarela, queijo, alface, tomate e orégano.
      </p>
    </div>
  );
};

export default PizzaCard;