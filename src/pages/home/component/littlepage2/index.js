import styles from "./style.module.scss";
import React, { useEffect, useRef } from "react";
const LittlePage2 = () => {
  const dot1 = useRef(null);
  useEffect(() => {
    const diviceSizeHandler = () => {
      const { innerWidth } = window;
      // console.log(innerWidth);
      const deviceWidth = 600;
      if (innerWidth <= deviceWidth) {
        dot1.current.classList.add(active);
      }
    };
    window.addEventListener("resize", diviceSizeHandler);
  }, []);
  return (
    <>
      <div className={styles.contain}>
        <div className={styles.font_sec}>
          <h2>Take your event to the next level</h2>
          <p>Elevate your invite with our powerful features</p>
        </div>
        <div className={styles.feature_wrapper}>
          <div className={styles.feature}>
            <img src="/images/feature_fullscreen.svg" alt="SVG Image" />
            <h3>Beautiful Full-screen Invitations</h3>
            <p>Designed to look good on the web, phones and tablets.</p>
          </div>
          <div className={styles.feature}>
            <img src="/images/feature_customize.svg" alt="SVG Image" />
            <h3>Customize with Photos and Videos</h3>
            <p>
              Upload your own photos and videos or select from our free, pro
              galleries.
            </p>
          </div>
          <div className={styles.feature}>
            <img src="/images/feature_send.svg" alt="SVG Image" />
            <h3>Send Invitations via Email or Text</h3>
            <p>Choose your guests and we’ll send the invitation for you.</p>
          </div>
          <div className={styles.feature}>
            <img src="/images/feature_rsvp.svg" alt="SVG Image" />
            <h3>Robust RSVP Management Tools</h3>
            <p>See who has responded, added plus-ones and opened invites.</p>
          </div>
          {/* 滑動點 */}
          <div className={styles.dots_container}>
            <span className={styles.dot} ref={dot1}></span>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default LittlePage2;
