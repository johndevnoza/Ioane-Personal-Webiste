import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@components/theme-provider";
import { BrowserRouter } from "react-router-dom";
import { AudioProvider } from "audioContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <AudioProvider>
            <App />
          </AudioProvider>
        </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
