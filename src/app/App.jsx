import "../app/styles/style.css";
import { Home } from "../pages/Home/Home";
import { SignUpPage } from "../pages/SignUpPage/SignUpPage";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route element={<Home />} path={"/"}></Route>
      <Route element={<SignUpPage />} path={"/signup"}></Route>
    </Routes>
  );
}
