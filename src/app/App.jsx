import "../app/styles/style.css";
import { Contacts } from "../pages/Contacts/Contacts";
import { BlogPage } from "../pages/BlogPage/BlogPage";
import { Home } from "../pages/Home/Home";
import { SignUpPage } from "../pages/SignUpPage/SignUpPage";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route element={<Home />} path={"/"}></Route>
      <Route element={<SignUpPage />} path={"/signup"}></Route>
      <Route element={<Contacts />} path={"/contacts"}></Route>
      <Route element={<BlogPage/>} path={"/blog"}></Route>
    </Routes>
  );
}
