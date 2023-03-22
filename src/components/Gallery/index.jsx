import React, { useState } from "react";
import Tags from "../Tags";
import styles from "./Gallery.module.scss";
import photos from "./photos.json";
import Cards from "./Cards";

export default function Gallery() {
  const [itens, setItens] = useState(photos);
  const tags = [...new Set(photos.map((valor) => valor.tag))];

  const filterPhotos = (tag) => {
    const newPhotos = photos.filter((photo) => {
      return photo.tag === tag;
    });

    setItens(newPhotos);
  };

  return (
    <section className={styles.gallery}>
      <h2>Browse through the Gallery</h2>
      <Tags tags={tags} filterPhotos={filterPhotos}/>
      <Cards itens={itens} styles={styles} />
    </section>
  );
}
