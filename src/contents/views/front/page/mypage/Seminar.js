import React, {useState} from 'react';
import "../../assets/scss/page/member.scss";
//component
import Lnb from './_Lnb.js';
import BtnTop from '../../component/Inc/BtnTop';
import Paging from '../../component/Inc/Paging';
import Refund from '../../page/mypage/_PopRefund';

function MySeminar() {
  const [modalRefund, setModalRefund] = useState(false);
  return (
    <>
      <main className='com_mypage p_myseminar'>
        <div className='com_center_wrap'>
          <Lnb PageTitle="세미나 신청 내역" MenuSeminar="active"/>
          <div className='container'>
            <h2 className='com_pg_tit'>세미나 신청 내역</h2>
            <section className='com_board_list__top'>
              <article className='btn_wrap'>
                <button className='com_btn blue oval xs'>삭제</button>
              </article>
            </section>
            <table className='com_board_list'>
              <colgroup><col width="6%"/><col/><col width="13%"/><col width="13%"/><col width="13%"/><col width="10%"/><col width="13%"/></colgroup>
              <thead>
                <tr>
                  <th></th>
                  <th>신청한 세미나</th>
                  <th>신청일자</th>
                  <th>세미나 일정</th>
                  <th>결제 금액</th>
                  <th>인원 수</th>
                  <th>환불</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='chk_field'>
                    <input type='checkbox' className='com_chk' id='chk01'/><label htmlFor="chk01"></label>
                  </td>
                  <td className='tit_field'>Future of Work 2022 fall</td>
                  <td className='info_field'><span className="th_m">신청일자</span>22.11.23</td>
                  <td className='info_field'><span className="th_m">세미나 일정</span>22.12.04</td>
                  <td className='info_field'><span className="th_m">결제 금액</span>55,000원</td>
                  <td className='info_field last'><span className="th_m">인원 수</span>2명</td>
                  <td className='btn_field'><span className='block_pc'>결제완료</span><button className='com_btn oval line s' onClick={() => setModalRefund(true)}>환불하기</button></td>
                </tr>
              </tbody>
            </table>
           
            <Paging />
          </div>
        </div>
        {/* top button */}
        <BtnTop />
      </main>
      {/*환불하기 팝업*/}
      <Refund open={modalRefund} close={() => setModalRefund(false)}/>
    </>
  );
}

export default MySeminar;
