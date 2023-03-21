import React from "react";
import facebook from "../Footer/facebook.svg";
import twitter from "../Footer/twitter.svg";
import instagram from "../Footer/instagram.svg";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__icons}>
        <a
          href="https://www.facebook.com/AluraCursosOnline/"
          target="_blank"
          rel="noreferrer">
          <img src={facebook} alt="facebook icon" />
        </a>
        <a
          href="https://twitter.com/aluraonline?lang=en"
          target="_blank"
          rel="noreferrer">
          <img src={twitter} alt="twitter icon" />
        </a>
        <a
          href="https://www.instagram.com/aluraonline/?hl=en"
          target="_blank"
          rel="noreferrer">
          <img src={instagram} alt="instagram icon" />
        </a>
      </div>
      <p>Developed by Alura</p>
    </footer>
  );
}
