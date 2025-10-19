import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./appRoutes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
