import React from 'react';

function Header() {
  return (
    <div class="sub-header">
    <a href="javascript:history.go(-1);" class="btn-back">
      <i class="icon"></i><span class="blind">뒤로</span></a>
    <h2 class="title">
      로그인
    </h2>
    <div class="right-wrap clearfix util01">
      <a href="javascript:vold(0)" class="btn-search"><i class="xi-search"></i><span class="blind">검색</span></a>
      <a href=""><i class="xi-bell-o"></i><span class="text blind">알림</span>
        <span class="num"></span></a>
    </div>
  </div>
  );
};

export default Header;
