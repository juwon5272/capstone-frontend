import React, { useState, FormEvent } from "react";
import styles from "../css/Translate.module.css";
import { Link } from "react-router-dom";

function Translate(): JSX.Element {
  const [messages, setMessages] = useState<JSX.Element[]>([]);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const messageInput = document.getElementById("message") as HTMLInputElement;
    const message = messageInput.value;
    if (message) {
      const newMessage = (
        <>
          <div className={styles.myMsg}>
            <span className={styles.msg}>{message}</span>
          </div>
          <div className={styles.anotherMsg}>
            <span className={styles.anotherName}>ParrBOT</span>
            <span className={styles.msg}>
              [제주도 사투리로 기계번역한] {message}
            </span>
          </div>
        </>
      );
      setMessages([...messages, newMessage]);
      messageInput.value = "";
    }
  };
  return (
    <>
      <div id={styles.contentWrap}>
        <nav>
          <Link to="/" style={{ color: "white", textDecorationLine: "none" }}>
            <span id={styles.nav}>Dialect Translator</span>
          </Link>
          <span id={styles.logoutBtn}>Log Out</span>
        </nav>
        <div id={styles.contentCover}>
          <div id={styles.roomWrap}>
            <div id={styles.roomList}>
              <div id={styles.roomHeader}>사투리 지역 선택</div>
              <div id={styles.roomSelect}>
                <div className={styles.roomEl} data-id="1">
                  제주도
                </div>
                <div className={styles.roomEl} data-id="2">
                  경상도
                </div>
                <div className={styles.roomEl} data-id="3">
                  전라도
                </div>
                <div className={styles.roomEl} data-id="4">
                  충청도
                </div>
                <div className={styles.roomEl} data-id="5">
                  강원도
                </div>
              </div>
            </div>
          </div>
          <div id={styles.chatWrap}>
            <div id={styles.chatHeader}>제주도</div>
            <div id={styles.chatLog}>{messages}</div>
            <form
              id="chatForm"
              style={{
                display: "flex",
                justifyContent: "space-around",
                paddingBottom: "10px",
              }}
              onSubmit={handleFormSubmit}
            >
              <input
                type="text"
                autoComplete="off"
                // size="30"
                id="message"
                placeholder="  메시지를 입력하세요"
                style={{
                  width: "87%",
                  height: "calc(100% - 1px)",
                  paddingBottom: "0",
                  outline: "none",
                  borderRadius: "10px",
                  border: "0.2px solid #D1D1D1",
                  // border: "none",
                  padding: "5px 0",
                  margin: "0 5px",
                  // background: "#DCDCDC",
                  color: "#0084ff",
                  fontSize: "17px",
                }}
              />
              <input
                style={{
                  outline: "none",
                  border: "none",
                  padding: "0 10px",
                  marginRight: "5px",
                  borderRadius: "10px",
                  background: "#0084ff",
                  color: "#fff",
                  fontSize: "13px",
                }}
                type="submit"
                value="Send"
              />
            </form>
          </div>
          <div id={styles.memberWrap}>
            <div id={styles.memberList}>
              <div id={styles.memberHeader}>대화내용</div>
              <div id={styles.memberSelect}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Translate;
