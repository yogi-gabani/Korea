import React from 'react';
//component
import Lnb from './_Lnb.js';
import BtnTop from '../../component/Inc/BtnTop';
import Paging from '../../component/Inc/Paging';
import AiMatchTab from './_AiTab.js';

function MatchInterview() {
  return (
    <>
      <main className='com_mypage com_my_match'>
        <div className='com_center_wrap'>
          <Lnb PageTitle="AI 매칭 지원 현황" MenuPayAi="active"/>
          <div className='container'>
            <h2 className='com_pg_tit'>AI 매칭 지원 현황</h2>
            <AiMatchTab TabMatchInterview="active"/>
            <table className='com_board_list'>
              <colgroup><col/><col  width="18%"/><col width="15%"/><col width="13%"/><col width="17%"/><col width="12%"/></colgroup>
              <thead>
                <tr>
                  <th>회사명</th>
                  <th>면접 제안</th>
                  <th>고용형태</th>
                  <th>면접 확정일자</th>
                  <th>면접제안 마감 기한</th>
                  <th>면접 상태</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='company_field'>삼성</td>
                  <td className='btn_field'>
                    <button className='com_btn blue line oval s'>상세 보기</button>
                  </td>
                  <td className='type_field'>정규직</td>
                  <td className='info_field last'><span className="th_m">면접 확정일자 : </span>22.11.17</td>
                  <td className='date_field'><span className="th_m">마감 :</span>22.11.17 까지</td>
                  <td className='state_field'>수락</td>
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

export default MatchInterview;
