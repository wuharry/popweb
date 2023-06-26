import styles from "./style.module.scss";
import React, { useCallback, useEffect, useRef } from "react";
const LittlePage2 = () => {
  const dot = useRef([]);
  const imges = useRef([]);
  const currentNum = 0;
  useEffect(() => {
    // 初始時新增黑點
    const { innerWidth } = window;
    const deviceWidth = 600;
    if (innerWidth <= deviceWidth) {
      dot.current[0].classList.add(styles.active);
    }
    //
  }, []);

  // 使用useCallback 的目的在於 callback ref是callback func 的一種
  // 為了避免組件重新渲染時, callback ref的函式都被重新宣告一次,來提高效率
  const setDot = useCallback((node) => {
    if (node && !dot.current.includes(node)) {
      dot.current.push(node);
    }
  }, []);
  const setImges = useCallback((img) => {
    if (img && !imges.current.includes(img)) {
      imges.current.push(img);
    }
  }, []);
  const handleClick = (refName) => {
    currentNum = refName;
    // 处理值变化事件的逻辑
    const map = dot.current;
    map.forEach((element) => {
      element.classList.remove(styles.active);
    });
    map[refName - 1].classList.add(styles.active);
  };
  return (
    <>
      <div className={styles.contain}>
        <div className={styles.font_sec}>
          <h2>Take your event to the next level</h2>
          <p>Elevate your invite with our powerful features</p>
        </div>
        <div className={styles.feature_wrapper}>
          <div className={styles.feature} ref={setImges}>
            <img src="/images/feature_fullscreen.svg" alt="SVG Image" />
            <h3>Beautiful Full-screen Invitations</h3>
            <p>Designed to look good on the web, phones and tablets.</p>
          </div>
          <div className={styles.feature} ref={setImges}>
            <img src="/images/feature_customize.svg" alt="SVG Image" />
            <h3>Customize with Photos and Videos</h3>
            <p>
              Upload your own photos and videos or select from our free, pro
              galleries.
            </p>
          </div>
          <div className={styles.feature} ref={setImges}>
            <img src="/images/feature_send.svg" alt="SVG Image" />
            <h3>Send Invitations via Email or Text</h3>
            <p>Choose your guests and we’ll send the invitation for you.</p>
          </div>
          <div className={styles.feature} ref={setImges}>
            <img src="/images/feature_rsvp.svg" alt="SVG Image" />
            <h3>Robust RSVP Management Tools</h3>
            <p>See who has responded, added plus-ones and opened invites.</p>
          </div>
          {/* 滑動點 */}
          <div className={styles.dots_container}>
            <span
              className={styles.dot}
              ref={setDot}
              onClick={() => {
                handleClick(1);
              }}
            ></span>
            <span
              className={styles.dot}
              ref={setDot}
              onClick={() => {
                handleClick(2);
              }}
            ></span>
            <span
              className={styles.dot}
              ref={setDot}
              onClick={() => {
                handleClick(3);
              }}
            ></span>
            <span
              className={styles.dot}
              ref={setDot}
              onClick={() => {
                handleClick(4);
              }}
            ></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default LittlePage2;
