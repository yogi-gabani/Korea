/* eslint-disable */
import React, { useCallback, useState } from 'react';
import Item from './_Item';
import BtnTop from '../../component/Inc/BtnTop';

import '../../assets/scss/page/insight.scss';
import Paging from '../../component/Inc/Paging';
import PopFilter from './_popFilter';
import PopApply from './_popApply';
import { Link } from 'react-router-dom';

function List() {
  const [tabState, setTabState] = useState(0);
  const [modalApply, setModalApply] = useState(false);
  const [modalFilter, setModalFilter] = useState(false);
  const tab = [
    { text: "자동차 설비", value: 0 },
    { text: "전자전기", value: 1 },
    { text: "자동차 공학", value: 2 },
    { text: "설계도면", value: 3 },
  ];
  const renderTab = useCallback(() => {
    return tab.map((v, idx) => {
      return (
        <button key={idx} className={`tab ${(tabState === v.value && "active") || ""}`} onClick={() => setTabState(v.value)}>
          {v.text}
        </button>
        // eslint-disable-next-line react-hooks/exhaustive-deps
      );
    });
  }, [tabState]);
  return (
    <main className="p_insight">
      {/* long banner */}
      <section className="sec_banner">
      </section>
      <section className="sec_insight">
        <div className="com_center_wrap">
          <div className="com_sub_tit_wrap">
            <div className="pg_tit_wrap">
              <h2 className="com_pg_tit">인사이트</h2>
              <div className="com_btn_wrap">
                <button className='com_btn line black m'>상품관리</button>
                <button className='com_btn line black m'>결제 콘텐츠 목록 보기</button>
                <Link to={'/front/Insight/Write'} className='com_btn bg black m btn_register'>인사이트 등록</Link>
              </div>
            </div>
            <div className="com_tab_wrap">
              <div className="content_tab">
                {renderTab()}
              </div>
              <button className='btn_filter' onClick={() => setModalFilter(true)}>필터</button>
            </div>
          </div>
          <div className="list_wrap">
            <h2 className="tit">현직자와 만나봤습니다</h2>
            <ul className="com_card_wrap">
              {[1,2,3,4].map((item,index) => (
                <Item key={index}/>
                ))}
            </ul>
          </div>
          <div className="list_wrap">
            <h2 className="tit">다양한 지식 공유</h2>
            <ul className="com_card_wrap">
              {[1,2,3,4].map((item,index) => (
                <Item key={index}/>
              ))}
            </ul>
            <Paging />
          </div>
        </div>
      </section>
      {/* top button */}
      <BtnTop />
      <PopFilter open={modalFilter} close={() => setModalFilter(false)} />
      <PopApply open={modalApply} close={() => setModalApply(false)} />
    </main>
  )
}

export default List;