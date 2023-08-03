
import React  from 'react';
import { Link } from 'react-router-dom';
import "../../assets/scss/page/member.scss";
//image
import Logo from '../../assets/img/logo.png';

function SearchPw() {
  return (
    <>
      <main className='com_member'>
        <h1 className='logo'><Link to="/front/"><img src={Logo} alt="logo" /></Link></h1>
        <div className='box'>
          <h2 className='pg_tit'>비밀번호 찾기</h2>
          <p className='pg_txt'>회원가입 시 등록했던 정보를 입력하세요.</p>
          <ul className='com_input_sec'>
            <li className='tit_field'>아이디<i className='icon_must'>*</i></li>
            <li className='input_field'><input type='text' placeholder='아이디를 입력해주세요'/></li>
            <li className='tit_field'>이름<i className='icon_must'>*</i></li>
            <li className='input_field'><input type='text' placeholder='이름을 입력해주세요'/></li>
            <li className='bottom_btn_field'>
              <button className='com_btn m blue line'>휴대폰 본인 인증</button>
            </li>
          </ul>
          <section className='com_btn_wrap'>
            <Link to="/front/Member/Login" className='com_btn gray l'>취소</Link>
            <Link to="/front/Member/NewPw" className='com_btn blue l'>확인</Link>
          </section>
        </div>
      </main>
    </>
  );
}

export default SearchPw;
