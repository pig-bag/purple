import React from 'react';
// import '../common.css';
import { Link } from "react-router-dom";
// import '../assets/css/common.css';

function LeftArea() {
  return (
    <div id="LeftArea">
      <h2 class="logo">
      <Link to="/" className="text-link">
          <img src="img/logo_w.png" alt="퍼플로고" />
          <span class="blind">퍼플</span>
          </Link>
      </h2>
      <article class="adTitle">
        <p>
          <em>찾았다</em>
          <span>.</span> 몰랐던 <em class="line">핫플레이스</em>
        </p>
        <p>
          <em>찾았다</em>
          <span>.</span> 놓쳤던 <em class="line">할인율</em>
        </p>
      </article>
      <article class="pushCouponList">
        <h3>퍼플할인추천쿠폰</h3>
        <ul class="couponList">
          <li>
            <a href="javascript:void(0)" class="pushCoupon on">
              [<span class="col01">광주광역시</span>]{" "}
              <span class="col02">콩스시</span> <span class="col03">70%</span>{" "}
              <span class="col04">
                [디너특선] [주말사용가능] 콩스시 2만원상당 콩스시
                2만원상당콩스시 2만원상당콩스시 2만원상당콩스시 2만원상당
              </span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)" class="pushCoupon on">
              [<span class="col01">광주광역시</span>]{" "}
              <span class="col02">콩스시</span> <span class="col03">70%</span>{" "}
              <span class="col04">
                [디너특선] [주말사용가능] 콩스시 2만원상당 콩스시
                2만원상당콩스시 2만원상당콩스시 2만원상당콩스시 2만원상당
              </span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)" class="pushCoupon">
              [<span class="col01">광주광역시</span>]{" "}
              <span class="col02">콩스시</span> <span class="col03">70%</span>{" "}
              <span class="col04">
                [디너특선] [주말사용가능] 콩스시 2만원상당 콩스시
                2만원상당콩스시 2만원상당콩스시 2만원상당콩스시 2만원상당
              </span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)" class="pushCoupon">
              [<span class="col01">광주광역시</span>]{" "}
              <span class="col02">콩스시</span> <span class="col03">70%</span>{" "}
              <span class="col04">
                [디너특선] [주말사용가능] 콩스시 2만원상당 콩스시
                2만원상당콩스시 2만원상당콩스시 2만원상당콩스시 2만원상당
              </span>
            </a>
          </li>
        </ul>
      </article>
      <article class="couponFilter">
        <div class="row01">
          <ul class="genderFilter">
            <li>
              <input type="checkbox" id="female" name="gender" value="female" />
              <label for="female">여성</label>
            </li>
            <li>
              <input type="checkbox" id="male" name="gender" value="male" />
              <label for="male">남성</label>
            </li>
          </ul>
        </div>
        <div class="row02">
          <ul class="ageFilter">
            <li>
              <input type="checkbox" id="age10" name="age" value="age10" />
              <label for="age10">10대</label>
            </li>
            <li>
              <input type="checkbox" id="age20" name="age" value="age20" />
              <label for="age20">20대</label>
            </li>
            <li>
              <input type="checkbox" id="age30" name="age" value="age30" />
              <label for="age30">30대</label>
            </li>
            <li>
              <input type="checkbox" id="age40" name="age" value="age40" />
              <label for="age40">40대</label>
            </li>
            <li>
              <input type="checkbox" id="age50" name="age" value="age50" />
              <label for="age50">50대</label>
            </li>
            <li>
              <input type="checkbox" id="ageAll" name="ageAll" value="ageAll" />
              <label for="ageAll">전체연령</label>
            </li>
          </ul>
        </div>
      </article>
      <article class="hashtag">
        <span>#핫플레이스</span>
        <span>#할인율</span>
        <span>#할인</span>
        <span>#%</span>
        <span>#맛집</span>
        <span>#카페</span>
      </article>
      <article class="bottom-wrap">
        <div class="col01">
          <p>
            퍼플에 대해 알고 싶으신가요?
            <br />
            알아야 사용한다!
          </p>
        </div>
        <div class="col02">
          <a href="" class="btn-landing">
            <span>퍼플랜딩페이지</span>
            <i class="icon"></i>
          </a>
        </div>
      </article>
    </div>
  );
};

export default LeftArea;
