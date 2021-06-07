import React, { StrictMode, lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { AppProvider } from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";

const MainPage = lazy(function () {
  return import("./components/MainPage/MainPage");
});
const DetailsPage = lazy(function () {
  return import("./components/DetailsPage/DetailsPage");
});

export default function App(): JSX.Element {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
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
    </Suspense>
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
