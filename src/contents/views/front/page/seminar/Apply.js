import React, { useState } from 'react';
import BtnTop from '../../component/Inc/BtnTop';
import Modal from '../../component/Inc/Modal';

function Apply() {
  const [applyModal, setApplyModal] = useState(false);

  return (
    <main className="com_pay">
      <section className="sec_apply">
        <h2 className="title">세미나 신청하기</h2>
        <form method='post' className="details">
          <ul className='com_info_sec'>
            <li className='field_box'>
              <span className="tit">세미나명</span>
              <div className='info_box'>Future of Work 2022 fall</div>
            </li>
            <li className='field_box'>
              <span className="tit">세미나 일정</span>
              <div className='info_box'>2022.12.04 15:00</div>
            </li>
            <li className='field_box'>
              <span className="tit">구매일자</span>
              <div className='info_box'>2022.12.04</div>
            </li>
            <li className='field_box'>
              <span className="tit">취소가능 날짜</span>
              <div className='info_box'>2022.12.03까지</div>
            </li>
            <li className='field_box'>
              <span className="tit">결제금액</span>
              <div className='info_box'>55,000원</div>
            </li>
            <li className='field_box'>
              <span className="tit">보유 포인트</span>
              <div className='info_box'>3000p</div>
            </li>
            <li className='field_box'>
              <span className="tit">보유 이벤트 포인트</span>
              <div className='info_box'>2000P</div>
            </li>
            <li className='field_box'>
              <span className="tit">사용 포인트</span>
              <div className='info_box'>
                <input type='number' className='input_num'/> <span className='block_m'>P  (이벤트 포인트가 먼저 차감됩니다)</span>
              </div>
            </li>
            <li className='field_box'>
              <span className="tit">총 결제금액</span>
              <div className='info_box'>54,000원</div>
            </li>
          </ul>
          <div className="agree">
            <input type="checkbox" name="personal" id="personal" className="com_chk"/><label className='label' htmlFor='personal'>구매조건 및 결제대행 서비스 약관에 동의하여야 합니다. <span className='required'>(필수)</span> <p>구매조건 및 개인정보취급방침에 동의합니다. </p></label>
            <span className='message'>자세히</span>
          </div>
          <div className="btn">
            <button className="com_btn line">이전으로</button>
            <button className="com_btn blue">결제하기</button>
          </div>
        </form>
      </section>
      {/* top button */}
      <BtnTop />
      {/* modal */}
      <Modal open={applyModal} close={() => setApplyModal(false)} type="type_apply">
        <div className="message">
          <p className="tit">결제가 완료되었습니다!</p>
          <p className='desc'>동영상은 결제 인사이트 목록에서 <br /> 확인 하실 수 있습니다.</p>
        </div>
        <button className="com_btn blue check" >확인</button>
      </Modal>
    </main>
  )
}

export default Apply