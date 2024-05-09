import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home.tsx";
import LoadingFallback from "./components/LoadingFallback.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback={<LoadingFallback />}>
      <Home />
    </Suspense>
  </React.StrictMode>
);
