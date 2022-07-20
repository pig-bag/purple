import '../main.css';
const RightArea = () => {
  return (
    <div id="RightArea">
      <header id="header">
        <div class="title">
          <h1 class="logo">
            <a href="/">
              <img src="./img/logo_w.png" alt="퍼플로고" />
              <span class="blind">퍼플</span>
            </a>
          </h1>
          <p class="title-de">당신의 모든 쿠폰이 여기에</p>
        </div>
        <div class="search-form-wrap">
          <a
            href="/search?searchKwd=<?php echo $searchKwd;?>"
            class="searchint"
          >
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
                <span class="num"></span>
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
      <div class="search-form-wrap">
        <a href="/search">
          <form class="search-form" method="get">
            <input
              type="text"
              placeholder="검색어를 입력하세요."
              class="searchint"
              autocomplete="off"
              value=""
            />
            <button type="button" class="btn-search">
              <span class="blind">키워드로 검색</span>
            </button>
          </form>
        </a>
      </div>
      <main id="main" class="content">
        <div class="content-inner">
          <input type="hidden" name="GenderFilter" id="GenderFilter" value="" />
          <input type="hidden" name="AgeFilter" id="AgeFilter" value="" />
          <input
            type="hidden"
            name="searchKwd"
            id="searchKwd"
            value="<?php echo $searchKwd;?>"
          />
          <section class="con-list">
            <article class="con-row">
              <a href="javascript:void(0)" class="coupon">
                <div class="img-wrap">
                  <img src="./img/01.jpg" alt="사진" />
                </div>
                <div class="text-wrap">
                  <p class="row01">
                    <span class="area">광주광역시 콩스시</span>
                  </p>
                  <p class="row02">
                    <span class="title">
                      [디너특선] [주말사용가능] 콩스시 2만원상당 콩스시
                      2만원상당콩스시 2만원상당콩스시 2만원상당콩스시 2만원상당
                    </span>
                  </p>
                  <p class="row03">
                    <span class="num">15</span>%
                  </p>
                </div>
                <div class="coupon-down"></div>
              </a>
            </article>
            <article class="con-row">
              <a href="javascript:void(0)" class="coupon">
                <div class="img-wrap">
                  <img src="./img/01.jpg" alt="사진" />
                </div>
                <div class="text-wrap">
                  <p class="row01">
                    <span class="area">광주광역시 콩스시</span>
                  </p>
                  <p class="row02">
                    <span class="title">
                      [디너특선] [주말사용가능] 콩스시 2만원상당 콩스시
                      2만원상당콩스시 2만원상당콩스시 2만원상당콩스시 2만원상당
                    </span>
                  </p>
                  <p class="row03">
                    <span class="num">15</span>%
                  </p>
                </div>
                <div class="coupon-down"></div>
              </a>
            </article>
            <article class="con-row">
              <a href="javascript:void(0)" class="coupon">
                <div class="img-wrap">
                  <img src="./img/01.jpg" alt="사진" />
                </div>
                <div class="text-wrap">
                  <p class="row01">
                    <span class="area">광주광역시 콩스시</span>
                  </p>
                  <p class="row02">
                    <span class="title">
                      [디너특선] [주말사용가능] 콩스시 2만원상당 콩스시
                      2만원상당콩스시 2만원상당콩스시 2만원상당콩스시 2만원상당
                    </span>
                  </p>
                  <p class="row03">
                    <span class="num">15</span>%
                  </p>
                </div>
                <div class="coupon-down"></div>
              </a>
            </article>
          </section>
        </div>
      </main>
      <div class="slider-menu allMenu">
        <button class="btn-close">
          <span class="blind">닫기</span>
          <i class="xi-close-thin"></i>
        </button>
        <section class="top-wrap">
          <div class="img-wrap">
            <img src="./icon/profile.png" alt="기본프로필이미지" />
          </div>
          <div class="text-wrap">
            <a href="javascript:void(0)" class="btn-myset">
              <p class="nicname">
                <span>돼지가방</span>님
              </p>
            </a>
            <h2 class="row01">
              <a href="/mem/login">로그인하세요.</a>
            </h2>
          </div>
        </section>
        <section class="menu-wrap">
          <ul class="menu">
            <li>
              <a href="faq">
                <i class="icon"></i>FAQ<i class="xi-angle-right-thin"></i>
              </a>
            </li>
            <li>
              <a href="coupon">
                <i class="icon"></i>쿠폰함<i class="xi-angle-right-thin"></i>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <i class="icon"></i>마이페이지
                <i class="xi-angle-right-thin"></i>
              </a>
              <ul class="depth02">
                <li>
                  <a href="qnaList">1:1문의</a>
                </li>
                <li>
                  <a href="notiList">공지사항</a>
                </li>
                <li>
                  <a href="faq">FAQ</a>
                </li>
                <li>
                  <a href="mypageB">설정</a>
                </li>
              </ul>
            </li>
          </ul>
          <div class="main-footer">
            <p class="tel">
              070<span>.</span>8633<span>.</span>8942
            </p>
            <a href="info" class="btn-info">
              사업자 정보<i class="xi-angle-right-thin"></i>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RightArea;
