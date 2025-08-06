import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Authenticator } from "@aws-amplify/ui-react";
import BlankPage from "./components/BlankPage";
import OldApp from "./OldApp";
import "./index.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      width: '100vw'
    }}>
      <Authenticator
        components={{
          Header() {
            return (
              <div style={{
                textAlign: 'center',
                marginBottom: '2rem'
              }}>
                <h1 style={{
                  fontSize: 'clamp(3rem, 8vw, 6rem)',
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: '500',
                  color: '#333',
                  margin: '0',
                  textAlign: 'center',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
                }}>
                  TaskMatch
                </h1>
              </div>
            );
          }
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<BlankPage />} />
            <Route path="/home/*" element={<OldApp />} />
          </Routes>
        </BrowserRouter>
      </Authenticator>
    </div>
  </React.StrictMode>
);

