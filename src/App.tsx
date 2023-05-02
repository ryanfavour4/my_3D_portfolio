import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/routes";
import ContactFormContext from "./context/ContactFormContext";

function App() {
  return (
    <BrowserRouter>
      <ContactFormContext>
        <Router />
      </ContactFormContext>
    </BrowserRouter>
  );
}

export default App;
