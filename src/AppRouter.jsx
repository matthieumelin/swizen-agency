import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default function AppRouter() {
  const [currentLocation, setCurrentLocation] = useState("");
  const [services, setServices] = useState([]);
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((result) => {
        setServices(result.services);
        setTools(result.tools);
      });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/404" element={<NotFound />} />
        <Route
          index
          element={
            <Home
              currentLocation={currentLocation}
              services={services}
              tools={tools}
              setCurrentLocation={setCurrentLocation}
            />
          }
        />
      </Routes>
    </Router>
  );
}
