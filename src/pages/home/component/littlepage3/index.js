import styles from "./style.module.scss";
import Buttons from "../../../../components/Button";
import React, { useEffect, useRef, useState } from "react"; //
const LittlePage3 = () => {
  const [scrollY, setScrollY] = useState(0);
  const containerStyle = {
    transform: `translate3d(0, ${scrollY}px, 0)`,
  };
  const slideInRef = useRef(null);
  const imgeup = useRef(null);
  const imgedown = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const windowTop = window.scrollY;
      const windowBotton = window.scrollY + window.innerHeight;
      setScrollY(window.scrollY / 100);
      if (slideInRef.current.offsetTop < windowBotton) {
        // 當瀏覽器視窗底部高於littlepage3=>class+動畫
        console.log(`到點了`);
        imgeup.current.classList.add(styles.animetions_Setting);
        imgedown.current.classList.add(styles.animetions_Setting);
      } else if (slideInRef.current.offsetTop > windowTop) {
        // slideInRef.current.classList.contains //檢查是否包含額外的屬性
        // console.log(slideInRef.current.offsetTop);
        // console.log(windowTop);
        // console.log(`移除動畫`);
      }
    };
    window.addEventListener("scroll", handleScroll);
  });
  return (
    <>
      <div className={styles.context} ref={slideInRef}>
        <div className={styles.image_context}>
          <div className={styles.imge_section1} ref={imgeup} style={containerStyle}>
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
          <div className={styles.imge_section2} ref={imgedown} style={containerStyle}>
            <img
              className={styles.image_template_wapper1}
              src="./images/label_banner.svg"
              alt="SVG Image"
            />
            {/* Img的tag可以使用svg圖檔,alt是備註 */}
          </div>
          <div className={styles.imge_section3} ref={imgeup} style={containerStyle}>
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
          <div className={styles.imge_section4} ref={imgedown} style={containerStyle}>
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
