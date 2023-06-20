 import React from "react";
import styles from "./style.module.scss";
import Buttons from "../../../../components/Button";
const Littlepage4 = () => {
  return (
    <div className={styles.contain}>
      {/* grid排版 */}
      <div className={styles.context}>
        {/* 文字區 */}
        <h2>Make it yours with photos &amp; videos</h2>
        <p>
          Take it to the next level by customizing with your photos and videos
          or selecting from our free, pro galleries.
        </p>
        <Buttons data={"CREATE AN INVATION"} color={"white"} />
      </div>
      <div className={styles.image}>
        {/* 圖片區 */}
        <div className={styles.screen_starts}>
          <img src="./images/customize_gallery_stars@2x.avif" className={styles.pictures}/>
        </div>
        <div className={styles.screen_bonfire}>
        <img src="./images/customize_gallery_bonfire@2x.avif" className={styles.pictures}/>
        </div>
        <div className={styles.screen_invite}>
        <img src="./images/customize_invite@2x.avif" className={styles.pictures}/>
        </div>
        <div className={styles.screen_edit}>
        <img src="./images/customize_edit_photo@2x.avif" className={styles.edit}/>
        </div>
        </div>
    </div>
  );
};

export default Littlepage4;
