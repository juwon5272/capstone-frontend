import React from "react";
import MenuBar from "../components/MenuBar";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div style={{ backgroundColor: "#C7E3FD", height: "100vh" }}>
      <MenuBar />
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "15%",
        }}
      >
        <div style={{ fontWeight: "700", fontSize: "60px" }}>
          Change the standard language{" "}
        </div>
        <div style={{ fontWeight: "700", marginTop: "-5px", fontSize: "60px" }}>
          to dialect on this website
        </div>
        <div style={{ fontSize: "20px", marginTop: "20px" }}>
          We have prepared a variety of dialect conversions
        </div>

        <Link to="/Translate">
          <button
            style={{
              backgroundColor: "#FFFFFF",
              color: "#000000",
              padding: "20px 20px",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
              fontWeight: "bold",
              marginTop: "50px",
            }}
          >
            Start Program
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Main;
