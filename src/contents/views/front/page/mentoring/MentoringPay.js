/* eslint-disable */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../../assets/scss/page/mentoring.scss";
//image
//component
import BtnTop from '../../component/Inc/BtnTop';
import Modal from '../../component/Inc/Modal';
import PopAgree from './_PopAgree';

function MentoringPay() {
  const [modalOpen, setModalOpen] = useState(false);
  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const [modalAgreeOpen, setModalAgreeOpen] = useState(false);
  return (
    <main className="com_mentoring p_mentoring_pay com_bg">
      <h2 className="pg_tit">멘토링 결제하기</h2>
      <div className="box">
        <ul className="com_info_sec">
          <li className='field_box'>
            <span className="tit">멘토링 상품명</span>
            <div className='info_box'>전자 엔지니어의 세계</div>
          </li>
          <li className='field_box'>
            <span className="tit">멘토링 서비스 상품</span>
            <div className='info_box'>[채팅, 화상미팅]</div>
          </li>
          <li className='field_box'>
            <span className="tit">멘토</span>
            <div className='info_box'>홍길동</div>
          </li>
          <li className='field_box'>
            <span className="tit">멘티</span>
            <div className='info_box'>이영호</div>
          </li>
          <li className='field_box'>
            <span className="tit">이메일</span>
            <div className='info_box'>abcd123@awesome8.kr</div>
          </li>
          <li className='field_box'>
            <span className="tit">기간</span>
            <div className='info_box'>2022.11.30 12:00 ~ 2022.12.29 24:00</div>
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
              <input type='number' className='input_num'/> P  <span className='block_m'>(이벤트 포인트가 먼저 차감됩니다)</span>
            </div>
          </li> 
          <li className='field_box'>
            <span className="tit">총 결제금액</span>
            <div className='info_box'>19,000원</div>
          </li>  
        </ul>
        <section className='com_agree_section'>
          <ul className='list'>
            <li className='item'>
              <div>
                <input type="checkbox" className="com_chk" id='agree01'/>
                <label htmlFor='agree01'>
                  구매조건 및 결제대행 서비스 약관에 동의하여야 합니다.<span className='txt_required'>(필수)</span> <br />
                  구매조건 및 개인정보취급방침에 동의합니다.
                </label>
              </div>
              <button className='com_btn txt' onClick={() => setModalAgreeOpen(true)}>자세히</button>
            </li>
          </ul>
        </section>
        <div className="com_btn_wrap center">
          <Link to="/front/Mentoring" className="com_btn line m">멘토 목록으로</Link>
          <button className="com_btn blue m" onClick={() => setModalOpen(true)}>결제하기</button>
        </div>
      </div>
      {/* top button */}
      <BtnTop />

      {/*약관내용 팝업*/}
      <PopAgree open={modalAgreeOpen} close={() => setModalAgreeOpen(false)}/>
      {/* alert */}
      <Modal open={modalOpen} close={handleCloseModal} type="type_alert" >
        <div className="content_container scroll">
          <strong>멘토링 신청이 완료되었습니다!</strong> <br />멘토가 신청을 수락하면 멘토링이 시작됩니다
        </div>
        <div className="btn_container">
          <button className="com_btn blue s" onClick={() => handleCloseModal()}>확인</button>
        </div>
      </Modal>
    </main>
  );
}

export default MentoringPay;
