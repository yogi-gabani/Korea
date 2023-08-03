/* eslint-disable */
import React from 'react';
import "../../assets/scss/page/member.scss";
//image
//component
import BtnTop from '../../component/Inc/BtnTop';
import Paging from '../../component/Inc/Paging';
import Lnb from './_Lnb';

function Notice() {  
  return (
    <main className='com_mypage com_company p_notice'>
      <div className='com_center_wrap'>
        
        <Lnb PageTitle="알림내역" MenuExchange="active"/>
        <div className='container'>
          <h2 className='com_pg_tit'>알림</h2>
          
          <table className='com_board_list'>
            <colgroup><col /><col width="20%"/></colgroup>
            <thead>
              <tr>
                <th>알림내용</th>
                <th>발송일자</th>
              </tr>
            </thead>
            <tbody>
              {[1,2,3].map((item, index) => (
              <tr key={index}>
                <td className='tit_field left'>KIS 컨설팅에서 면접 제안을 보냈습니다.</td>
                <td className='info_field'><span className='th_m'>발송일자 :</span>23.01.11</td>
              </tr>
              ))}
              <tr className="isRead">
                <td className='tit_field left'>[기업명]에 지원하였습니다. 마이페이지  ai 매칭 지원 현황에서 확인해보세요.[기업명]에 지원하였습니다. </td>
                <td className='info_field'><span className='th_m'>발송일자 :</span>23.01.11</td>
              </tr>
            </tbody>
          </table>
          <Paging />
        </div>
      </div>
      {/* top button */}
      <BtnTop />
    </main>
  );
}

export default Notice;
