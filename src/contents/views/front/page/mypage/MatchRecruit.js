import React from 'react';
//component
import Lnb from './_Lnb.js';
import BtnTop from '../../component/Inc/BtnTop';
import Paging from '../../component/Inc/Paging';
import AiMatchTab from './_AiTab.js';

function MatchRecruit() {
  return (
    <>
      <main className='com_mypage com_my_match'>
        <div className='com_center_wrap'>
          <Lnb PageTitle="AI 매칭 지원 현황" MenuPayAi="active"/>
          <div className='container'>
            <h2 className='com_pg_tit'>AI 매칭 지원 현황</h2>
            <AiMatchTab TabMatchRecruit="active"/>
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
              <article className='search'>
                <input type='text' placeholder='검색할 내용을 입력해 주세요.'/><button className='com_btn blue s'>조회</button>
              </article>
            </section>
            <table className='com_board_list'>
              <colgroup><col width="16%"/><col/><col width="13%"/><col width="13%"/><col width="13%"/></colgroup>
              <thead>
                <tr>
                  <th>지원 회사</th>
                  <th>지원 공고</th>
                  <th>지원일</th>
                  <th>고용형태</th>
                  <th>상태</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='company_field'>삼성</td>
                  <td className='tit_field'>삼성 엔지니어 모십니다</td>
                  <td className='date_field'><span className="th_m">지원일 :</span>22.11.17 </td>
                  <td className='type_field'>정규직</td>
                  <td className='state_field'>지원중</td>
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

export default MatchRecruit;
