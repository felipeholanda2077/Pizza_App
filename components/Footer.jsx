import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
          AH SIM, NÓS FIZEMOS.A PIZZA LAMA, FATIA DE PIZZA BEM ASSADA.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>ENCONTRE NOSSOS RESTAURANTES</h1>
          <p className={styles.text}>
            1654 R. Chapecó #304.
            <br /> Carapicuiba, 85022
            <br /> (602) 867-1010
          </p>
          <p className={styles.text}>
            2356 A. Paulista #235.
            <br /> São Paulo, 85022
            <br /> (602) 867-1011
          </p>
          <p className={styles.text}>
            1614 R. Elizer #104.
            <br /> São Paulo, 85022
            <br /> (602) 867-1012
          </p>
          <p className={styles.text}>
            1614 W. Caroll St #125.
            <br /> NewYork, 85022
            <br /> (602) 867-1013
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>JORNADA DE TRABALHO</h1>
          <p className={styles.text}>
            SEGUNDA A SEXTA-FEIRA
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SÁBADO - DOMINGO
            <br /> 12:00 – 24:00
          </p>
          <br />
          <br />
          <br/>
          <br/>
          
          <p className={styles.text}>
          © 2020 Pizza Lama. Todos os direitos reservados.
        </p>
        </div>
        
      </div>
      
    </div>
  );
};

export default Footer;