import React, { useState } from 'react';
import BtnTop from '../../component/Inc/BtnTop';
import Modal from '../../component/Inc/Modal';

function Pay() {
  const [paymentModal, setPaymentModal] = useState(false);
  return (
    <main className="com_pay">
      <section className="sec_payment">
        <h2 className="title">인사이트 결제하기</h2>
        <form method='post' className="details">
          <ul className='com_info_sec'>
            <li className='field_box'>
              <span className="tit">인사이트 상품명</span>
              <div className='info_box'>설비에 관한 A~Z</div>
            </li>
            <li className='field_box'>
              <span className="tit">판매자</span>
              <div className='info_box'>K8s</div>
            </li>
            <li className='field_box'>
              <span className="tit">구매일자</span>
              <div className='info_box'>2022.11.18</div>
            </li>
            <li className='field_box'>
              <span className="tit">영상 시청기간</span>
              <div className='info_box'>구매일로부터 90일 간 시청가능</div>
            </li>
            <li className='field_box'>
              <span className="tit">결제금액</span>
              <div className='info_box'>20,000원</div>
            </li>
            <li className='field_box'>
              <span className="tit">보유 포인트</span>
              <div className='info_box'>3000p</div>
            </li>
            <li className='field_box'>
              <span className="tit">이벤트 포인트</span>
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
              <div className='info_box'>19,000원</div>
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
      <Modal open={paymentModal} close={() => setPaymentModal(false)} type="type_apply">
        <div className="message">
          <p className="tit">결제가 완료되었습니다!</p>
          <p className='desc'>동영상은 결제 인사이트 목록에서 <br /> 확인 하실 수 있습니다.</p>
        </div>
        <button className="com_btn blue check" >확인</button>
      </Modal>
    </main>
  )
}

export default Pay