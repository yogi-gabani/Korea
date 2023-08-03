
import React from 'react';
import { Link } from 'react-router-dom';
import "../../assets/scss/page/member.scss";

import Logo from '../../assets/img/logo.png';
import Icon from '../../assets/img/icon_approve.png';

function Approving() {
  return (
    <>
      <main className='com_member'>
        <h1 className='logo'><Link to="/front/"><img src={Logo} alt="logo" /></Link></h1>
        <div className='box com_ok'>
          <p className='icon'><img src={Icon} alt=''/></p>
          <h2 className='tit'>승인을 조금만 기다려주세요.</h2>
          <p className='tip'>승인완료 전까지는 일부 사용이 제한됩니다.</p>
          <p>영업일 기준 3일 정도의 시간이 소요되며,<br/>심사결과는 이메일로 전송됩니다.</p>
          <section className='com_btn_wrap'><Link to="/front/Member/NoApprove" className='com_btn blue m'>확인</Link></section>
        </div>
      </main>
    </>
  );
}

export default Approving;
