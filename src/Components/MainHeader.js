import React from 'react';
import './MainHeader.css';
import {Link, Route, Switch} from 'react-router-dom';

function MainHeader() {
  
  return (
    <div className="header_main">
    <div className="header_logo">
        <a className="logo_b" href="/">BUYCON</a>
        <a className="logo_s" href="/">기프티콘 거래를 쉽고 빠르게</a>
    </div>
    <div className="header_menu_a">
        <Link to = "/main/howdo"> 이 용 방 법 </Link>
        <Link to = "/main/notice">공 지 사 항 </Link>
        <Link to ="/main/customer">고 객 센 터 </Link>
    </div>
    <div className="header_menu_b">
        <Link to = "/main/login">로 그 인 </Link>
        <Link to = "/main/signup">회원가입</Link>
    </div>
</div>
  );
}

export default MainHeader;