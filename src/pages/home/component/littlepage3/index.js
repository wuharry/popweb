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

          </div>
          <div className={styles.imge_section3}>

          </div>
          <div className={styles.imge_section4}>
            
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
