// MyComponent.js
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function MyComponent() {
  const divRef = useRef(null);
  const navigate = useNavigate();

  const handlePageChange = () => {
    // 페이지 이동 로직
    navigate("/move"); // MovePage로 이동
  };

  useEffect(() => {
    // 페이지 이동 후에 포커스를 설정
    if (divRef.current) {
      divRef.current.focus();
    }
  }, []);

  return (
    <div>
      <h3>새로운값입니다</h3>

      <button onClick={handlePageChange}>페이지 이동</button>
      <div ref={divRef}>이곳에 포커스가 설정됩니다.</div>
    </div>
  );
}

export default MyComponent;
