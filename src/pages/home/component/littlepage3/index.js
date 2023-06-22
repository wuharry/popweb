import styles from "./style.module.scss";
import Buttons from "../../../../components/Button";
import React, { useEffect, useRef, useState } from "react";
const LittlePage3 = () => {
  const [scrollY, setScrollY] = useState(0);
  const containerdown = {
    translate: "none",
    rotate: "none",
    scale: "none",
    transform: `translate(0, ${-scrollY}%)`,
  };
  const containerup = {
    translate: "none",
    rotate: "none",
    scale: "none",
    transform: `translate(0, ${scrollY}%)`,
  };
  const slideInRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      // 開始時圖片有偏差,當瀏覽器視窗底部等於分頁3時偏差修正
      const windowBotton = window.scrollY + window.innerHeight; //當瀏覽器視窗底部
      if (windowBotton <= slideInRef.current.offsetHeight * 4) {
        setScrollY(window.scrollY / 10 - 200);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {});
  return (
    <>
      <div className={styles.context} ref={slideInRef}>
        <div className={styles.image_context}>
          <div className={styles.imge_section1} style={containerup}>
            <img
              className={styles.images}
              src="./images/thumbnail_small.avif"
            />
            <img
              className={styles.images}
              src="./images/thumbnail_small 2.avif"
            />
            <img
              className={styles.images}
              src="./images/thumbnail_small 3.avif"
            />
          </div>
          <div className={styles.imge_section2} style={containerdown}>
            <img
              className={styles.image_template_wapper1}
              src="./images/label_banner.svg"
              alt="SVG Image"
            />
            {/* Img的tag可以使用svg圖檔,alt是備註 */}
          </div>
          <div className={styles.imge_section3} style={containerup}>
            <img
              className={styles.images}
              src="./images/thumbnail_medium.avif"
            />
            <img
              className={styles.images}
              src="./images/thumbnail_medium 2.avif"
            />
            <img
              className={styles.images}
              src="./images/thumbnail_medium3.avif"
            />
          </div>
          <div className={styles.imge_section4} style={containerdown}>
            <img
              className={styles.images}
              src="./images/thumbnail_medium4.avif"
            />
            <img
              className={styles.images}
              src="./images/thumbnail_medium5.avif"
            />
            <img
              className={styles.images}
              src="./images/thumbnail_medium6.avif"
            />
          </div>
        </div>
        {/* 右側放置文字 */}
        <div className={styles.text_context}>
          <h2>Invitation templates for every event</h2>
          <p>
            We’ve got you covered with our stylish collection of designs for any
            occasion.
          </p>
          <Buttons data={"CREATE AN INVATION"} color={"white"} />
        </div>
      </div>
    </>
  );
};

export default LittlePage3;
