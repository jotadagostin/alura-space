import Header from "../../components/Header";
import Menu from "../../components/Menu";
import banner from "./banner.png"
import styles from "./FirstPage.module.scss"

export default function FirstPage() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.principal}>
          <Menu />
          <div className={styles.principal__image}>
            <h1>The most complete gallery of the space!</h1>
            <img src={banner} alt="image about the earth seeimg from the space" />
          </div>
        </section>
      </main>
    </>
  );
}
