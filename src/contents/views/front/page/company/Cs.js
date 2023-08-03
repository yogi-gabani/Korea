/* eslint-disable */
import React, { useState, useCallback } from 'react';
import "../../assets/scss/page/member.scss";
//image
//component
import BtnTop from '../../component/Inc/BtnTop';
import Paging from '../../component/Inc/Paging';
import Upload from '../../component/Inc/Upload';
import Lnb from './_Lnb';

function Cs() {
  const [select, setSelect] = useState([]);
  const [csTabState, setCsTabState] = useState(0);
  const [tabState, setTabState] = useState(0);
  const tab = [
    { text: "자주 묻는 질문", value: 0 },
    { text: "1:1 문의", value: 1 },
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
  const csTab = [
    { text: "회원정보", value: 0 },
    { text: "환전관련", value: 1 },
    { text: "포인트", value: 2 },
    { text: "서비스", value: 3 },
  ];
  const renderCsTab = useCallback(() => {
    return csTab.map((v, idx) => {
      return (
        <button key={idx} className={`cs_tab_item ${csTabState === v.value && "active" || ""}`} onClick={() => setCsTabState(v.value)}>
          {v.text}
        </button>
      );
    });
  }, [csTab]);
  const clickHandler = (index) => {
    if (!select.includes(index)) {
      setSelect((select) => [...select, index]);
    } else {
      setSelect(select.filter((button) => button !== index));
    }
  };
  return (
    <>
      <main className='com_mypage com_company p_cs'>
        <div className='com_center_wrap'>
          
          <Lnb PageTitle="고객센터" MenuExchange="active"/>
          <div className='container'>
            <h2 className='com_pg_tit'>고객센터</h2>
            <div className="com_pg_tab">
              {renderTab()}
            </div>
            
            {tabState === 0 && (
              <div className="tab_content">
                <div className="top_wrap">
                  <div className="cs_tab">
                    {renderCsTab()}
                  </div>
                  <div className="input_wrap">
                    <input type="text" className="input" placeholder='검색할 내용을 입력해 주세요.'/>
                    <button className="com_btn bg blue s btn_search">조회</button>
                  </div>
                </div>
                <table className='com_board_list'>
                  <colgroup><col width="20%"/><col /></colgroup>
                  <thead>
                    <tr>
                      <th>구분</th>
                      <th>제목</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[1,2,3].map((item, index) => (
                    <>
                      <tr key={index} onClick={() =>clickHandler(index)} className={`faq_title ${select.includes(index) ? "" : "active"}`}>
                        <td className='info_field'>탈퇴</td>
                        <td className='tit_field left'>회원 탈퇴를 취소하고 싶습니다.</td>
                      </tr>
                      <tr className='answer'>
                        <td colSpan={2}>
                          소셜 로그인은 로그인 화면에서 카카오 또는 Apple 로그인 버튼을 통해 이용 가능합니다.
                          아래 경로로 기존 계정과 소셜 계정을 연동 할 수 있습니다.
                        </td>
                      </tr>
                    </>
                    ))}
                  </tbody>
                </table>
                <Paging />
              </div>
            ) || tabState === 1 && (
              <div className="tab_content">
                <ul className='com_input_sec type_row'>
                  <li className='field_box'>
                    <span className="tit">제목</span>
                    <div className='input_box'>
                      <input type='text' placeholder="Ex: 수수료 환전, 회원정보 관련 등 질문의 제목을 입력해주세요." className='input' />
                    </div>
                  </li>
                  <li className='field_box'>
                    <span className="tit">설명</span>
                    <div className='input_box'>
                      <textarea className='textarea' placeholder='상세한 문의 사항을 작성해주세요. 답변일은 영업일 기준 3일 이내에 답변 드릴 수 있도록 노력하겠습니다.'></textarea>
                    </div>
                  </li>
                  <li className='field_box'>
                    <span className="tit">연락처</span>
                    <div className='input_box'>
                      <input type='text' placeholder='“-” 없이 번호만 입력' className='input' />
                    </div>
                  </li>
                  <li className='field_box'>
                    <span className="tit">첨부파일</span>
                    <div className='input_box'>
                      <div className="input_wrap">
                        <input type='text' className='input' />
                        <Upload title="파일 추가" className="com_btn line s" />
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="agree_wrap">
                  <p className="tit">개인정보 수집 및 이용에 대한 동의 내용</p>
                  <ul>
                    <li>①개인정보 수집 항목: 이메일, 연락처</li>
                    <li>②수집목적: 고객식별, 문의 응대, 서비스 품질 향상</li>
                    <li>③보유 및 이용기간: 수집 목적이 달성되면 지체없이 모든 개인정보를 파기합니다. 단, 관계법령에서 일정 기간 정보의 보관을 규정한 경우에 한해 분리 보관 후 파기합니다.</li>
                  </ul>
                  <p className='desc'>*위 동의는 거부할 수 있으며, 거부 시 해당 문의를 처리할 수 없습니다.</p>
                </div>
                <div className='agree_chk_wrap'>
                  <input type="checkbox" className="com_chk" id='agree01'/>
                  <label htmlFor='agree01'>위 약관에 동의합니다.</label>
                </div>
                <div className="com_btn_wrap center">
                  <button className="com_btn blue s">제출</button>
                  <button className="com_btn line blue s">취소</button>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* top button */}
        <BtnTop />
      </main>
    </>
  );
}

export default Cs;
