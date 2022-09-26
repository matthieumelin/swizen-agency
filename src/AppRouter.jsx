import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default function AppRouter() {
  const [currentLocation, setCurrentLocation] = useState("");
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((result) => setServices(result));
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          index
          element={
            <Home
              currentLocation={currentLocation}
              services={services}
              setCurrentLocation={setCurrentLocation}
            />
          }
        />
      </Routes>
    </Router>
  );
}
