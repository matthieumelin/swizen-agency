import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

export default function AppRouter() {
  const [currentLocation, setCurrentLocation] = useState("");
  return (
    <Router>
      <Routes>
        <Route
          index
          element={
            <Home
              currentLocation={currentLocation}
              setCurrentLocation={setCurrentLocation}
            />
          }
        />
      </Routes>
    </Router>
  );
}
