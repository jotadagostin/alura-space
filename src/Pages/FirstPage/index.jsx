import banner from "./banner.png";
import styles from "./FirstPage.module.scss";

import Header from "components/Header";
import Menu from "components/Menu";
import Footer from "components/Footer";
import Gallery from "components/Gallery";
import Populars from "components/Populars";

export default function FirstPage() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.principal}>
          <Menu />
          <div className={styles.principal__image}>
            <h1>The most complete gallery of the space!</h1>
            <img
              src={banner}
              alt="image about the earth seeimg from the space"
            />
          </div>
        </section>
        <div className={styles.gallery}>
          <Gallery />
          <Populars />
        </div>
      </main>
      <Footer />
    </>
  );
}
