
import React , { useState} from 'react';
import "../../assets/scss/page/member.scss";
//component
import Lnb from './_Lnb.js';
import BtnTop from '../../component/Inc/BtnTop';
import Modal from '../../component/Inc/Modal';

function ExchangeApplication() {
  const [modalOpen, setModalOpen] = useState(false);
  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <main className='com_mypage p_exchange_application'>
        <div className='com_center_wrap'>
          <Lnb PageTitle="환전내역" MenuExchange="active"/>
          <div className='container'>
            <h2 className='com_pg_tit'>환전신청</h2>
            <ul className='com_info_sec'>
              <li className='field_box'>
                <span className="tit">환전계좌</span>
                <div className='info_box'>
                  123456-01-234003
                </div>
              </li>
              <li className='field_box'>
                <span className="tit">계좌명</span>
                <div className='info_box'>국민은행</div>
              </li>
              <li className='field_box'>
                <span className="tit">예금주</span>
                <div className='info_box'>홍길동</div>
              </li>
              <li className='field_box'>
                <span className="tit">환전 가능 포인트</span>
                <div className='info_box'>12,000p</div>
              </li>
              <li className='field_box'>
                <span className="tit">환전 신청 금액</span>
                <div className='info_box'>
                  <input type='number' className='input_num'/> 원  <span className='block_m'>(환전 포인트 단위는 10,000원입니다.)</span>
                </div>
              </li>
              <li className='field_box'>
                <span className="tit">수수료</span>
                <div className='info_box'>3,400원</div>
              </li>
              <li className='field_box'>
                <span className="tit">환전금액</span>
                <div className='info_box'>6,600원</div>
              </li>
            </ul>
            <section className='com_tip_box'>
              <h3 className='tit'>수수료는 어떻게 책정되나요?</h3>
              <ul className='dot_list'>
                <li className='item'>환전신청 금액의 부가세 3.3%와 플랫폼 이용료를 합산한 금액이 수수료로 책정됩니다.</li>
                <li className='item'>예시: 300,000원의 환전 시청 시 수수료는 아래와 같이 계산됩니다.<br/>
                300,000 * 부가세 3.3% = 9,900원<br/>
                300,000 * 엔지니어스 플랫폼 이용료 3% = 9,000원<br/>
                최종 서비스 이용료는 2개의 수수료를 제외한 28,2100원</li>
              </ul>
            </section>
            <section className='com_btn_wrap center'>
              <button className='com_btn blue s' onClick={() => setModalOpen(true)}>환전신청</button>
              <button className='com_btn blue line s'>취소</button>
            </section>
          </div>
        </div>
        {/* top button */}
        <BtnTop />
      </main>
      <Modal open={modalOpen} close={handleCloseModal} type="type_alert" >
        <div className="content_container scroll">
          <strong>환전신청 시 취소가 불가능합니다.</strong><br/>
          그래도 진행 하시겠습니까?
        </div>
        <section className='btn_container'>
          <button className="com_btn blue s" >확인</button>
          <button className="com_btn line blue s" onClick={() => handleCloseModal()}>취소</button>
        </section>
      </Modal>
    </>
  );
}

export default ExchangeApplication;
