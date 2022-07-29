import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LeftArea from "./components/LeftArea";
// css
import "./assets/css/common.css";
import "./App.css";
// import "./assets/css/main.css";
// import "./main.css";
// Pages
import Home from "./components/pages/Main";
import MyPage from "./components/pages/main/my/MyPage";
import Coupon from "./components/pages/main/coupon/Coupon";
import SignUp from "./components/pages/main/mem/Login";
import Header from "./components/Header";
import Nav from "./components/Nav";

function App(props) {
  return (
    <BrowserRouter>
      <LeftArea />
      <div id="RightArea">
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="Coupon" element={<Coupon />} />
          <Route path="MyPage" element={<MyPage />} />
          <Route path="sign-up" element={<SignUp />} />
        </Routes>
        <Nav />
      </div>
    </BrowserRouter>
  );
}

export default App;
