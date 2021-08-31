import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./app";
import "./_metronic/assets/sass/style.scss";

// ReactDOM.render(<App />, document.getElementById("root"));

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <App />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById("root")
);
