/* eslint-disable */
import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import "../../assets/scss/page/member.scss";
//image
//component
import Lnb from './_Lnb';
import BtnTop from '../../component/Inc/BtnTop';
import Paging from '../../component/Inc/Paging';

function RecruitStatus() {  
  const [tabState, setTabState] = useState(0);
  const tab = [
    { text: "추천 인재", value: 0 },
    { text: "찜한 인재", value: 1 },
    { text: "제안을 보낸 인재", value: 2 },
    { text: "면접 문구 설정", value: 3 },
    { text: "채용상태", value: 4 },
  ];
  const renderTab = useCallback(() => {
    return tab.map((v, idx) => {
      return (
        <button key={idx} className={`tab ${tabState === v.value && "active" || ""}`} onClick={() => setTabState(v.value)}>
          {v.text}
        </button>
      );
    });
  }, [tab]);
  return (
    <main className='com_mypage com_company p_company_recruit_status'>
      <div className='com_center_wrap'>
        
      <Lnb PageTitle="채용관리" MenuExchange="active"/>
        <div className='container'>
          <h2 className='com_pg_tit'>채용관리</h2>
          <div className="com_pg_tab">
            {renderTab()}
          </div>
          <div className="tab_content">
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
              <colgroup><col width="20%"/><col width="20%"/><col /><col width="20%"/></colgroup>
              <thead>
                <tr>
                  <th>지원자</th>
                  <th>지원일</th>
                  <th>이력서</th>
                  <th>상태</th>
                </tr>
              </thead>
              <tbody>
                {[1,2,3].map((item, index) => (
                <tr key={index}>
                  <td className='info_field'><span className='th_m'>지원자 :</span>홍길동</td>
                  <td className='info_field info_apply_date'><span className='th_m'>지원일 :</span>23.01.11</td>
                  <td className='info_field info_btn'><Link to="/Company/Resume" className="com_btn oval line s">이력서 보기</Link></td>
                  <td className='info_field info_btn'>
                    <select className='select'>
                      <option value="지원중">지원중</option>
                      <option value="서류통과">서류통과</option>
                      <option value="서류거절">서류거절</option>
                    </select>
                    {/* 합격 */}
                  </td>
                </tr>
                ))}
              </tbody>
            </table>
            <Paging />
          </div>
        </div>
      </div>
      {/* top button */}
      <BtnTop />
    </main>
  );
}

export default RecruitStatus;
