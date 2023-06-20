import styles from "./style.module.scss";
import NavigationBar from "./component/NavigationBar";
import Buttons from "../../components/Button";
import LittlePage from "./component/littlepage";
import LittlePage2 from "./component/littlepage2";
import LittlePage3 from "./component/littlepage3";
import Littlepage4 from "./component/littlepage4";
import React from "react";
const Home = () => {
  return (
    <>
      <div className={styles.body}>
        <NavigationBar />
        <div className={styles.context}>
          {/* 內文區 */}
          <div className={styles.maincontent}>
            <h1>a new way to experience online invitations</h1>
            <p>
              Plan in-person or <a href="/virtual">virtual events</a> for your
              next occasion with our stylish designer templates— ad free!"
            </p>
            <Buttons data={"CREATE AN INVATION"} color={"white"} />
          </div>
          {/* 放置圖片的地區 */}
          <div className={styles.imges}>
            <div className={styles.Noteframe}>
              <div className={styles.Note}></div>
              {/* 內容 */}
              <picture
                srcset="./images/hero_desktop_image@0.75x.avif'"
                media="(min-width: 800px)"
              >
                <img
                  className={styles.Nopadcontain}
                  src="./images/hero_desktop_image@1x.avif"
                />
              </picture>
            </div>
            <div className={styles.mobileframe}>
              <div className={styles.mobile}></div>
              <div className={styles.mobilecontain}>
                <picture
                  srcset="./images/hero_mobile_image@0.75x.avif'"
                  media="(min-width: 800px)"
                >
                  <img
                    src="./images/hero_mobile_image@1x.avif"
                    className={styles.mobilepicture}
                  />
                </picture>
              </div>
            </div>
          </div>
          {/* footer */}
        </div>
        {/* 放置小分業 */}
        <div className={styles.middle}>
          <LittlePage />
          <LittlePage2 />
          <LittlePage3 />
          <Littlepage4 />
        </div>
      </div>
    </>
  );
};
export default Home;
