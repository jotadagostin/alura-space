import React from 'react'
import home from '../../assets/icons/home-ativo.png'
import mostLiked from '../../assets/icons/mais-curtidas-inativo.png'
import mostViewed from '../../assets/icons/mais-vistas-inativo.png'
import news from '../../assets/icons/novas-inativo.png'
import surpriseMe from '../../assets/icons/surpreenda-me-inativo.png'
import styles from './Menu.module.scss'


export default function Menu() {
  return (
    <nav className={styles.menu}>
        <ul className={styles.menu__list}>    
            <li className={styles.menu__item}>
                <img src={home} alt="" />
                <a href="">Home</a>
            </li>
            <li className={styles.menu__item}>
                <img src={mostLiked} alt="" />
                <a href="">Most liked</a>
            </li>
            <li className={styles.menu__item}>
                <img src={mostViewed} alt="" />
                <a href="">Most Viewed</a>
            </li>
            <li className={styles.menu__item}>
                <img src={news} alt="" />
                <a href="">News</a>
            </li>
            <li className={styles.menu__item}>
                <img src={surpriseMe} alt="" />
                <a href="">Surprise me</a>
            </li>
        </ul>
    </nav>
  )
}
