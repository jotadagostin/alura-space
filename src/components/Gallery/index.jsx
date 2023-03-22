import React from "react";
import Tags from "../Tags";
import photos from "./photos.json";
import styles from "./Gallery.module.scss";

import Cards from "./Cards";

export default function Gallery() {
  return (
    <section className={styles.gallery}>
      <h2>Browse through the Gallery </h2>
      <Tags />
      <Cards itens={photos} styles={styles}/>
    </section>
  );
}
