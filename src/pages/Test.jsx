import React, { useState, useEffect } from "react";
import Message from "../components/Message";
import axios from "axios";

function Test() {
  const [result, setResult] = useState(null);
  const message = async () => {
    try {
      let res = await axios.get("");
      let result = res.data;
      setResult(result);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    message();
  }, []);

  return <div>{result}</div>;
}

export default Test;

// import React, { useRef } from "react";

// const DownloadButton = () => {
//   const chattingRef = useRef(null);
//   const fileNameRef = useRef(null);

//   const handleDownload = () => {
//     const chatting = chattingRef.current.value;
//     const fileName = fileNameRef.current.value;

//     const blob = new Blob([chatting], { type: "text/plain" });
//     const url = window.URL.createObjectURL(blob);

//     const a = document.createElement("a");
//     a.style.display = "none";
//     a.href = url;
//     a.download = fileName;
//     document.body.appendChild(a);
//     a.click();

//     setTimeout(() => {
//       document.body.removeChild(a);
//       window.URL.revokeObjectURL(url);
//     }, 100);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         ref={chattingRef}
//         placeholder="저장할 내용을 입력해주세요."
//       />
//       <input
//         type="text"
//         ref={fileNameRef}
//         placeholder="생성할 파일 이름을 입력해주세요."
//       />
//       <button onClick={handleDownload}>다운로드</button>
//     </div>
//   );
// };

// export default DownloadButton;
