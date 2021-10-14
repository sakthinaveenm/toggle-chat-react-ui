import "./App.css";
import Header from "./components/Header";
import ChatBar from "./components/ChatBar";
import { RiArrowDropDownLine, RiArrowUpSLine } from "react-icons/ri";
import { CAvatar } from "@coreui/react";
import React, { useState } from "react";
import ErrorScreen from "./components/ErrorScreen";

function App() {
  const [popup, setPopup] = useState(true);
  const [errmsg, seterrmsg] = useState(false);

  return (
    <div className="App">
      <header
        className={`${popup ? "popdown" : "dog"}`}
        style={{
          boxShadow: "20px 20px 60px #bcbec2,-20px -20px 60px #feffff",
          borderTopRightRadius: "20px",
          borderTopLeftRadius: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "10px",
          }}
        >
          <CAvatar
            style={{ float: "left", marginLeft: "10px", marginTop: "10px" }}
            src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png"
          />
          {/* Student */}
          <div
            style={{
              float: "right",
              marginLeft: "293px",
              marginTop: "10px",
              cursor: "pointer",
            }}
            onClick={() => {
              setPopup(!popup);
            }}
          >
            {popup ? (
              <RiArrowUpSLine
                style={{
                  width: "40px",
                  height: "40px",
                }}
              />
            ) : (
              <RiArrowDropDownLine
                style={{
                  width: "40px",
                  height: "40px",
                  paddingRight: "-20px",
                }}
              />
            )}
          </div>
        </div>
        <hr />
        <div style={{ maxWidth: "411px" }}>
          {popup ? null : errmsg ? (
            <ErrorScreen />
          ) : (
            <>
              <Header />
              <ChatBar openorcls={popup} />
            </>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
