import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Auth } from "./pages/Auth"
import { NotFound } from "./pages/NotFound";



export const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};