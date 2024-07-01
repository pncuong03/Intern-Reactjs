import React from "react";
import NotFoundImage from "../../assets/writer.svg";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <p className="error-msg">
        Something went wrong. Try clicking the refresh page button to reload the
        application.{" "}
        {/* <button className="btn" onClick={resetErrorBoundary}>
          Refresh page
        </button> */}
      </p>
    </div>
  );
};

export default ErrorPage;
