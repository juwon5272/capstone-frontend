// npm run build
// npx serve  -s build -l 40799

import React, { useEffect, useState } from "react";
import styles from "../css/Translate.module.css";
import { Link } from "react-router-dom";
import { useSpeechRecognition } from "react-speech-kit";
import AudioPlayer from "../components/AudioPlayer";
// import tts from "../images/tts.wav"
// import React from "react";
// import ex from "./ex.wav";

// function AudioExample() {
//   let audio = new Audio(ex);

//   const start = () => {
//     audio.play();
//   };

//   return (
//     <div>
//       <button onClick={start}>play1</button>
//     </div>
//   );
// }

// export default AudioExample;

function Translate() {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");
  const [region, setRegion] = useState("지역을 선택해주세요");
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
    },
  });
  const [data, setData] = useState(null);

  // let audio = new Audio('../../../capstone-backend/tts.wav')
  // const start = () => {

  //   audio.play()

  //    }

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch("http://127.0.0.1:5000/");
  //     const result = await response.json();
  //     setData(result);
  //     console.log("get 실행")
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("http://127.0.0.1:5000/");
  //       const result = await response.json();
  //       setData(result);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const messageInput = document.getElementById("message");
    let message = messageInput.value;
    let inputMessage = messageInput.value;
    // const sendMessage = region + messageInput.value;
    if (message) {
      let newMessage = (
        <React.Fragment key={Date.now()}>
          <div className={styles.myMsg}>
            <span className={styles.msg}>{message}</span>
          </div>
          <div className={styles.anotherMsg}>
            <span className={styles.anotherName}>ParrBOT</span>
            <span className={styles.msg}>
              [{region}] {data}
            </span>
          </div>
        </React.Fragment>
      );
      message = region + messageInput.value;
      console.log(JSON.stringify({ message }));
      try {
        const response = await fetch("http://127.0.0.1:5000/messages", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message }),
        });
        if (response.ok) {
          console.log("Message sent successfully");
        } else {
          console.error("Failed to send message");
        }
      } catch (error) {
        console.error("Error sending message:", error);
      }
      const fetchData = async () => {
        try {
          console.log("get 실행");
          const response = await fetch("http://127.0.0.1:5000/");
          const result = await response.json();
          let print = region == "제주도" ? result : inputMessage;
          setData(result);
          console.log("말풍선 실행 result : " + result);
          console.log("이거는 data : " + data);
          newMessage = (
            <React.Fragment key={Date.now()}>
              <div className={styles.myMsg}>
                <span className={styles.msg}>{inputMessage}</span>
              </div>
              <div className={styles.anotherMsg}>
                <span className={styles.anotherName}>ParrBOT</span>
                <span className={styles.msg}>
                  [{region}] {print}
                </span>
                <AudioPlayer />
              </div>
            </React.Fragment>
          );
          setMessages([...messages, newMessage]);
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
      messageInput.value = "";
      setValue("");
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
                <div
                  className={styles.roomEl}
                  id="juju"
                  data-id="1"
                  onClick={() => setRegion("제주도")}
                >
                  제주도
                </div>
                <div
                  className={styles.roomEl}
                  id="gyeong"
                  data-id="2"
                  onClick={() => setRegion("경상도")}
                >
                  경상도
                </div>
                <div
                  className={styles.roomEl}
                  id="jun"
                  data-id="3"
                  onClick={() => setRegion("전라도")}
                >
                  전라도
                </div>
                <div
                  className={styles.roomEl}
                  data-id="4"
                  onClick={() => setRegion("충청도")}
                >
                  충청도
                </div>
                <div
                  className={styles.roomEl}
                  data-id="5"
                  onClick={() => setRegion("강원도")}
                >
                  강원도
                </div>
              </div>
            </div>
          </div>
          <div id={styles.chatWrap}>
            <div id={styles.chatHeader}>{region}</div>
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
              <button
                style={{
                  marginLeft: "10px",
                  border: "none",
                  backgroundColor: "white",
                }}
                onMouseDown={listen}
                onMouseUp={stop}
              >
                🎤
              </button>
              <input
                type="text"
                autoComplete="off"
                size="30"
                id="message"
                placeholder="  메시지를 입력하세요"
                value={value}
                onChange={(event) => setValue(event.target.value)}
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
            {/* <div id={styles.memberList}>
              <div id={styles.memberHeader}>대화내용</div>
              <div id={styles.memberSelect}></div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Translate;
