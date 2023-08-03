import React from 'react';
//component
import Lnb from './_Lnb.js';
import BtnTop from '../../component/Inc/BtnTop';
import Paging from '../../component/Inc/Paging';
import AiMatchTab from './_AiTab.js';

function MatchUnread() {
  return (
    <>
      <main className='com_mypage com_my_match'>
        <div className='com_center_wrap'>
          <Lnb PageTitle="AI 매칭 지원 현황" MenuPayAi="active"/>
          <div className='container'>
            <h2 className='com_pg_tit'>AI 매칭 지원 현황</h2>
            <AiMatchTab TabMatchUnread="active"/>
            <table className='com_board_list'>
              <colgroup><col width="17%"/><col/><col width="10%"/><col width="10%"/><col width="25%"/></colgroup>
              <thead>
                <tr>
                  <th>지원 회사</th>
                  <th>지원 공고</th>
                  <th>지원일</th>
                  <th>고용형태</th>
                  <th>지원관리</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='company_field'>삼성</td>
                  <td className='tit_field'>삼성 엔지니어 모십니다</td>
                  <td className='date_field'><span className="th_m">지원일 :</span>22.11.14</td>
                  <td className='type_field'>계약직</td>
                  <td className='btn_field'>
                    <button className='com_btn blue line oval s'>지원 이력서 보기</button>
                    <button className='com_btn gray line oval s'>취소</button>
                  </td>
                </tr>
                <tr>
                  <td className='company_field'>삼성</td>
                  <td className='tit_field'>삼성 엔지니어 모십니다</td>
                  <td className='date_field'><span className="th_m">지원일 :</span>22.11.14</td>
                  <td className='type_field'>계약직</td>
                  <td className='btn_field'>
                    <button className='com_btn blue line oval s'>지원 이력서 보기</button>
                    <button className='com_btn gray line oval s'>취소</button>
                  </td>
                </tr>
              </tbody>
            </table>
            <section className='com_board_list__bottom'>
              <div className='total'>총 지원 수 <span className="num">120</span></div>
            </section>
            <Paging />
          </div>
        </div>
        {/* top button */}
        <BtnTop />
      </main>
    </>
  );
}

export default MatchUnread;
