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
import Price from "./pages/Price";

export default function AppRouter() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/logout" element={<AdminLogout />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/tarifs" element={<Price prices={data.prices} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/404" element={<NotFound />} />
          <Route
            index
            element={<Home services={data.services} tools={data.tools} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Provider>
  );
}
