import "./styles.css";
import { createRandomWindow } from "./windowUtils";
import { socket } from "./connection";
import Buttons from "./Buttons";

export default function App() {
  function handleButtonClick() {
    socket.emit("window", createRandomWindow());
  }

  return (
    <div>
      <Buttons />
      <button onClick={handleButtonClick}>Fake Random Window On</button>
    </div>
  );
}
