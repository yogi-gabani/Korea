import React from 'react';
import { Link } from 'react-router-dom';
import "../../assets/scss/page/member.scss";
//component
import Lnb from './_Lnb.js';
import BtnTop from '../../component/Inc/BtnTop';
import Paging from '../../component/Inc/Paging';

function PayList() {
  return (
    <>
      <main className='com_mypage p_paylist'>
        <div className='com_center_wrap'>
          <Lnb PageTitle="결제내역" MenuPay="active"/>
          <div className='container'>
            <h2 className='com_pg_tit'>결제내역</h2>
            <table className='com_board_list'>
              <colgroup><col width="10%"/><col width="12%"/><col/><col width="13%"/><col width="13%"/><col width="13%"/><col width="10%"/><col width="10%"/></colgroup>
              <thead>
                <tr>
                  <th>날짜</th>
                  <th>사용처</th>
                  <th>상품명</th>
                  <th>결제 포인트</th>
                  <th>이벤트 포인트</th>
                  <th>현재 포인트<br/>(이벤트 포인트)</th>
                  <th>상태</th>
                  <th>포인트 환불</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='info_field'><span className="th_m">날짜 :</span>2022.11.28</td>
                  <td className='info_field'><span className="th_m">사용처 :</span>포인트 충전</td>
                  <td className='tit_field'>
                    <Link to="" className='link_view'>삼성이 무엇인지삼성이 무엇인지삼성이 무엇인지삼성이 무엇인지삼성이 무엇인지삼성이 무엇인지</Link></td>
                  <td className='info_field'><span className="th_m">결제 포인트 :</span>+20,000p</td>
                  <td className='info_field'><span className="th_m">이벤트 포인트 :</span>+20,000p</td>
                  <td className='info_field last'><span className="th_m">현재 포인트(이벤트 포인트) :</span>20,000p(2,000p)</td>
                  <td className='state_field'>충전완료</td>
                  <td className='btn_field'><p className='com_btn oval line s gray' >환불</p></td>
                </tr>
                <tr>
                  <td className='info_field'><span className="th_m">날짜 :</span>2022.11.28</td>
                  <td className='info_field'><span className="th_m">사용처 :</span>포인트 충전</td>
                  <td className='tit_field'>
                    <Link to="" className='link_view'>삼성이 무엇인지삼성이 무엇인지삼성이 무엇인지삼성이 무엇인지삼성이 무엇인지삼성이 무엇인지</Link></td>
                  <td className='info_field'><span className="th_m">결제 포인트 :</span>+20,000p</td>
                  <td className='info_field'><span className="th_m">이벤트 포인트 :</span>+20,000p</td>
                  <td className='info_field last'><span className="th_m">현재 포인트(이벤트 포인트) :</span>20,000p(2,000p)</td>
                  <td className='state_field'>충전완료</td>
                  <td className='btn_field'>-</td>
                </tr>
              </tbody>
            </table>
           
            <Paging />
          </div>
        </div>
        {/* top button */}
        <BtnTop />
      </main>
    </>
  );
}

export default PayList;
