
import React from 'react';
import "../../assets/scss/page/member.scss";
//component
import Lnb from './_Lnb.js';
import BtnTop from '../../component/Inc/BtnTop';
function JobSearchApply() {
  return (
    <main className='com_mypage p_job_search_apply'>
      <div className='com_center_wrap'>
        <Lnb PageTitle="적극적 구직 서비스 신청"/>
        <div className='container'>
          <h2 className='com_pg_tit'>적극적 구직 서비스 신청</h2>
          <p className='sub_desc'>적극적 구직 서비스 전에 약관에 동의 하셔야 적극구직 혜택을 받을 수 있습니다.</p>
          <section className="sec_agree">
            제1조

            적극적 구직 서비스에 관한 내용입니다.

            관리자모드 수급 내용 적용
          </section>

          <div className='agree_chk_wrap'>
            <input type="checkbox" className="com_chk" id='agree01'/>
            <label htmlFor='agree01'>위 약관에 동의합니다.</label>
          </div>
          <div className="com_btn_wrap center">
            <button className="com_btn bg blue m">제출하기</button>
          </div>
        </div>
      </div>
      {/* top button */}
      <BtnTop />
    </main>
  );
}

export default JobSearchApply;
