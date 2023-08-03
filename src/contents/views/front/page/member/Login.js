
import React from 'react';
import { Link } from 'react-router-dom';
import "../../assets/scss/page/member.scss";

import Logo from '../../assets/img/logo.png';
import SnsNaver from '../../assets/img/login_sns_naver.png';
import SnsKakao from '../../assets/img/login_sns_kakao.png';
import SnsFacebook from '../../assets/img/login_sns_facebook.png';
import SnsApple from '../../assets/img/login_sns_apple.png';
import SnsGoogle from '../../assets/img/login_sns_google.png';

function Login() {
  return (
    <>
      <main className='p_login com_member'>
        <h1 className='logo'><Link to="/"><img src={Logo} alt="logo" /></Link></h1>
        <div className='box'>
          <section className='com_tab'>
            <button className='tab active'>일반회원</button>
            <button className='tab'>기업회원</button>
          </section>
          <section className='sec_input'>
            <input type='text' placeholder='이메일을 입력해주세요.' className='input'/>
            <input type="password" placeholder='비밀번호를 입력해주세요.'  className='input'/>
            <Link to='/Member/Approving' className='com_btn blue m' type="button">로그인</Link>
          </section>
          <section className='find_idpw'>
            <Link to="/Member/SearchId" className='link'>아이디 찾기</Link>
            <Link to="/Member/SearchPw" className='link'>비밀번호 찾기</Link>
          </section>
          <section className='sns_login'>
            <h2 className='tit'>SNS계정으로 간편하게 로그인하세요.</h2>
            <article className='btn_wrap'>
              <button className='btn'><img src={SnsNaver} alt="naver" /></button>
              <button className='btn'><img src={SnsKakao} alt="kakao" /></button>
              <button className='btn'><img src={SnsFacebook} alt="facebook" /></button>
              <button className='btn'><img src={SnsApple} alt="apple" /></button>
              <button className='btn'><img src={SnsGoogle} alt="google" /></button>
            </article>
          </section>
          <section className='sec_join'>
            <h2 className='tit'>
              {/*일반회원*/}
              아직 엔지니어스 회원이 아니신가요?
              {/*기업*/}
              인재를 찾고 계신가요?
            </h2>
            <Link to="/Member/Join" className='com_btn line blue m'>회원가입</Link>
          </section>
        </div>
      </main>
    </>
  );
}

export default Login;
