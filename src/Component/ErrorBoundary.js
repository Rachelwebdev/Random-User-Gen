import React, { Component } from "react";

import "./ErrorBoundary.css";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-container">
          <img src="https://bit.ly/3N9w2qy" alt="LOL" />
          <h1 className="error-message">Something went wrong</h1>
          {this.state.error.message && (
            <span className="desc">
              Here's the error: {this.state.error.message}
            </span>
          )}
          <button
            onClick={() => window.location.reload()}
            className="btn-save-me"
          >
            SAVE ME 🙏
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
