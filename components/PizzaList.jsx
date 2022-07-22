import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard"

const PizzaList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>A MELHOR PIZZARIA DA CIDADE</h1>
      <p className={styles.desc}>
        Aqui na Lama pizzaria você encontra os melhores preços e produtos com as melhores qualidades de pizzas que voce já viu em toda sua vida com preçõs bastante acessiveis e vantajosos, venha agora escolher sua pizza desejada a seguir.
      </p>
      <div className={styles.wrapper}>
          <PizzaCard/>
          <PizzaCard/>
          <PizzaCard/>
          <PizzaCard/>
          <PizzaCard/>
          <PizzaCard/>
          <PizzaCard/>
          <PizzaCard/>
      </div>
    </div>
  );
};

export default PizzaList;