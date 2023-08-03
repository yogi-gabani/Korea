import React from 'react';
import { Link } from 'react-router-dom';
import "../../assets/scss/page/member.scss";
//component
import Lnb from './_Lnb.js';
import BtnTop from '../../component/Inc/BtnTop';
import Paging from '../../component/Inc/Paging';

function PayInsight() {
  return (
    <>
      <main className='com_mypage p_pay_insight'>
        <div className='com_center_wrap'>
          <Lnb PageTitle="결제 콘텐츠 목록" MenuPayContents="active"/>
          <div className='container'>
            <h2 className='com_pg_tit'>결제 콘텐츠 목록</h2>
            <section className='com_pg_tab'>
              <Link to="/front/Mypage/PayInsight" className='tab active'>결제 인사이트 목록</Link>
              <Link to="/front/Mypage/PayMentoring" className='tab'>결제 멘토링 목록</Link>
            </section>
            <section className='com_board_list__top'>
             <article className='btn_wrap'>
                <button className='com_btn blue oval xs'>삭제</button>
              </article>
            </section>
            <table className='com_board_list'>
              <colgroup><col width="6%"/><col/><col width="13%"/><col width="13%"/><col width="13%"/><col width="13%"/></colgroup>
              <thead>
                <tr>
                  <th></th>
                  <th>상품명</th>
                  <th>카테고리</th>
                  <th>결제금액</th>
                  <th>구매일자</th>
                  <th>남은 시청기간</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='chk_field'>
                    <input type='checkbox' className='com_chk' id='chk01'/><label htmlFor="chk01"></label>
                  </td>
                  <td className='tit_field'>자동차 설비에 관한 A~Z</td>
                  <td className='state_field'>자동차 설비</td>
                  <td className='info_field'><span className="th_m">결제금액 :</span>2000p</td>
                  <td className='date_field'><span className="th_m">구매일자 :</span>22.11.19</td>
                  <td className='info_field last'><span className="th_m">남은 시청기간 :</span>90일</td>
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

export default PayInsight;
