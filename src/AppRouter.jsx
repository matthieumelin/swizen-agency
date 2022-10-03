import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./redux/store";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminLogin from "./pages/Admin/AdminLogin";
import AdminLogout from "./pages/Admin/AdminLogout";
import Legal from "./pages/Legal";
import Contact from "./pages/Contact";

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
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/logout" element={<AdminLogout />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal" element={<Legal />} />
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Provider>
  );
}
