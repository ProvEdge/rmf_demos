import io from "socket.io-client";

// const ENDPOINT = "http://" + location.hostname + ":8080/status_updates"

const ENDPOINT = "http://" + "18.212.181.9" + ":58111/status_updates";

export const socket = io.connect(ENDPOINT);
