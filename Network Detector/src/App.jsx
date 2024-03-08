import "./App.css";
import isOnline from "./hooks/isOnline";

function App() {
  const online = isOnline();

  return (
    <>
      <div className="mainContainer">
        <h1 className="networkHead">{online ? "online ✔️" : "offline ❌"}</h1>
        <p className="networkPara">
          {online ? "Disconnect" : "Connect"} the network to see changes{" "}
        </p>
        <button className="button" disabled={online ? false : true}>
          {online ? "Save" : "Reconnecting..."}
        </button>
      </div>
    </>
  );
}

export default App;
