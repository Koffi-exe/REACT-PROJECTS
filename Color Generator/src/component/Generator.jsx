import React, { useState } from "react";
// import "./style.css";

export default function () {
  const [type, setType] = useState("hex");
  const [color, setColor] = useState("#00000");

  function handleGenerateColor() {
    if (type === "hex") {
      let hexArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "a", "b", "c", "d", "e", "f"];
      let hexColor = "";
      for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * 16);
        hexColor = hexColor + hexArr[index];
      }
      setColor(`#${hexColor}`);
    } 
    else {
      let firstValue = Math.floor(Math.random() * 225);
      let secondValue = Math.floor(Math.random() * 225);
      let thirdValue = Math.floor(Math.random() * 225);

      setColor(`rgb(${firstValue},${secondValue},${thirdValue})`);
    }
  }
  return (
    <>
      <div
        style={{
          backgroundColor: color,
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <div>
          <button
            onClick={() => {
              setType("hex");
            //   handleGenerateColor();
            }}
            style={{ marginRight: "20px" }}
          >
            Hex Color Code
          </button>
          <button
            onClick={() => {
              setType("rgb");
            //   handleGenerateColor();
            }}
            style={{ marginRight: "20px" }}
          >
            RGB Color Code
          </button>
          <button onClick={handleGenerateColor} style={{ marginRight: "20px" }}>
            Generate Color
          </button>
        </div>
        <div
          style={{
            padding:"20px",
            borderRadius:"20px",
            backgroundColor:"white",
            color: "black",
          }}
        >
          {type === "hex" ? (
            <h2>{`Color Code is ${color}`}</h2>
          ) : (
            <h2>{`Color Code is ${color}`}</h2>
          )}
        </div>
      </div>
    </>
  );
}
