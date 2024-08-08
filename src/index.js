import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthKitProvider } from "@workos-inc/authkit-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
        <React.StrictMode>
                <AuthKitProvider
                        clientId="client_01J4Q0J2F830SXK60KBGG9WP9Z"
                        redirectUri="http://localhost:3002/"
                        // apiHostname="auth.example.com"
                >
                        <App />
                </AuthKitProvider>
        </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
