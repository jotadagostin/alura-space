import React from "react";
import styles from "./Tags.module.scss";
import photos from "../Gallery/photos.json";

export default function Tags({ tags, filterPhotos, setItens }) {
  return (
    <div className={styles.tags}>
      <p>Filter by Tags:</p>
      <ul className={styles.tags__list}>
        {tags.map((tag) => {
          return (
            <li key={tag} onClick={() => filterPhotos(tag)}>
              {tag}
            </li>
          );
        })}
        <li onClick={() => setItens(photos)}> All</li>
      </ul>
    </div>
  );
}
