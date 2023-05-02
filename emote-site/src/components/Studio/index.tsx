import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

const Studio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  let slideIndex = 0;

  const slideLength = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = currentSlide + 1;
      setCurrentSlide((prev) => (prev !== slideLength - 1 ? prev + 1 : 0));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className={styles.wrapper}>
        <div className={styles.vinette}></div>
        <div className={styles.aboutContent}>
          <div className={styles.gallery}>
            <div className={styles.sliderOne}>
              <div
                className={styles.sliderOneBody}
                style={{
                  marginLeft: -500 * currentSlide,
                  transition:
                    currentSlide === 0 ? "none" : "all 1s ease-in-out",
                }}
              >
                <img
                  className={styles.sliderOneImage}
                  src="/bg-hero-image.jpg"
                />
                <img
                  className={styles.sliderOneImage}
                  src="/bg-hero-image.jpg"
                />
                <img
                  className={styles.sliderOneImage}
                  src="/bg-hero-image.jpg"
                />
                <img
                  className={styles.sliderOneImage}
                  src="/bg-hero-image.jpg"
                />
              </div>
            </div>

            <div className={styles.smallerSlides}>
              <div className={styles.sliderTwo}>
                <div
                  className={styles.sliderOneBody}
                  style={{
                    marginLeft: -300 * currentSlide,
                    transition:
                      currentSlide === 0 ? "none" : "all 1s ease-in-out",
                  }}
                >
                  <img
                    className={styles.sliderTwoImage}
                    src="/bg-hero-image.jpg"
                  />
                  <img
                    className={styles.sliderTwoImage}
                    src="/bg-hero-image.jpg"
                  />
                  <img
                    className={styles.sliderTwoImage}
                    src="/bg-hero-image.jpg"
                  />
                  <img
                    className={styles.sliderTwoImage}
                    src="/bg-hero-image.jpg"
                  />
                </div>
              </div>

              <div className={styles.sliderThree}>
                <div
                  className={styles.sliderOneBody}
                  style={{
                    marginLeft: -250 * currentSlide,
                    transition:
                      currentSlide === 0 ? "none" : "all 1s ease-in-out",
                  }}
                >
                  <img
                    className={styles.sliderThreeImage}
                    src="/bg-hero-image.jpg"
                  />
                  <img
                    className={styles.sliderThreeImage}
                    src="/bg-hero-image.jpg"
                  />
                  <img
                    className={styles.sliderThreeImage}
                    src="/bg-hero-image.jpg"
                  />
                  <img
                    className={styles.sliderThreeImage}
                    src="/bg-hero-image.jpg"
                  />
                </div>
              </div>
            </div>
          </div>

          <p className={styles.aboutCopy}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut
            nunc sem. In sed lacus eget velit elementum posuere ut et arcu.
            Aliquam erat volutpat. Praesent egestas justo in arcu sagittis
            consectetur.
          </p>
        </div>
      </section>
    </>
  );
};

export default Studio;
