/* eslint-disable */
import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import "../../assets/scss/page/mentoring.scss";
//image

//component
import TopBanner from "./_TopBanner";
import Item from './_Item';
import BtnTop from '../../component/Inc/BtnTop';
import Paging from '../../component/Inc/Paging';

function MentorList() {
  const Arr6 = ["1", "2", "3", "4", "5", "6"];
  const [tabState, setTabState] = useState(0);
  const tab = [
    { text: "자동차 설비", value: 0 },
    { text: "전자전기", value: 1 },
    { text: "자동차 공학", value: 2 },
    { text: "설계도면", value: 3 },
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
    <main className="com_mentoring">
      {/* long banner */}
      <TopBanner />
      {/* job list */}
      <section className="sec_mentoring com_bg">
        <div className="com_center_wrap">
          <div className="top_wrap">
            <div className="pg_tit_wrap">
              <h2 className="com_pg_tit">멘토링</h2>
              <div className="com_btn_wrap">
                <Link to="/front/Mypage/ProductMentoring" className="com_btn m black icon_arrow btn_all_list">내 상품 관리</Link>
                <Link to="/front/Mentoring/MentoringProduct" className="com_btn m black icon_arrow btn_all_list">멘토 상품 등록</Link>
              </div>
            </div>
          </div>
          <div className="com_tab_wrap">
            <div className="content_tab">
              {renderTab()}
            </div>
            <div className="input_box icon_search">
              <input type='text' placeholder='키워드를 입력해주세요.' className='input'/>
            </div>
          </div>
          <ul className="list_wrap">
            {Arr6.map((item,index) => (
              <Item key={index}/>
            ))}
          </ul>
          <Paging />
        </div>
      </section>
      {/* top button */}
      <BtnTop />
    </main>
  );
}

export default MentorList;
