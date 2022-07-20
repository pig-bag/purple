const Nav = () => {
  return (
    <nav id="nav">
      <ul id="bottom-menu">
        <li>
          <Link to="/">
            <img src="./icon/menu_home.png" alt="홈바로가기" />
            <p>홈</p>
          </Link>
        </li>
        <li>
          <Link to="/map">
            <img src="./icon/menu_location.png" alt="위치바로가기" />
            <p>위치</p>
          </Link>
        </li>
        <li>
          <Link to="/coupon">
            <img src="./icon/menu_coupon.png" alt="쿠폰함바로가기" />
            <p>쿠폰함</p>
          </Link>
        </li>
        <li>
          <Link to="/mypageA">
            <img src="./icon/menu_my.png" alt="마이페이지바로가기" />
            <p>마이페이지</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
