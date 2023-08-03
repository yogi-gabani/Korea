import React from 'react';
import "../../assets/scss/page/member.scss";
//component
import Lnb from './_Lnb.js';
import BtnTop from '../../component/Inc/BtnTop';

function PayMentoring() {
  return (
    <>
      <main className='com_mypage p_webcam'>
        <div className='com_center_wrap'>
          <Lnb PageTitle="결제 콘텐츠 목록" MenuPayContents="active"/>
          <div className='container'>
            <h2 className='com_pg_tit'>홍길동 멘토</h2>
            <section className='sec_webcame'>
              화상미팅이 보여지는 영역
            </section>
            <section className='com_btn_wrap center'>
              <button className='com_btn blue s'>방나가기</button>
            </section>
          </div>
        </div>
        {/* top button */}
        <BtnTop />
      </main>
    </>
  );
}

export default PayMentoring;
