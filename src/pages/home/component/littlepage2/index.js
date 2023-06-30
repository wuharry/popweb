import styles from "./style.module.scss";
import React, { useCallback, useEffect, useRef } from "react";
const LittlePage2 = () => {
  const dot = useRef([]);
  const imgRef = useRef(null);
  let currentNum = 0;
  useEffect(() => {
    const handleScroll = () => {
      const scrollLeft = imgRef.current.scrollLeft;
      // console.log(Math.floor(scrollLeft));
      const refName = Math.floor(scrollLeft / 375);
      const map = dot.current;
      map.forEach((element) => {
        element.classList.remove(styles.active);
      });

      map[refName].classList.add(styles.active);
    };
    // 初始時新增黑點
    const { innerWidth } = window;
    imgRef.current.addEventListener("scroll", handleScroll);
    const deviceWidth = 600;
    if (innerWidth <= deviceWidth) {
      dot.current[0].classList.add(styles.active);
    }

    return () => {
      imgRef.current.removeEventListener("scroll", handleScroll);
    };
    //
  }, []);

  // 使用useCallback 的目的在於 callback ref是callback func 的一種
  // 為了避免組件重新渲染時, callback ref的函式都被重新宣告一次,來提高效率
  const setDot = useCallback((node) => {
    if (node && !dot.current.includes(node)) {
      dot.current.push(node);
    }
  }, []);
  // 圖片ref
  return (
    <>
      <div className={styles.contain}>
        <div className={styles.font_sec}>
          <h2>Take your event to the next level</h2>
          <p>Elevate your invite with our powerful features</p>
        </div>
        <div className={styles.feature_wrapper} ref={imgRef}>
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
        </div>
        <div className={styles.dots_container}>
          <span className={styles.dot} ref={setDot}></span>
          <span className={styles.dot} ref={setDot}></span>
          <span className={styles.dot} ref={setDot}></span>
          <span className={styles.dot} ref={setDot}></span>
        </div>
      </div>
    </>
  );
};

export default LittlePage2;
