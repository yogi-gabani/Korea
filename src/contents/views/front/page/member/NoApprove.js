
import React from 'react';
import { Link } from 'react-router-dom';
import "../../assets/scss/page/member.scss";

import Logo from '../../assets/img/logo.png';
import Icon from '../../assets/img/icon_approve.png';

function NoApprove() {
  return (
    <>
      <main className='com_member'>
        <h1 className='logo'><Link to="/front/"><img src={Logo} alt="logo" /></Link></h1>
        <div className='box com_ok'>
          <p className='icon'><img src={Icon} alt=''/></p>
          <h2 className='tit'>기업 승인이 미승인 되었습니다.</h2>
          <p className='detail'>안녕하세요 [이름]님, 엔지니어스입니다.<br/>
            안타깝게도 귀사의 회원가입이 미승인 되었습니다.<br/>
            미승인 사유는 아래와 같습니다.</p>
          <section className='text_box'>
          관리자에서 작성한 미승인 사유가 나오는 영역
          </section>
          <p className='detail'>위 내용을 참고하여 정보를 제공해주시면 확인 후<br/>기업 승인 처리에 반영하도록 하겠습니다.</p>
          <section className='info_box'>
            <p className='tit_field'>이메일</p>
            <p className='info_field'>awesome@awesome8.kr</p>
            <p className='tit_field'>고객센터</p>
            <p className='info_field'>02-567-9526</p>
          </section>
          <section className='com_btn_wrap'><Link to="/front/Member/NoApprove" className='com_btn blue m'>확인</Link></section>
        </div>
      </main>
    </>
  );
}

export default NoApprove;
