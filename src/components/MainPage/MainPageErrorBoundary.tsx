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
      );
    }

    return this.props.children;
  }
}
