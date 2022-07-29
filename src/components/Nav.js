import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Nav() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <nav id="nav">
      <div className="navbar-container">
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/" className="text-link"   onClick={closeMobileMenu}>
              <img src="icon/menu_home.png" alt="홈바로가기" />
              <p>홈</p>
            </Link>
          </li>
          <li>
            <Link to="/SignUp" className="text-link"   onClick={closeMobileMenu}>
              <img src="icon/menu_location.png" alt="위치바로가기" />
              <p>위치</p>
            </Link>
          </li>
          <li>
            <Link to="/Coupon" className="text-link"   onClick={closeMobileMenu}>
              <img src="icon/menu_coupon.png" alt="쿠폰함바로가기" />
              <p>쿠폰함</p>
            </Link>
          </li>
          <li>
            <Link
              to="/MyPage"
              className="nav-links-mobile text-link"
              onClick={closeMobileMenu}
            >
              <img src="icon/menu_my.png" alt="마이페이지바로가기" />
              <p>마이페이지</p>
            </Link>
          </li>
        </ul>
        {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
      </div>
    </nav>
  );
}

export default Nav;
