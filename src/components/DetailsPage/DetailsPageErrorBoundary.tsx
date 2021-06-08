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
        <h1>
          We couldn&apos;t handle your request. Please click{" "}
          <Link to="/" className="text-green-600 font-bold underline">
            here
          </Link>{" "}
          to go back to the home page.
        </h1>
      );
    }

    return this.props.children;
  }
}
