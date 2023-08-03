
import React from 'react';
import { Link } from 'react-router-dom';
import "../../assets/scss/page/member.scss";
//image
import Logo from '../../assets/img/logo.png';
import Icon from '../../assets/img/icon_ok.png';

function SearchIdOk() {
  return (
    <>
      <main className='com_member'>
        <h1 className='logo'><Link to="/"><img src={Logo} alt="logo" /></Link></h1>
        <div className='box com_ok'>
          <p className='icon'><img src={Icon} alt=''/></p>
          <h2 className='tit'>아이디 찾기에 성공하셨습니다.</h2>
          <p className='detail'>회원님의 아이디는 <span className='com_point_txt'>abcd23</span> 입니다.</p>
          <section className='com_btn_wrap'>
            <Link to="/Member/Loin" className='com_btn blue line m'>로그인</Link>
            <Link to="/Member/SearchPw" className='com_btn blue m'>비밀번호찾기</Link>
          </section>
        </div>
      </main>
    </>
  );
}

export default SearchIdOk;
