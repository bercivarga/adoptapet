import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { AppProvider } from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import MainPage from "./components/MainPage/MainPage";
import DetailsPage from "./components/DetailsPage/DetailsPage";

export default function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route path="/details/:id">
          <DetailsPage></DetailsPage>
        </Route>
        <Route path="/">
          <MainPage></MainPage>
        </Route>
      </Switch>
    </Router>
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
