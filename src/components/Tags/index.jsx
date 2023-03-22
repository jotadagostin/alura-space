import React from "react";
import styles from "./Tags.module.scss";

export default function Tags({ tags, filterPhotos }) {
  return (
    <div className={styles.tags}>
      <p>Filter for Tags:</p>
      <ul className={styles.tags__list}>
        {tags.map((tag) => {
          return (
            <li key={tag} onClick={filterPhotos(tag)}>
              {tag}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
