import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { AppProvider } from "./store";

export default function App(): JSX.Element {
  return (
    <div>
      <h1>Hello world!</h1>
    </div>
  );
}

ReactDOM.render(
  <StrictMode>
    <AppProvider>
      <App></App>
    </AppProvider>
  </StrictMode>,
  document.getElementById("root") as HTMLDivElement
);
