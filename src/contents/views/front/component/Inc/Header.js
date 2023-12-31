/* eslint-disable */
import React, { useState,useCallback,useEffect } from "react";
import { Link, NavLink } from 'react-router-dom';

import Logo from '../../assets/img/logo.png';
import IconAlarm from '../../assets/img/icon_alarm.png';
import IconMy from '../../assets/img/icon_my.png';

function Header() {
  //const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);

  function toggleMenu() {
    setIsActive(!isActive)
  }
  const gnbData = [
    {
      title:'AI매칭',
      link:'/Match'
    },
    {
      title:'멘토링',
      link:'/Mentoring'
    },
    {
      title:'인사이트',
      link:'/Insight'
    },
    {
      title:'커뮤니티',
      link:'/Community'
    },
    {
      title:'매거진',
      link:'/Magazine'
    },
    {
      title:'세미나',
      link:'/Seminar'
    },
    // {
    //   title:'1:1매니징 서비스',
    //   link:'/Managing'
    // },
    {
      title:'마이페이지',
      link:'/Mypage/Exchange'
    },
  ]
  const renderGnb = useCallback(() => {
    return gnbData.map((v, idx) => {
      return (
        <li className="depth01" key={idx}>
          <NavLink to={v.link} onClick={() => {setIsActive(false)}} className={`menu ${isActive ? 'active' : ''}`}>
            {v.title}
          </NavLink>
        </li>
      );
    });
  },[]);
  useEffect(() => {
    if(isActive) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      }
    }
  });
  return (
    <header className={'head' + (isActive ? ' active' : '') }>
      <div className="com_center_wrap">
        <Link to="/" className="logo">
          <img src={Logo} alt="logo" />
        </Link>
        <div className="gnb_container">
          <ul className="gnb_menu">
            {renderGnb()}
          </ul>
        </div>
        <section className="gnb_link">
          <Link to="/Company/Info" className="link btn_company_home">기업회원 홈</Link>
          {/* <Link to="/Member/Login" className="link btn_login">로그인하기</Link> */}
          <Link to="/Mypage/Push" className="link btn_push"><img src={IconAlarm} alt="alarm" /><i className="push">2</i></Link>
          <Link to="/Member/Login" className="link btn_my"><img src={IconMy} alt="로그아웃" /></Link>
        </section>
        <button className="btn_bar BtnBar" onClick={() => {toggleMenu()}}></button>
      </div>
    </header>
  );
} 

export default Header;