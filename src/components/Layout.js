import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import LeftArea from './components/LeftArea';
// css
import "./App.css";
// import "./common.css";
// import "./main.css";
// Pages
import Home from './components/pages/Main';
import MyPage from './components/pages/main/my/MyPage';
import Coupon from './components/pages/main/coupon/Coupon';
import SignUp from './components/pages/main/mem/Login';

function App(props) {
  return (
    <BrowserRouter>
    <LeftArea />
      <Routes>
        <Route index element={<Home />} />
        <Route path="Coupon" element={<Coupon />} />
        <Route path="MyPage" element={<MyPage />} />
        <Route path="sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
