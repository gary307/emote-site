import styles from "./styles.module.css";

const Nav = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.logoWrapper}>
          {/* <img src="./logo.png" className={styles.logo} /> */}
        </div>
        <nav className={styles.nav}>
          <a>About</a>
          <a>Studio</a>
          <a>Gallery</a>
        </nav>
      </div>
    </>
  );
};

export default Nav;
