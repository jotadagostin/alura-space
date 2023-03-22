import React from "react";
import popularsPhotos from "./photos-populars.json";
import styles from "./Populars.module.scss";

export default function Populars() {
  return (
    <aside className={styles.populars}>
      <h2>Populars</h2>
      <ul className={styles.populars__images}>
        {popularsPhotos.map((popularPhoto) => {
          return (
            <li key={popularPhoto.id}>
              <img src={popularPhoto.path} alt={popularPhoto.alt} />
            </li>
          );
        })}
      </ul>
      <button>See more pictures</button>
    </aside>
  );
}
