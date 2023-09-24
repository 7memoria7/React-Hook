// MovePage.js
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MovePage.module.css";
import MyComponent from "./MyComponent";

function MovePage() {
  const divRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // 페이지 이동 후에 포커스를 설정
    if (divRef.current) {
      divRef.current.focus();
    }
  }, []);

  return (
    <div>
      <h1>git! 수정해보자!</h1>
      <h1>이동한 페이지</h1>
      {/* <MyComponent /> */}
      <div className={styles.movePageName1} />
      <div className={styles.movePageName2} />
      <div className={styles.movePageName3}></div>
      <div tabIndex={-1} ref={divRef} className={styles.movePage}>
        이곳에 포커스가 설정됩니다.
      </div>
    </div>
  );
}

export default MovePage;
