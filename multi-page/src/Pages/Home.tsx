import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const Data = React.lazy(() => import("../Components/Data"));
export default function Home() {
  return (
    <div>
      <div>Title home</div>
      <ErrorBoundary
        fallback={<p className="text-red-600">Something errrorsssssssss</p>}
        // onReset={() => (location.href = "/")}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <Data />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
