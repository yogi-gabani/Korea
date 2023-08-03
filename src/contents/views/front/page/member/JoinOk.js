
import React from 'react';
import { Link } from 'react-router-dom';
import "../../assets/scss/page/member.scss";
//image
import Logo from '../../assets/img/logo.png';
import Icon from '../../assets/img/icon_ok.png';

function JoinOk() {
  
  return (
    <>
      <main className='com_member'>
        <h1 className='logo'><Link to="/front/"><img src={Logo} alt="logo" /></Link></h1>
        <div className='box com_ok'>
          <p className='icon'><img src={Icon} alt=''/></p>
          {/*일반회원 start*/}
          <h2 className='tit'>[이름]님, 엔지니어스 <br/>회원가입이 완료되었습니다!</h2>
          <p className='tip'>엔지니어스에서 제공하는 ai 스마트 매칭을 통해 내게 딱 맞는 포지션을 찾아보세요</p>
          <p className='detail'>잠시 후, 엔지니어스 메인 화면으로 이동합니다.<br/>바로 이동을 원하시는 경우 아래의 버튼을 눌러주세요.</p>
          {/*일반회원 end*/}
          {/*기업회원 start*/}
          <h2 className='tit'>[이름]담당자님, 엔지니어스 기업 회원가입 요청을 완료했습니다.</h2>
          <p className='detail'>관리자 승인 후 구인 활동이 가능해집니다.<br/>승인 전에는  기능을 살펴볼 수 있습니다.<br/>심사결과는 가입 시 등록한 이메일을 통해 확인 하실 수 있습니다.</p>
          <section className='info_box'>
            <div className='notice_txt'>
              <p>문의 사항은 아래 번호로 문의주세요.</p>
              <span className='com_point_txt'>02-567-9526</span>
            </div>
          </section>
          {/*기업회원 end*/}
          <section className='com_btn_wrap'><Link to="/front" className='com_btn blue m'>메인 홈으로</Link></section>
        </div>
      </main>
      
    </>
  );
}

export default JoinOk;
