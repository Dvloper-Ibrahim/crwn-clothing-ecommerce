import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
// Stripe
import { Elements } from "@stripe/react-stripe-js";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store, persistor } from "./Store/store";
// Stripe
import { stripePromise } from "./Utils/stripe/stripe.utils";

import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* Using redux-persist */}
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          {/* Wrapping the app to register for Stripe */}
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
