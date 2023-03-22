import React from "react";
import styles from "./Tags.module.scss";

export default function Tags() {
  return (
    <div className={styles.tags}>
      <p>Filter for Tags:</p>
      <ul className={styles.tags__list}>
        <li>Starts</li>
        <li>Galaxies</li>
        <li>Moon</li>
        <li>Planets</li>
      </ul>
    </div>
  );
}
