import React, { StrictMode, lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { AppProvider } from "./store";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const MainPage = lazy(function () {
  return import("./components/MainPage/MainPage");
});
const DetailsPage = lazy(function () {
  return import("./components/DetailsPage/DetailsPage");
});

export function Logo(): JSX.Element {
  return (
    <Link to="/">
      <h1 className="my-8 font-black text-4xl sm:text-6xl text-center dark:text-gray-100">
        Adopta<span className="text-green-600">pet</span>
      </h1>
    </Link>
  );
}

export function Footer(): JSX.Element {
  return (
    <div className="my-8 px-2 text-center">
      <span className="dark:text-gray-100">
        Made with{" "}
        <span role="img" aria-label="heart">
          ♥️
        </span>{" "}
        by{" "}
        <a
          href="https://www.bercivarga.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600"
        >
          @bercivarga
        </a>
      </span>
    </div>
  );
}

export default function App(): JSX.Element {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Router>
        <Logo />
        <Switch>
          <Route path="/pet/:id">
            <DetailsPage />
          </Route>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </Suspense>
  );
}

ReactDOM.render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>,
  document.getElementById("root") as HTMLDivElement
);
