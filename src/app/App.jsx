import "../app/styles/style.css";
import { BlogPageArt } from "../pages/BlogPageArt/BlogPageArt";
import { Contacts } from "../pages/Contacts/Contacts";
import { BlogPage } from "../pages/BlogPage/BlogPage";
import { Pricing } from "../pages/Pricing/Pricing";
import { Home } from "../pages/Home/Home";
import { SignUpPage } from "../pages/SignUpPage/SignUpPage";
import { Route, Routes } from "react-router-dom";
import { Basket } from "../pages/Basket/Basket";
import { Menu } from "../pages/Menu/Menu";

export default function App() {
  return (
    <Routes>
      <Route element={<Home />} path={"/"}></Route>
      <Route element={<Menu />} path={"/menu"}></Route>
      <Route element={<SignUpPage />} path={"/signup"}></Route>
      <Route element={<Pricing />} path={"/pricing"} />
      <Route element={<Contacts />} path={"/contacts"}></Route>
      <Route element={<Basket/>} path={"/basket"}></Route>
      <Route element={<BlogPage />} path={"/blog"}></Route>
      <Route element={<BlogPageArt />} path={"/blog/:id"}></Route>
    </Routes>
  );
}
