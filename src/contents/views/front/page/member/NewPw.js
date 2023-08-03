
/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import "../../assets/scss/page/member.scss";
//image
import Logo from '../../assets/img/logo.png';

function NewPw() {
  return (
    <>
      <main className='com_member'>
        <h1 className='logo'><Link to="/front/"><img src={Logo} alt="logo" /></Link></h1>
        <div className='box'>
          <h2 className='pg_tit'>비밀번호 재설정</h2>
          <p className='pg_txt'>회원님의 비밀번호를 다시 설정해주세요.</p>
          <ul className='com_input_sec'>
            <li className='tit_field'>새 비밀번호<i className='icon_must'>*</i></li>
            <li className='input_field'>
              <input type='password' placeholder='영문, 숫자, 특수문자를 입력해서 8자 이상 입력해주세요.'/>
              <p className='tip_txt'>사용가능한 특수문자 ~ {'* ! @ \ # $ % < > ^ & * *'}</p>
            </li>
            <li className='tit_field'>새 비밀번호 확인<i className='icon_must'>*</i></li>
            <li className='input_field'><input type='password' /></li>
          </ul>
          <section className='com_btn_wrap'>
            <button className='com_btn blue l'>변경하기</button>
          </section>
        </div>
      </main>
    </>
  );
}

export default NewPw;
