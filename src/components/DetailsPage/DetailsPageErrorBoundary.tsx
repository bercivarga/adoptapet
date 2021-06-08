import React, { Component, ErrorInfo, ReactNode } from "react";
import { Link } from "react-router-dom";

type ErrorType = {
  isError: boolean;
};

export default class DetailsPageErrorBoundary extends Component {
  state = { isError: false };

  static getDerivedStateFromError(): ErrorType {
    return { isError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error("DetailsPageErrorBoundary caught an error", error, info);
  }

  reloadPage = (): void => {
    location.reload();
  };

  render(): ReactNode {
    if (this.state.isError) {
      return (
        <div>
          <h1>
            We couldn&apos;t handle your request. Please click{" "}
            <Link to="/" className="text-green-600 font-bold underline">
              here
            </Link>{" "}
            to go back to the home page.
          </h1>
          <h2>
            If this message persists, there is a high chance that there&apos;s
            something wrong with the API. If that&apos;s the case, please let me
            know by going to{" "}
            <a
              href="https://www.bercivarga.com/#contact"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 font-bold underline"
            >
              www.bercivarga.com/#contact
            </a>
            . Thank you!
          </h2>
        </div>
      );
    }

    return this.props.children;
  }
}
