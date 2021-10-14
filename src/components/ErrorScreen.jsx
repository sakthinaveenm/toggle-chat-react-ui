import React from "react";
import katlogo from "../assets/images/katbooklogo.png";
import ermsg from "../assets/images/errmsg.png";

export default function ErrorScreen() {
  return (
    <div style={{ width: "411px" }}>
      <div
        style={{
          height: "500px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            height: "100%",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <div style={{ flexDirection: "column" }}>
              <div>
                <img style={{}} src={katlogo} alt="" />
              </div>
              <div>
                <img style={{}} src={ermsg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
