import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./templates/Login";
import { Signup } from "./templates/Signup";

import "./styles/reset.css";
import "./styles/global.css";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="cadastro" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};
