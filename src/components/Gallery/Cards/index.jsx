import React from "react";
import open from './open.png'
import like from './favorito.png'

export default function Cards({itens, styles}) {
  return (
    <ul className={styles.gallery__cards}>
      {itens.map((item) => {
        return (
          <li key={item.id} className={styles.gallery__card}>
            <img
              className={styles.gallery__image}
              src={item.image}
              alt={item.title}
            />
            <p className={styles.gallery__description}>{item.title}</p>
            <div>
              <p>{item.credit}</p>
              <span>
                <img src={like} alt="icon like heart" />
                <img src={open} alt="icon open modal" />
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}