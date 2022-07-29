import React from 'react';
// import '../../../../assets/css/common.css';

function MyPage() {
  return (
    <div id="my" class="content">
      <div class="content-inner">
        <section class="top-wrap">
          <div class="img-wrap">
            <img src="./icon/profile.png" alt="기본프로필이미지" />
          </div>
          <div class="text-wrap">
            <h2 class="row01">로그인하세요.</h2>
            <div class="row02"><span>아직 회원이 아니세요?</span> <a href="" class="btn-login"><span>회원가입</span></a></div>
          </div>
        </section>
        <section class="bottom-wrap">
          <ul class="게시판-메뉴">
            <li><a href=""><span>1:1문의</span></a></li>
            <li><a href=""><span>1:1문의</span></a></li>
            <li><a href=""><span>1:1문의</span></a></li>
            <li><a href=""><span>1:1문의</span></a></li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default MyPage;