import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import App from "./App";
import { msalConfig } from "./config/authConfig";
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux"; 
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
const msalInstance = new PublicClientApplication(msalConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
   <MsalProvider instance={msalInstance}>
      <App />
    </MsalProvider>
    </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
