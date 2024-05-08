import "../app/styles/style.css";
import { BlogPage } from "../pages/BlogPage/BlogPage";
import { Pricing } from "../pages/Pricing/Pricing";
import { Home } from "../pages/Home/Home";
import { SignUpPage } from "../pages/SignUpPage/SignUpPage";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route element={<Home />} path={"/"}></Route>
      <Route element={<SignUpPage />} path={"/signup"}></Route>
      <Route element={<BlogPage />} path={"/blog"}></Route>
      <Route element={<Pricing />} path={"/pricing"} />
    </Routes>
  );
}
