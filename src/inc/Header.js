const Header = () => {
  return (
    <header id="header">
      <div class="title">
        <h1 class="logo">
          <a href="/">
            <img src="img/logo_w.png" alt="퍼플로고" />
            <span class="blind">퍼플</span>
          </a>
        </h1>
        <p class="title-de">당신의 모든 쿠폰이 여기에</p>
      </div>
      <div class="search-form-wrap">
        <a href="/search?searchKwd=<?php echo $searchKwd;?>" class="searchint">
          <span></span>
        </a>
        <button type="button" class="btn-search">
          <span class="blind">키워드로 검색</span>
        </button>
      </div>
      <div class="right-wrap clearfix util01">
        <ul>
          <li>
            <a href="/mynoti" class="btn-ntc">
              <i class="icon"></i>
              <span class="blind">알림</span>
              <span class="num">10</span>
            </a>
          </li>
          <li>
            <button class="btn-allMenu">
              <i class="icon xi-bars"></i>
              <span class="blind">전체메뉴</span>
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
