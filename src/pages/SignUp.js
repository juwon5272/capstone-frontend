import React from "react";
import styles from "../css/SignUp.module.css";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <>
      <nav>
        <Link to="/" style={{ color: "white", textDecorationLine: "none" }}>
          <span id={styles.nav}>Dialect Translator</span>
        </Link>{" "}
      </nav>
      <div className={styles.wrapper}>
        <h3 style={{ display: "flex", justifyContent: "center" }}> Sign Up</h3>
        <input
          className={styles.inputbox}
          id="email"
          type="text"
          placeholder="이메일을 입력해 주세요."
        />
        <div className={styles.error} id="error__email"></div>
        <input
          className={styles.inputbox}
          id="writer"
          type="text"
          placeholder="이름을 입력해 주세요."
        />
        <div className={styles.error} id="error__writer"></div>
        <input
          className={styles.inputbox}
          id="password1"
          type="password"
          placeholder="비밀번호를 입력해 주세요."
        />
        <div className={styles.error} id="error__password1"></div>
        <input
          className={styles.inputbox}
          id="password2"
          type="password"
          placeholder="비밀번호를 다시 입력해 주세요."
        />
        <div className={styles.error} id="error__password2"></div>
        <div className={styles.phone__wrapper}>
          <input
            id="phone1"
            className={styles.phoneNum}
            type="text"
            onchange="changePhone1()"
            onkeyup="onchange()"
          />{" "}
          -
          <input
            id="phone2"
            className={styles.phoneNum}
            onchange="changePhone2()"
            onkeyup="onchange()"
          />{" "}
          -
          <input
            id="phone3"
            className={styles.phoneNum}
            onchange="changePhone3()"
            onkeyup="onchange()"
          />
        </div>
        {/* <div className={styles.token__wrapper}>
          <div className={styles.token} id="token">
            000000
          </div>
          <button id="token__button" onclick="getToken()" disabled>
            인증번호 전송
          </button>
        </div> */}
        {/* <div className={styles.token__wrapper}>
          <div className={styles.token__timer} id="token__timer">
            3:00
          </div>
          <button
            id="token__timer__confirm__button"
            onclick="getTokenTimerConfirm()"
            disabled
          >
            인증 완료
          </button>
        </div> */}
        <div className={styles.location__wrapper}>
          <select className={styles.location} id="location">
            <option disabled selected>
              지역을 선택하세요.
            </option>
            <option>서울</option>
            <option>경기</option>
            <option>인천</option>
          </select>
        </div>
        <div className={styles.error} id="error__location"></div>
        <div className={styles.gender__wrapper}>
          <div className={styles.gender}>
            <input
              type="radio"
              name="gender"
              id="gender__woman"
              className={styles.gender__radio}
            />{" "}
            여성
          </div>
          <div className={styles.gender}>
            <input
              type="radio"
              name="gender"
              id="gender__man"
              className={styles.gender__radio}
            />{" "}
            남성
          </div>
        </div>
        <div className={styles.error} id="error__gender"></div>
        <hr />
        <div className={styles.footer}>
          <Link to="/Login">
            <button
              style={{
                backgroundColor: "#0084ff",
                color: "#FFF",
                padding: "20px 180px",
                border: "none",
                borderRadius: "5px",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              가입하기
            </button>
          </Link>
          {/* <Link to="/Translate">
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
              가입하기
            </button>
          </Link> */}
        </div>
      </div>
    </>
  );
}

export default SignUp;
