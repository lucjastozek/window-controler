import { createWindow } from "./windowUtils";
import { socket } from "./connection";
import { MouseEventHandler } from "react";

interface Row {
  number: 0 | 1 | 2 | 3 | 4;
}
function ButtonRow(props: Row): JSX.Element {
  const handleButtonClick: MouseEventHandler<HTMLButtonElement> = (
    event
  ): void => {
    const i = parseInt(event.currentTarget.dataset.i || "0", 10) as
      | 0
      | 1
      | 2
      | 3;
    const j = parseInt(event.currentTarget.dataset.j || "0", 10) as
      | 0
      | 1
      | 2
      | 3
      | 4;
    socket.emit("window", createWindow({ i: i, j: j }));
  };

  return (
    <div className="buttonRow">
      <button data-i={props.number} data-j={0} onClick={handleButtonClick}>
        i: {props.number}, j: {0}
      </button>
      <button data-i={props.number} data-j={1} onClick={handleButtonClick}>
        i: {props.number}, j: {1}
      </button>
      <button data-i={props.number} data-j={2} onClick={handleButtonClick}>
        i: {props.number}, j: {2}
      </button>
      <button data-i={props.number} data-j={3} onClick={handleButtonClick}>
        i: {props.number}, j: {3}
      </button>
      <button data-i={props.number} data-j={4} onClick={handleButtonClick}>
        i: {props.number}, j: {4}
      </button>
    </div>
  );
}

function Buttons(): JSX.Element {
  return (
    <>
      <ButtonRow number={0} />
      <ButtonRow number={1} />
      <ButtonRow number={2} />
      <ButtonRow number={3} />
    </>
  );
}

export default Buttons;
