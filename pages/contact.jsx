import styles from "../styles/Contact.module.css";
import Image from "next/image";
import { useState } from "react";

const Contact = () => {
  return (
    <div className={styles.container}>
        <link rel="icon" href="/pizza.ico"></link>
        <div className={styles.form}>
        <form>
            <label>
                <h3>Nome:</h3>
                <input type="text" name="name" />
                <h3>Email:</h3>
                <input type="text" name="email" />
                <h3>Celular:</h3>
                <input type="text" name="celular" />
            </label><br/><br/>
                <input type="submit" value="Enviar" />
        </form>
        </div>
    </div>
  );
};

export default Contact;