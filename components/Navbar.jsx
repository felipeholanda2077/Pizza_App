import Image from "next/image";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>PEÇA AGORA!</div>
          <div className={styles.text}>4002-8922</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Homepage</li>
            <a href="/product/id" target="_blank">
          <li className={styles.listItem}>Products</li>
            </a>
          <li className={styles.listItem}>Menu</li>
          <a href="/">
          <img src="/img/logo.png" alt="" width="160px" height="69px" />
            </a>
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <a href="/contact">
          <li className={styles.listItem}>Contact</li>
          </a>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
            <a href="/cart">
          <Image src="/img/cart.png" alt="" width="30px" height="30px" />
          <div className={styles.counter}>2</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;