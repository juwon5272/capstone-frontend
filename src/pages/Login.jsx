import React from "react";
import styles from "../css/SignUp.module.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <nav>
        <Link to="/" style={{ color: "white", textDecorationLine: "none" }}>
          <span id={styles.nav}>Dialect Translator</span>
        </Link>{" "}
      </nav>
      <div className={styles.wrapper}>
        <h3 style={{ display: "flex", justifyContent: "center" }}> Login</h3>
        <input
          className={styles.inputbox}
          id="id"
          type="text"
          placeholder="아이디를 입력해 주세요."
        />
        <div className={styles.error} id="error__email"></div>
        <input
          className={styles.inputbox}
          id="writer"
          type="text"
          placeholder="비밀번호를 입력해 주세요."
        />
        <div className={styles.footer}>
          <button
            id="signup__button"
            style={{
              backgroundColor: "#0084ff",
              color: "#FFF",
              padding: "20px 180px",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
              fontWeight: "bold",
            }}
            onclick="signup()"
            disabled
          >
            로그인하기
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
