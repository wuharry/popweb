import styles from "./style.module.scss";
import Buttons from "../../../../components/Button";
import React from "react";
const LittlePage3 = () => {
  return (
    <>
      <div className={styles.context}>
        <div className={styles.image_context}>
          <div className={styles.imge_section1}>
            <img
              className={styles.image_template_wapper1}
              src="./images/thumbnail_small.avif"
            />
            <img
              className={styles.image_template_wapper1}
              src="./images/thumbnail_small 2.avif"
            />
            <img
              className={styles.image_template_wapper1}
              src="./images/thumbnail_small 3.avif"
            />
          </div>
          <div className={styles.imge_section2}>
            <img
              className={styles.image_template_wapper1}
              src="./images/label_banner.svg"
              alt="SVG Image"
            />
            {/* Img的tag可以使用svg圖檔,alt是備註 */}
          </div>
          <div className={styles.imge_section3}>
            <img
            className={styles.imges}
             
              src="./images/thumbnail_medium.avif"
            />
            <img
              className={styles.imges}
             
              src="./images/thumbnail_medium 2.avif"
            />
            <img
              className={styles.imges}
             
              src="./images/thumbnail_medium3.avif"
            />
          </div>
          {/* <div className={styles.imge_section4}>
          <img
              className={styles.image_template_wapper1}
              src="./images/thumbnail_medium4.avif"
            />
            <img
              className={styles.image_template_wapper1}
              src="./images/thumbnail_medium5.avif"
            />
            <img
              className={styles.image_template_wapper1}
              src="./images/thumbnail_medium6.avif"
            />
          </div> */}
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
