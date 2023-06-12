import styles from "./style.module.scss";
import Buttons from "../../../../components/Button";
import React from "react";
const LittlePage = ({ context, buttonON }) => {
  return (
    <>
      <div className={styles.contain}>
        <div className={styles.Title}>
          <span className={styles.childTitle}>
            <h3>FRESH SPRING COLORS + YOUR PERSONAL PHOTOS =</h3>
          </span>
          <h2>the perfect online invitation</h2>
          <Buttons data={"CREATE AN INVATION"} color={"blcak"} />
        </div>

        <div className={styles.theme}>
          <div className={styles.pictures}>
            <picture
              srcset="./images/theme_1_thumbnail@1x.avif"
              media="(min-width: 800px)"
            >
              <img
                className={styles.imges}
                src="./images/theme_1_thumbnail@1x.avif"
              />
            </picture>
          </div>

          <div className={styles.pictures}>
            <picture
              srcset="./images/theme_5_thumbnail@1x.avif"
              media="(min-width: 800px)"
            >
              <img
                className={styles.imges}
                src="./images/theme_5_thumbnail@1x.avif"
              />
            </picture>
          </div>

          <div className={styles.pictures}>
            <picture
              srcset="./images/theme_12_thumbnail@1x.avif"
              media="(min-width: 800px)"
            >
              <img
                className={styles.imges}
                src="./images/theme_12_thumbnail@1x.avif"
              />
            </picture>
          </div>

          <div className={styles.pictures}>
            <picture
              srcset="./images/theme_7_thumbnail@1x.avif"
              media="(min-width: 800px)"
            >
              <img
                className={styles.imges}
                src="./images/theme_7_thumbnail@1x.avif"
              />
            </picture>
          </div>

          <div className={styles.pictures}>
            <picture
              srcset="./images/theme_9_thumbnail@1x.avif"
              media="(min-width: 800px)"
            >
              <img
                className={styles.imges}
                src="./images/theme_9_thumbnail@1x.avif"
              ></img>
            </picture>
          </div>

          <div className={styles.pictures}>
            <picture
              srcset="./images/theme_6_thumbnail@1x.avif"
              media="(min-width: 800px)"
            >
              <img
                className={styles.imges}
                src="./images/theme_6_thumbnail@1x.avif"
              />
            </picture>
          </div>
        </div>

        {/* 泡泡icon區 */}
        <div className={styles.topsec}>
          <div className={styles.buboicon1}>
            <span className={styles.bubo1_left}></span>
            <span className={styles.bubo1_right}></span>
          </div>
          <div className={styles.buboicon2}>
            <span className={styles.bubo2_left}></span>
            <span className={styles.bubo2_right}></span>
          </div>
          <div className={styles.buboicon3}>
            <span className={styles.bubo3_left}></span>
            <span className={styles.bubo3_right}></span>
          </div>
          <div className={styles.buboicon4}>
            <span className={styles.bubo4_left}></span>
            <span className={styles.bubo4_right}></span>
          </div>
          <div className={styles.buboicon5}>
            <span className={styles.bubo5_left}></span>
            <span className={styles.bubo5_right}></span>
          </div>
          <div className={styles.buboicon6}>
            <span className={styles.bubo6_left}></span>
            <span className={styles.bubo6_right}></span>
          </div>
        </div>
      </div>
    </>
  );
};
export default LittlePage;
