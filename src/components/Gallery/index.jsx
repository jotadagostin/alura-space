import React from "react";
import Tags from "../Tags";
import photos from "./photos.json";
import styles from "./Gallery.module.scss";
import open from "./open.png"
import favorito from "./favorito.png"

export default function Gallery() {
  return (
    <section className={styles.gallery}>
      <h2>Browse through the Gallery </h2>
      <Tags />
      <ul className={styles.gallery__cards}>
        {photos.map((photo) => {
          return (
            <li key={photo.id} className={styles.gallery__card}>
              <img
                className={styles.gallery__image}
                src={photo.imagem}
                alt={photo.title}
              />
              <p className={styles.gallery__description}></p>
              <div>
                <p>{photo.credits}</p>
                <span>
                  <img src={favorito} alt="heart icon like" />
                  <img src={open} alt="icon open modal" />
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
