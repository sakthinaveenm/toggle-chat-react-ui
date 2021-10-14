import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import answeringChat from "../assets/images/chat.png";
import { GrChatOption } from "react-icons/gr";
import { MdOutlineMoreHoriz } from "react-icons/md";
function getRandomColor() {
  var letters = "BCDEF".split("");
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
}
function ColorLuminance(hex, lum) {
  // validate hex string
  hex = String(hex).replace(/[^0-9a-f]/gi, "");
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  lum = lum || 0;

  // convert to decimal and change luminosity
  var rgb = "#",
    c,
    i;
  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
    rgb += ("00" + c).substr(c.length);
  }

  return rgb;
}
export default function Comments(props) {
  var randomLightColor = getRandomColor();
  var randomDarkenColor = ColorLuminance(randomLightColor, -0.5);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div
      style={{
        width: "100%",
        marginTop: "10px",
        backgroundColor: "#ffffff",
        padding: "10px",
        paddingBottom: "5px",
      }}
    >
      {/* 1 */}
      <div
        style={{ display: "flex", flexDirection: "row", marginLeft: "45px" }}
      >
        {/* 2 */}
        <div style={{ flexDirection: "column", marginRight: "10px" }}>
          <GrChatOption
            style={{
              color: `${randomDarkenColor}`,
            }}
          />
        </div>
        <div style={{ flexDirection: "column" }}>
          {/* bind Starts */}
          <div
            className="user-icon"
            style={{
              width: "36px",
              height: "36px",
              backgroundColor: `${randomLightColor}`,
              color: `${randomDarkenColor}`,
              textAlign: "center",
              padding: "2px",
              borderRadius: "8px",
              fontSize: "20px",
              fontWeight: 700,
              fontFamily: "Oxygen",
            }}
          >
            C
            <div
              className="user-icon"
              style={{
                width: "14px",
                height: "14px",
                backgroundColor: `${randomDarkenColor}`,
                color: `${randomLightColor}`,
                fontSize: "8px",
                // padding: "4px",
                borderRadius: "50%",
                position: "relative",
                textAlign: "center",
                marginLeft: "-5px",
                marginTop: "-3px",
                zIndex: 2,
                fontWeight: 700,
                fontFamily: "Oxygen",
              }}
            >
              s
            </div>
          </div>
          {/* bind ends */}
        </div>
        {/* 2 closed */}
        {/* 3 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: "10px",
          }}
        >
          {/* 4 */}
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div
              style={{
                color: "#4F4F4F",
                fontWeight: 700,
                fontsize: "16px",
                lineHeight: "20px",
                letterSpacing: "-0.7px",
                fontFamily: "Noto Sans",
              }}
            >
              Charu
              {/* <CBadge
                style={{
                  height: "9px",
                  fontSize: "5px",
                  marginLeft: "3px",
                  //   marginBottom: "-92px",
                }}
                color="danger"
                shape="rounded-pill"
              >
                New
              </CBadge> */}
            </div>
            <div
              style={{
                fontFamily: "Oxygen",
                fontSize: "10px",
                lineHeight: "12.63px",
                color: "#4F4F4F",
                fontWeight: 400,
                width: "fit-content",
                // float: "right",
                // justifyContent: "right",
                // alignItems: "flex-end",
                marginLeft: "175px",
                marginTop: "2px",
              }}
            >
              4:45 PM
            </div>
          </div>
          {/* 4 closed */}
          {/* 5 Starts */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              paddingLeft: "10px",
              paddingTop: "10px",
              marginLeft: 0,
              textAlign: "left",
            }}
          >
            <div
              style={{
                fontFamily: "Oxygen",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "14px",
                lineHeight: "18px",
                color: "#000000",
              }}
            >
              What is Cell Division Used for ?
            </div>
          </div>
          {/* 5 ends */}
          {/* 6 starts */}
          <div
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              marginTop: "-20px",
            }}
          >
            <div>
              <img
                style={{ marginRight: "2px", cursor: "pointer" }}
                src={answeringChat}
                alt=""
                onClick={() => {
                  alert("Clicked");
                }}
              />
              <MdOutlineMoreHoriz
                onClick={handleClick}
                style={{ color: "#4f4f4f", marginLeft: "5px" }}
              />
              {/* materialui code */}
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem>Agree</MenuItem>
                <MenuItem>Answer</MenuItem>
                <MenuItem style={{ color: "red" }}>Delete</MenuItem>
              </Menu>
              {/*  */}
            </div>
            {/* <div></div> */}
          </div>
          {/* 6 ends */}
        </div>
        {/* 3closed */}
      </div>
      {/* 1 closed */}
    </div>
    // dummy closed
  );
}
