import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/MenuBar.module.css";
import parrot from "../images/parrot.png";

export default function MenuBar() {
  return (
    <div
      style={{
        // width: "calc(90%-100px)",
        width: "95%",
        margin: "0 2.5%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          //   justifyContent: "space-between",
        }}
      >
        <img style={{ width: "70px" }} src={parrot} />
        <p
          style={{
            fontFamily: "'Helvetica Neue', sans-serif",
            fontSize: "2rem",
            fontWeight: "bold",
            color: "#333",
          }}
        >
          ParrBOT
        </p>
      </div>

      <div style={{}}>
        <a
          href="/main"
          style={{
            margin: "0 30px",
            color: "gray",
            textDecorationLine: "none",
          }}
        >
          About
        </a>
        <a
          href="/main"
          style={{
            margin: "0 30px",
            color: "gray",
            textDecorationLine: "none",
          }}
        >
          Developers
        </a>
        <a
          href="/main"
          style={{
            margin: "0 30px",
            color: "gray",
            textDecorationLine: "none",
          }}
        >
          My page
        </a>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          to="/SignUp"
          style={{
            color: "black",
            textDecorationLine: "none",
          }}
        >
          <p
            style={{
              marginRight: "30px",
            }}
          >
            Sign Up
          </p>
        </Link>
        <Link to="/Login">
          <button
            style={{
              backgroundColor: "#FFFFFF",
              color: "#000000",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            Login
          </button>
        </Link>
      </div>
    </div>
    // <div className={styles.menuBar}>
    //   <p>
    //     <img style={{ width: "70px" }} src={parrot} />
    //   </p>
    //   <p>
    //     <a href="/main">My page</a>
    //   </p>
    //   <nav className={styles.menuBar__mainMenu}>
    //     <img style={{ width: "70px" }} src={parrot} />
    //     <ul>
    //       <li>
    //         <a href="/main">My page</a>
    //       </li>
    //       <li>
    //         <a href="/selectpage">Painting Style</a>
    //       </li>
    //       <li>
    //         <a href="/gallery">Gallery</a>
    //       </li>
    //       <li>
    //         <a href="/developers">Developers</a>
    //       </li>
    //     </ul>
    //   </nav>
    // </div>
  );
}
