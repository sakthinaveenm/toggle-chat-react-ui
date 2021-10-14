import React from "react";
import { CFormFloating, CFormTextarea } from "@coreui/react";
import { AiOutlinePaperClip } from "react-icons/ai";
import Send from "../assets/images/send.png";
import { MdOutlinePhotoCamera } from "react-icons/md";
import "./Message.css";
import submitimg from "../assets/images/submit.png";
export default function Message(props) {
  const [isVisible, setIsVisible] = React.useState(true);
  const [viewcamera, setviewcamera] = React.useState(false);

  return (
    <div
      style={{
        position: "fixed",
        zIndex: 100,
        bottom: 0,
        width: "411px",
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "row",
      }}
    >
      {isVisible ? (
        <>
          <div>
            <CFormFloating style={{ padding: "10px", width: "340px" }}>
              <CFormTextarea
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                style={{
                  height: "80px",
                  border: "1px solid #9B9B9B",
                  color: "#000000",
                  fontSize: "14px",
                  borderRadius: "8px",
                  padding: "10px",
                  margin: 0,
                }}
                className="message-area"
              ></CFormTextarea>
              <AiOutlinePaperClip
                onClick={() => {
                  setIsVisible(false);
                }}
                style={{
                  color: "#000000",
                  marginLeft: "125px",
                  marginTop: "-76px",
                  zIndex: 101,
                  position: "fixed",
                  width: "25px",
                  height: "25px",
                  cursor: "pointer",
                }}
              />
              <MdOutlinePhotoCamera
                onClick={() => {
                  setviewcamera(true);
                  setIsVisible(false);
                }}
                style={{
                  color: "#000000",
                  marginLeft: "95px",
                  marginTop: "-76px",
                  zIndex: 101,
                  position: "fixed",
                  width: "25px",
                  height: "25px",
                  cursor: "pointer",
                }}
              />
            </CFormFloating>
          </div>
          <div>
            <img
              src={Send}
              style={{
                width: "43px",
                height: "43px",
                marginTop: "30px",
                cursor: "pointer",
              }}
              alt=""
            />
          </div>
        </>
      ) : viewcamera ? (
        <div className="slide-up">
          <div
            style={{
              color: "#000000",
              display: "flex",
              flexDirection: "column",
              width: "411px",
              height: "500px",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "14px",
                  fontFamily: "Noto Sans",
                  color: "#000000",
                  letterSpacing: "-0.7px",
                  marginLeft: "24px",
                  float: "left",
                  fontWeight: "bold",
                  marginTop: "16px",
                }}
              >
                Upload Image
              </div>
            </div>
            <div style={{}}>
              <img
                src={submitimg}
                alt=""
                style={{
                  width: "128px",
                  height: "128px",
                  float: "left",
                  marginLeft: "24px",
                  marginTop: "10px",
                }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "row-reverse" }}>
              <div
                style={{
                  color: "#000000",
                  marginRight: "12px",
                  backgroundColor: "#0085FF",
                  border: 0,
                  borderRadius: 0,
                  cursor: "pointer",
                  padding: "10px",
                }}
              >
                Submit
              </div>
              <div
                className="btn btn-primary"
                onClick={() => {
                  setIsVisible(true);
                  setviewcamera(false);
                }}
                style={{
                  margin: 0,
                  padding: "8px",
                  marginRight: "15px",
                  backgroundColor: "#ffffff",
                  border: 0,
                  borderRadius: 0,
                  color: "#4f4f4f",
                  cursor: "pointer",
                }}
              >
                Cancel
              </div>
            </div>
            <div>
              <div
                style={{
                  fontSize: "14px",
                  fontFamily: "Noto Sans",
                  color: "#000000",
                  letterSpacing: "-0.7px",
                  marginLeft: "20px",
                  marginTop: "16px",
                  paddingBottom: "5px",
                  float: "left",
                }}
              >
                You can upload images of type jpg or png with max file size 8mb.
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="slide-up">
          <div
            style={{
              color: "#000000",
              display: "flex",
              flexDirection: "column",
              width: "411px",
              height: "500px",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "14px",
                  fontFamily: "Noto Sans",
                  color: "#000000",
                  letterSpacing: "-0.7px",
                  marginLeft: "24px",
                  float: "left",
                  fontWeight: "bold",
                  marginTop: "16px",
                }}
              >
                Upload File
              </div>
            </div>
            <div style={{}}>
              <img
                src={submitimg}
                alt=""
                style={{
                  width: "128px",
                  height: "128px",
                  float: "left",
                  marginLeft: "24px",
                  marginTop: "10px",
                }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "row-reverse" }}>
              <div
                style={{
                  color: "#000000",
                  marginRight: "12px",
                  backgroundColor: "#0085FF",
                  border: 0,
                  borderRadius: 0,
                  cursor: "pointer",
                  padding: "10px",
                }}
              >
                Submit
              </div>
              <div
                className="btn btn-primary"
                onClick={() => {
                  setIsVisible(true);
                  setviewcamera(false);
                }}
                style={{
                  margin: 0,
                  padding: "8px",
                  marginRight: "15px",
                  backgroundColor: "#ffffff",
                  border: 0,
                  borderRadius: 0,
                  color: "#4f4f4f",
                  cursor: "pointer",
                }}
              >
                Cancel
              </div>
            </div>
            <div>
              <div
                style={{
                  fontSize: "14px",
                  fontFamily: "Noto Sans",
                  color: "#000000",
                  letterSpacing: "-0.7px",
                  marginLeft: "24px",
                  marginTop: "16px",
                  paddingBottom: "5px",
                  float: "left",
                }}
              >
                Please Select a file to upload as attachment.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
