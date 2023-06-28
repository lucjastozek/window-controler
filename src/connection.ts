import { io } from "socket.io-client";

const socket = io("https://socketiotenementechoserver--lucjastozek.repl.co/");

socket.onAny((msgLabel, payload) =>
  console.log("RX: " + msgLabel, payload, new Date())
);

socket.onAnyOutgoing((msgLabel, payload) =>
  console.log("TX: " + msgLabel, payload)
);

export { socket };
