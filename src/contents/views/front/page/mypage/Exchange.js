
import React , { useState} from 'react';
import { Link } from 'react-router-dom';
import "../../assets/scss/page/member.scss";
//component
import Lnb from './_Lnb.js';
import Paging from '../../component/Inc/Paging';
import BtnTop from '../../component/Inc/BtnTop';
import Modal from '../../component/Inc/Modal';

function Exchange() {
  const [modalOpen, setModalOpen] = useState(false);
  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <main className='com_mypage p_exchange'>
        <div className='com_center_wrap'>
          <Lnb PageTitle="환전내역" MenuExchange="active"/>
          <div className='container'>
            <h2 className='com_pg_tit'>환전내역</h2>
            <section className='sec_point'>
              <article className='item'>
                <h3 className='tit'>총 포인트</h3>
                <p className='num'>14,000p</p>
              </article>
              <article className='item'>
                <h3 className='tit'>환전 가능 포인트</h3>
                <p className='num'>14,000p<button className='com_btn blue xs oval' onClick={() => setModalOpen(true)}>환전</button></p>
              </article>
              <article className='item'>
                <h3 className='tit'>환전 신청 포인트</h3>
                <p className='num'>14,000p</p>
              </article>
              <article className='item'>
                <h3 className='tit'>환전 완료 포인트</h3>
                <p className='num'>14,000p</p>
              </article>
            </section>
            <section className='com_board_search'>
              <select className='seclect'>
                <option>전체</option>
              </select>
              <article className='date_select type_btns'>
                <button className='com_btn blue line s'>전체</button>
                <button className='com_btn lightgray s'>1개월</button>
                <button className='com_btn lightgray s'>3개월</button>
              </article>
              <article className='date_select type_input'>
                <input type="date" className="com_datepicker" placeholder="2022. 01. 01"/>
                <input type="date" className="com_datepicker" placeholder="2022. 01. 01"/>
                <button className='com_btn blue s'>조회</button>
              </article>
            </section>
            <table className='com_board_list'>
              <colgroup><col width="26%"/><col/><col width="16%"/><col width="18%"/></colgroup>
              <thead>
                <tr>
                  <th>날짜</th>
                  <th>구분</th>
                  <th>금액</th>
                  <th>상태</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='info_field'><span className='th_m'>날짜 :</span>2022.12.28 13:00:10</td>
                  <td className='tit_field'>멘토링 상품 판매</td>
                  <td className='info_field last'><span className='th_m'>금액 :</span>2,000p</td>
                  <td className='state_field'>적립</td>
                </tr>
                <tr>
                  <td className='info_field'><span className='th_m'>날짜 :</span>2022.12.28 13:00:10</td>
                  <td className='tit_field'>멘토링 상품 판매</td>
                  <td className='info_field last'><span className='th_m'>금액 :</span>2,000p</td>
                  <td className='state_field'>적립</td>
                </tr>
              </tbody>
            </table>
            <Paging />
          </div>
        </div>
        {/* top button */}
        <BtnTop />
      </main>
      <Modal open={modalOpen} close={handleCloseModal} type="type_alert">
        <div className="content_container scroll">
          <strong>계좌 내용이 확인되지 않습니다.</strong> <br />
          환전계좌를 입력 하시겠습니까?
        </div>
        <div className="btn_container">
          <Link to="/front/Mypage/Account" className="com_btn blue s">작성하기</Link>
          <button className="com_btn blue line s" onClick={() => handleCloseModal()}>취소</button>
        </div>
      </Modal>
    </>
  );
}

export default Exchange;
