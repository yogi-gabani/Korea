import React from 'react';
import { Link } from 'react-router-dom';
import "../../assets/scss/page/member.scss";
//image
import Logo from '../../assets/img/logo.png';
import Icon from '../../assets/img/icon_approve.png';

function Approve() {
  return (
    <>
      <main className='com_member'>
        <h1 className='logo'><Link to="/"><img src={Logo} alt="logo" /></Link></h1>
        <div className='box com_ok'>
          <p className='icon'><img src={Icon} alt=''/></p>
          <h2 className='tit'>축하합니다!<br/>기업 승인이 완료됐습니다!</h2>
          <p className='detail'>지금 바로 엔지니어스에서 우리 회사에 꼭 맞는 인재를 만나보세요.</p>
          <p className='tip'>서비스 이용 시 필요한 계약을 진행해주세요.</p>
          <section className='text_box'>
          관리자에서 작성한 미승인 사유가 나오는 영역
          </section>
          <p className='detail'>위 내용을 참고하여 정보를 제공해주시면 확인 후<br/>기업 승인 처리에 반영하도록 하겠습니다.</p>
          <section className='info_box'>
            <ul className='dot_list'>
              <li className='item'>회사와 핏이 맞는 인재를 AI 매칭을 통해 추천 받을 수 있어요.</li>
              <li className='item'>엔지니어스에 포지션을 무제한으로 게시할 수 있어요.</li>
              <li className='item'>엔지니어가 원하는 기업이 무엇인지 알 수 있어요.</li>
            </ul>
          </section>
          <section className='com_btn_wrap'><Link to="/Member/NoApprove" className='com_btn blue m'>확인</Link></section>
        </div>
      </main>
    </>
  );
}

export default Approve;
