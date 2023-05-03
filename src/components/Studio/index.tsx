import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

const Studio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  let slideIndex = 0;

  const slideLength = 3;

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const newIndex = currentSlide + 1;
  //     setCurrentSlide((prev) => (prev !== slideLength - 1 ? prev + 1 : 0));
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, []);

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
                  src="/gallery/image1.jpg"
                />
                <img
                  className={styles.sliderOneImage}
                  src="/gallery/image1.jpg"
                />
                <img
                  className={styles.sliderOneImage}
                  src="/gallery/image1.jpg"
                />
                <img
                  className={styles.sliderOneImage}
                  src="/gallery/image1.jpg"
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
                    src="/gallery/image2.jpg"
                  />
                  <img
                    className={styles.sliderTwoImage}
                    src="/gallery/image2.jpg"
                  />
                  <img
                    className={styles.sliderTwoImage}
                    src="/gallery/image2.jpg"
                  />
                  <img
                    className={styles.sliderTwoImage}
                    src="/gallery/image2.jpg"
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
                    src="/gallery/image3.jpg"
                  />
                  <img
                    className={styles.sliderThreeImage}
                    src="/gallery/image3.jpg"
                  />
                  <img
                    className={styles.sliderThreeImage}
                    src="/gallery/image3.jpg"
                  />
                  <img
                    className={styles.sliderThreeImage}
                    src="/gallery/image3.jpg"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.studioCopy}>
            <h2>Playing with tech</h2>
            <br />
            <p>
              Our in-house, state of the art volume technology, allows us to
              create and expand entire worlds. We also have full motion capture
              facilities, performers, coders and UE artists. If you can imagine
              it, we can make it a reality.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Studio;
