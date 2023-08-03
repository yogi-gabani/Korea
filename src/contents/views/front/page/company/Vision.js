/* eslint-disable */
import React, { useState, useCallback } from 'react';
import "../../assets/scss/page/member.scss";
//component
import BtnTop from '../../component/Inc/BtnTop';
import Lnb from './_Lnb';

function Vision() {
  const [tabState, setTabState] = useState(0);
  const tab = [
    { text: "기업환경", value: 0 },
    { text: "원하는 인재상", value: 1 },
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
    <main className='com_mypage com_company p_vision'>
      <div className='com_center_wrap'>
        
      <Lnb PageTitle="기업성향" MenuExchange="active"/>
        <div className='container'>
          <h2 className='com_pg_tit'>기업성향</h2>
          <div className="com_pg_tab">
            {renderTab()}
          </div>
          
          {tabState === 0 && (
            <div className="tab_content">
              <div className="tit_wrap">
                <div className="tit">근무환경</div>
              </div>
              <div className="work_wrap">
                <ul className="work_list">
                  <li className="work_item">
                    <p className="tit">근무 시간</p>
                    <ul className="check_list">
                      <li className="check_item">
                        <input type="checkbox" id="chk01" className="com_chk circle"/><label htmlFor="chk01">오전 9시 ~ 오후 6시</label>
                      </li>
                      <li className="check_item">
                        <input type="checkbox" id="chk01" className="com_chk circle"/><label htmlFor="chk01">오전 10시 ~ 오후 7시</label>
                      </li>
                      <li className="check_item">
                        <input type="checkbox" id="chk01" className="com_chk circle"/><label htmlFor="chk01">탄력근무 (자율 출퇴근)</label>
                      </li>
                      <li className="check_item">
                        <input type="checkbox" id="chk01" className="com_chk circle"/><label htmlFor="chk01">상관없음</label>
                      </li>
                    </ul>
                  </li>
                  <li className="work_item">
                    <p className="tit">근무 시간</p>
                    <ul className="check_list">
                      <li className="check_item">
                        <input type="checkbox" id="chk01" className="com_chk circle"/><label htmlFor="chk01">오전 9시 ~ 오후 6시</label>
                      </li>
                      <li className="check_item">
                        <input type="checkbox" id="chk01" className="com_chk circle"/><label htmlFor="chk01">오전 10시 ~ 오후 7시</label>
                      </li>
                      <li className="check_item">
                        <input type="checkbox" id="chk01" className="com_chk circle"/><label htmlFor="chk01">탄력근무 (자율 출퇴근)</label>
                      </li>
                      <li className="check_item">
                        <input type="checkbox" id="chk01" className="com_chk circle"/><label htmlFor="chk01">상관없음</label>
                      </li>
                    </ul>
                  </li>
                  <li className="work_item">
                    <p className="tit">근무 시간</p>
                    <ul className="check_list">
                      <li className="check_item">
                        <input type="checkbox" id="chk01" className="com_chk circle"/><label htmlFor="chk01">오전 9시 ~ 오후 6시</label>
                      </li>
                      <li className="check_item">
                        <input type="checkbox" id="chk01" className="com_chk circle"/><label htmlFor="chk01">오전 10시 ~ 오후 7시</label>
                      </li>
                      <li className="check_item">
                        <input type="checkbox" id="chk01" className="com_chk circle"/><label htmlFor="chk01">탄력근무 (자율 출퇴근)</label>
                      </li>
                      <li className="check_item">
                        <input type="checkbox" id="chk01" className="com_chk circle"/><label htmlFor="chk01">상관없음</label>
                      </li>
                    </ul>
                  </li>
                  <li className="work_item">
                    <p className="tit">근무 시간</p>
                    <ul className="check_list">
                      <li className="check_item">
                        <input type="checkbox" id="chk01" className="com_chk circle"/><label htmlFor="chk01">오전 9시 ~ 오후 6시</label>
                      </li>
                      <li className="check_item">
                        <input type="checkbox" id="chk01" className="com_chk circle"/><label htmlFor="chk01">오전 10시 ~ 오후 7시</label>
                      </li>
                      <li className="check_item">
                        <input type="checkbox" id="chk01" className="com_chk circle"/><label htmlFor="chk01">탄력근무 (자율 출퇴근)</label>
                      </li>
                      <li className="check_item">
                        <input type="checkbox" id="chk01" className="com_chk circle"/><label htmlFor="chk01">상관없음</label>
                      </li>
                    </ul>
                  </li>
                  <li className="work_item full">
                    <p className="tit">추가 근무 및 지원</p>
                    <ul className="check_list">
                      <li className="check_item">
                        <span><span className="dot blue"/>필요시 야간 근무가 가능합니까?</span>
                        <div className="select_box">
                          <input type="radio" name="rdo1" id="rdo01" className="input_rdo"/><label htmlFor="rdo01"></label>
                          <input type="radio" name="rdo1" id="rdo02" className="input_rdo type_yes"/><label htmlFor="rdo02"></label>
                        </div>
                      </li>
                      <li className="check_item">
                        <span><span className="dot blue"/>필요시 주말 근무가 가능합니까?</span>
                        <div className="select_box">
                          <input type="radio" name="rdo2" id="rdo03" className="input_rdo"/><label htmlFor="rdo03"></label>
                          <input type="radio" name="rdo2" id="rdo04" className="input_rdo type_yes"/><label htmlFor="rdo04"></label>
                        </div>
                      </li>
                      <li className="check_item">
                        <span><span className="dot blue"/>필요시 야간 근무가 가능합니까?</span>
                        <div className="select_box">
                          <input type="radio" name="rdo3" id="rdo05" className="input_rdo"/><label htmlFor="rdo05"></label>
                          <input type="radio" name="rdo3" id="rdo06" className="input_rdo type_yes"/><label htmlFor="rdo06"></label>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="tit_wrap">
                <div className="tit">성향태그</div>
              </div>
              <div className="work_wrap">
                <ul className="com_tag_list">
                  <button className="com_btn lightblue active">계약직</button>
                  <button className="com_btn lightblue">프리랜서</button>
                  <button className="com_btn lightblue">정규직</button>
                  <button className="com_btn lightblue">프리랜서</button>
                  <button className="com_btn lightblue">프리랜서</button>
                  <button className="com_btn lightblue">프리랜서</button>
                  <button className="com_btn lightblue">프리랜서</button>
                  <button className="com_btn lightblue">프리랜서</button>
                  <button className="com_btn lightblue">정규직</button>
                  <button className="com_btn lightblue">프리랜서</button>
                  <button className="com_btn lightblue">프리랜서</button>
                  <button className="com_btn lightblue">프리랜서</button>
                  <button className="com_btn lightblue">프리랜서</button>
                </ul>
              </div>
              <div className="com_btn_wrap center">
                <button className="com_btn bg blue s">다음으로</button>
              </div>
            </div>
          ) || tabState === 1 && (
            <div className="tab_content">
              <div className="tit_wrap">
                <div className="tit">원하는 인재상</div>
              </div>
              <div className="work_wrap">
                <ul className="com_tag_list">
                  <button className="com_btn lightblue active">적극적 / 열정적</button>
                  <button className="com_btn lightblue">사교적 / 친화적</button>
                  <button className="com_btn lightblue">창의적 / 호기심</button>
                  <button className="com_btn lightblue">책임감 / 리더십</button>
                  <button className="com_btn lightblue">긍정적 / 활동적</button>
                  <button className="com_btn lightblue">신중함 / 계획적</button>
                  <button className="com_btn lightblue">책임감 / 리더십</button>
                  <button className="com_btn lightblue">긍정적 / 활동적</button>
                  <button className="com_btn lightblue">신중함 / 계획적</button>
                </ul>
              </div>
              <div className="com_btn_wrap center">
                <button className="com_btn bg blue s">설정 완료</button>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* top button */}
      <BtnTop />
    </main>
  );
}

export default Vision;
