import Image from "next/image";
import styles from "./styles.module.css";

const Hero = () => {
  return (
    <>
      <section className={styles.wrapper}>
        <div className={styles.vinette}></div>
        <div className={styles.aboutContent}>
          <img src="/logo.png" className={styles.logo} />
          <p className={styles.aboutCopy}>
            Combining creativity and cutting edge technology, we develop and
            produce effective content that will captivate and move your
            audience.
          </p>

          <p className={styles.aboutCopy}>
            Previously known for producing visually stunning, boundary-pushing
            feature films that tackle contemporary issues and challenge
            traditional storytelling, we’ve now partnered with creative
            marketing talent to form E-Mote, bringing our filmmaking ethos to
            creating branded content with real ‘stopping power’.
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
