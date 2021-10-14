import React from "react";

export default function Header() {
  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      <div
        style={{
          width: "411px",
          height: "86px",
          margin: 0,
          backgroundColor: "#ffffff",
          padding: 0,
          borderBottom: "2px solid #f4f4f4",
        }}
      >
        <div
          style={{ display: "flex", flexDirection: "row", marginTop: "16px" }}
        >
          <div
            style={{
              fontSize: "14px",
              fontFamily: "Noto Sans",
              color: "#000000",
              letterSpacing: "-0.7px",
              marginLeft: "24px",
              fontWeight: "bold",
              marginTop: "16px",
            }}
          >
            Science
          </div>
          <div
            style={{
              color: "#000000",
              fontSize: "14px",
              fontWeight: "bold",
              letterSpacing: "-0.7px",
              marginLeft: "253px",
              marginTop: "16px",
            }}
          >
            Class 8 A
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            lineHeight: "20px",
          }}
        >
          <div
            style={{
              fontSize: "14px",
              fontFamily: "Noto Sans",
              color: "#000000",
              letterSpacing: "-0.7px",
              fontWeight: "700",
            }}
          >
            Sound and Light
          </div>
        </div>
        <div
          style={{ display: "flex", flexDirection: "row", marginTop: "16px" }}
        >
          <div
            style={{
              fontSize: "14px",
              fontFamily: "Noto Sans",
              // color: "#000000",
              letterSpacing: "-0.7px",
              marginLeft: "24px",
              lineHeight: "20px",
              color: "#4F4F4F",
              fontWeight: "normal",
              marginTop: "-24px",
            }}
          >
            Session 23
          </div>
        </div>
      </div>
    </div>
  );
}
