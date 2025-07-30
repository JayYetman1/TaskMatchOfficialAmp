// import React from "react";
// import ReactDOM from "react-dom/client";
// // added
// import { Authenticator } from '@aws-amplify/ui-react';
// import App from "./App.tsx";
// import "./index.css";
// import { Amplify } from "aws-amplify";
// import outputs from "../amplify_outputs.json";
// // added
// import '@aws-amplify/ui-react/styles.css';

// Amplify.configure(outputs);

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <Authenticator>
//       <App />
//     </Authenticator>
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Authenticator } from "@aws-amplify/ui-react";
import App from "./App";
//import OldApp from "./OldApp"; // create this in step 3
import "./index.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";

import "@aws-amplify/ui-react/styles.css";

Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Authenticator>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          {/* <Route path="/taskmatch/*" element={<OldApp />} /> */}
        </Routes>
      </BrowserRouter>
    </Authenticator>
  </React.StrictMode>
);


