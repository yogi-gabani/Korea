
import React from 'react';
import "../../assets/scss/page/member.scss";
//component
import Lnb from './_Lnb.js';
import Paging from '../../component/Inc/Paging';
import BtnTop from '../../component/Inc/BtnTop';

function Push() {
  return (
    <>
      <main className='com_mypage p_push'>
        <div className='com_center_wrap'>
          <Lnb PageTitle="알림" MenuPush="active"/>
          <div className='container'>
            <h2 className='com_pg_tit'>알림</h2>
            <table className='com_board_list'>
              <colgroup><col/><col width="16%"/></colgroup>
              <thead>
                <tr>
                  <th>알림내용</th>
                  <th>발송일자</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='tit_field'>KIS 컨설팅에서 면접 제안을 보냈습니다.</td>
                  <td className='info_field last'><span className='th_m'>발송일자 :</span>2022.12.05</td>
                </tr>
                <tr className='checked'>
                  <td className='tit_field'>KIS 컨설팅에서 면접 제안을 보냈습니다.</td>
                  <td className='info_field last'><span className='th_m'>발송일자 :</span>2022.12.05</td>
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

export default Push;
