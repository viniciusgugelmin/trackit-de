import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./templates/Login";
import { Signup } from "./templates/Signup";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import "./styles/reset.css";
import "./styles/global.css";
import { alertOptions } from "./config";

export const App = () => {
  return (
    <BrowserRouter>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Signup />} />
        </Routes>
      </AlertProvider>
    </BrowserRouter>
  );
};
