import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

const Gallery = () => {
  return (
    <>
      <section className={styles.wrapper}>
        <div className={styles.galleryContent}>
          <div className={styles.galleryImageOne}>
            <img
              className={styles.galleryImage}
              src="/video-menu-images/1.jpg"
            />
          </div>

          <div className={styles.galleryImageTwo}>
            <img
              className={styles.galleryImage}
              src="/video-menu-images/6.jpg"
            />
          </div>

          <div className={styles.galleryImageThree}>
            <img
              className={styles.galleryImage}
              src="/video-menu-images/2.jpg"
            />
          </div>

          <div className={styles.galleryImageFour}></div>

          <div className={styles.galleryImageFive}>
            <img
              className={styles.galleryImage}
              src="/video-menu-images/3.jpg"
            />
          </div>
          <div className={styles.galleryImageSeven}>
            <img
              className={styles.galleryImage}
              src="/video-menu-images/4.jpg"
            />
          </div>
          <div className={styles.galleryImageSix}>
            <img
              className={styles.galleryImage}
              src="/video-menu-images/5.jpg"
            />
          </div>
        </div>

        {/* <div className={styles.galleryContentTwo}>
          <div className={styles.galleryAreaOne}>
            <img
              className={styles.galleryImage}
              src="/video-menu-images/1.jpg"
            />

            <img
              className={styles.galleryImage}
              src="/video-menu-images/3.jpg"
            />
          </div>

          <div className={styles.galleryAreaTwo}>
            <img
              className={styles.galleryImage}
              src="/video-menu-images/6.jpg"
            />
          </div>

          <div className={styles.galleryAreaThree}>
            <img
              className={styles.galleryImage}
              src="/video-menu-images/8.jpg"
            />
          </div>

          <div className={styles.galleryAreaFour}>
            <img
              className={styles.galleryImage}
              src="/video-menu-images/5.jpg"
            />
          </div>

          <div className={styles.galleryAreaFive}>
            <img
              className={styles.galleryImage}
              src="/video-menu-images/4.jpg"
            />
          </div>
        </div> */}
      </section>
    </>
  );
};

export default Gallery;
