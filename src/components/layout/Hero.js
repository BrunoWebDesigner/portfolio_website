import Container from "./Container";
import styles from "./Hero.module.css";
import bluepc from "../../img/bluepc.jpg";

function Hero () {
  return (
    <Container>
      <div className={styles.hero}>
        <div className={styles.mask}>
          <img className={styles.firstImg} src={bluepc} alt="bannerImage"/>
        </div>
        <div className={styles.content}>
          <p>HELLO, I'M BRUNO.</p>
          <h1>Front-end Developer.</h1>
        </div>
      </div>
    </Container>
  )
}

export default Hero