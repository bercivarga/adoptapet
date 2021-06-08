import React, { Component, ErrorInfo, ReactNode } from "react";

type ErrorType = {
  isError: boolean;
};

export default class MainPageErrorBoundary extends Component {
  state = { isError: false };

  static getDerivedStateFromError(): ErrorType {
    return { isError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error("MainPageErrorBoundary caught an error", error, info);
  }

  reloadPage = (): void => {
    location.reload();
  };

  render(): ReactNode {
    if (this.state.isError) {
      return (
        <div className="dark:text-gray-100 text-center">
          <h1>
            An error occurred. Please click{" "}
            <button
              type="button"
              className="text-green-600 font-bold underline"
              onClick={this.reloadPage}
            >
              here
            </button>{" "}
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
