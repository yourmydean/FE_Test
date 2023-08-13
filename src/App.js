import React from "react";
import HalamanLogin from "./page/login/login";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./page/dashboard/dashboard";
import PrivateRoutes from "./utils/PrivateRoutes";
import { ListRoutes } from "./utils/Routes";
import NotFound from "./page/notfound/Notfound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes />}>
          {ListRoutes.map((item, index) => {
            return (
              <Route key={index} path={item.path} element={item.element} />
            );
          })}
        </Route>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/login" element={<HalamanLogin />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
