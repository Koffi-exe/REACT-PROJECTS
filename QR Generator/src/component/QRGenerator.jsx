import QRCode from "qrcode.react";
import React, { useState } from "react";
import "./style.css";

export default function QRGenerator() {
  const [input, setInput] = useState("");
  const [qrValue, setQrValue] = useState("");
  function handleChange() {
    setQrValue(`${input}`);
    setInput('')
  }
  return (
    <div>
      <h1>QR Generator</h1>
      <div className="inputContainer">
        <input
          className="inputField"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button className="button" onClick={handleChange}>
          Generate
        </button>
      </div>
      <div className="QRContainer">
        <QRCode value={qrValue} size={250} />
      </div>
    </div>
  );
}
